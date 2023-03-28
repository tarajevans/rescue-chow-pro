import { Fragment, useContext } from "react";
import { CartContextProvider } from "../../GlobalStates/cartState";

// import MainHeader from './main-header';
// import Notification from '../ui/notification';
// import NotificationContext from '../../store/notification-context';

function Layout(props) {
  //   const notificationCtx = useContext(NotificationContext);

  //   const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <CartContextProvider>
        <main>{props.children}</main>
        {/* {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )} */}
      </CartContextProvider>
    </Fragment>
  );
}

export default Layout;
