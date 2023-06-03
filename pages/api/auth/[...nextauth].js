// import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../models/shopping/User";

const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

const doesAccountExists = async (usernameIn) => {
    const foundUser = await User.findOne({ username: usernameIn });
    if (foundUser) {
        return { result: true, user: foundUser };
    }

    return { result: false };
};

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { username: "testName", name: "J Smith", email: "jsmith@example.com", public: true, scanner: false }

                const { username, password } = credentials;

                const result = await doesAccountExists(username);
                // console.log(result);
                const user = result.user;

                // if no account is found
                if (!user) {
                    // TODO
                    // inform the user and offer to create an account
                    return null;
                }

                if (!verifyPassword(password, user.password)) {
                    console.log("Passwords did not match!!!");
                    return null;
                }
                console.log(user);
                return user;

                // if (user) {
                //     // Any object returned will be saved in `user` property of the JWT
                //     return user;
                // } else {
                //     // If you return null then an error will be displayed advising the user to check their details.
                //     return null;

                //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                // }
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },
    jwt: {
        maxAge: 60 * 60 * 24,
    },
    callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken;
            }
            if (user?.roles) {
                token.roles = user.roles;
            }
            return token;
        },
        async session({ session, token, user }) {
            if (token?.token?.user) {
                session.user = token.token.user;

                console.log(session.user);
            }
            return session;
        },
    },
});
