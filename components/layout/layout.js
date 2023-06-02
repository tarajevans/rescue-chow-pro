import { Fragment, useContext } from "react";
import { CartContextProvider } from "../../GlobalStates/cartState";
import { ListsDataContexProvider } from "../../GlobalStates/listsDataState";
import Nav from "../nav";
import Footer from "../Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "../Cart";

const queryClient = new QueryClient();

// import MainHeader from './main-header';
import Notification from "../ui/notification";
import NotificationContext from "../../GlobalStates/notification-context";

function Layout(props) {
    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;

    return (
        <Fragment>
            <QueryClientProvider client={queryClient}>
                <CartContextProvider>
                    <ListsDataContexProvider>
                        <Nav />
                        <Cart />
                        <main>{props.children}</main>
                        {activeNotification && (
                            <Notification
                                title={activeNotification.title}
                                message={activeNotification.message}
                                status={activeNotification.status}
                            />
                        )}
                        <Footer />
                    </ListsDataContexProvider>
                </CartContextProvider>
            </QueryClientProvider>
        </Fragment>
    );
}

export default Layout;
