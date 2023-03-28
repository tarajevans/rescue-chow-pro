import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { SessionProvider, useSession } from "next-auth/react";

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

function MyApp({ Component, pageProps: { session, ...pageProps }  }) {
  return (
    <div>
      <Layout>
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </Layout>
    </div>
  );
}

export default MyApp;
