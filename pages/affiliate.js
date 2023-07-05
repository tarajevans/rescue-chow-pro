import { useSession } from "next-auth/react";

// if the user is an affiliate load a page with affliate info, if user is not an affiliate present a page explaining the program and signup functions
const Affiliate = () => {
    const { data: session, status } = useSession();
    console.log(session);
    return (
        <div>
            {status === "authenticated" ? (
                <div>
                    {session.user.isAffiliate ? (
                        <div>Is affiliate</div>
                    ) : (
                        <div>
                            Is not Affiliate
                        </div>
                    )}
                </div>
            ):(
                <div>
                    Please Log In to continue
                </div>
            )}
        </div>
    );
};

export default Affiliate;
