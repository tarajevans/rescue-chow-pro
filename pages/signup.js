import { useContext, useEffect, useRef, useState } from "react";
import NotificationContext from "../GlobalStates/notification-context";
import { signIn, signOut, useSession } from "next-auth/react";



const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState("");
    const [doesPasswordMatch, setDoesPasswordMatch] = useState(true);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const notificationCtx = useContext(NotificationContext);

    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const password2InputRef = useRef();

    const createUser = async (email, username, password) => {
        setEmailError(false);
            setUsernameError(false);
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, username, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
    
        if (response.status === 200) {
            // do success stuff
            signIn();
        }else{
            if (response.status === 417){
                setUsernameError(true)
            }else if(response.status === 418){
                setEmailError(true)
            }
        }
        return data;
    };

    useEffect(() => {
        if (password !== password2) {
            setDoesPasswordMatch(false);
            return;
        }

        setDoesPasswordMatch(true);
    }, [password, password2]);

    const createAccountHandler = async () => {
        setErrorMessage(null);

        try {
            const response = await createUser(
                emailInputRef.current.value,
                usernameInputRef.current.value,
                passwordInputRef.current.value
            );

            notificationCtx.showNotification({
                title: "Creating Account",
                message: "Account Created, Please login",
                status: "success",
            });
        } catch (error) {
            setErrorMessage(error)
            console.log(error)
            };
        
    };

    return (
        <div>
            <form className="flex flex-col justify-center items-center mt-6 pt-32">
                {errorMessage && (
                    <div>
                        <h3>{errorMessage}</h3>
                    </div>
                )}

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email {emailError && (<span className="text-red-700">Already in use</span>)}
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@email.com"
                        required
                        ref={emailInputRef}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Username {usernameError && (<span className="text-red-700"> Already in use</span>)}
                    </label>
                    <input
                        type="username"
                        id="username"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                        ref={usernameInputRef}
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Password  <span className="text-grey-600">(Must be at least 7 characters)</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                        ref={passwordInputRef}
                        onChange={() =>
                            setPassword(passwordInputRef.current.value)
                        }
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Password2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="Password2"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                        ref={password2InputRef}
                        onChange={() =>
                            setPassword2(password2InputRef.current.value)
                        }
                    />
                </div>

                {password && (
                    <div className="mb-6">
                        {doesPasswordMatch && (
                            <div className="block mb-2 text-sm font-medium text-gray-900 px-5 py-2.5 text-center rounded-lg bg-green-500">
                                Password Matches
                            </div>
                        )}
                        {!doesPasswordMatch && (
                            <div className="block mb-2 text-sm font-medium text-gray-900 px-5 py-2.5 text-center rounded-lg bg-red-500">
                                Password Does Not Match
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={createAccountHandler}
                    >
                        Register new account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
