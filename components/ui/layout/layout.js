import { PromiseProvider } from "mongoose";
import { Fragment } from "react";

function Layout(props){

    return (
        <Fragment>
            <main>{PromiseProvider.children}</main>
        </Fragment>
    )
}

export default Layout;