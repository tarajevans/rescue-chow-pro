import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { SessionProvider, useSession } from "next-auth/react";
import { NotificationContextProvider } from "../GlobalStates/notification-context";

function Auth({ children }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true });

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return children;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <div>
            <NotificationContextProvider>
                <SessionProvider session={session}>
                    <Layout>
                        {Component.auth ? (
                            <Auth>
                                <Component {...pageProps} />
                            </Auth>
                        ) : (
                            <Component {...pageProps} />
                        )}{" "}
                    </Layout>
                </SessionProvider>
            </NotificationContextProvider>
        </div>
    );
}

export default MyApp;
