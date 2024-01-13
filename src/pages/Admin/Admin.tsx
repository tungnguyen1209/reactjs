import React, {Fragment} from 'react'
import TopBar from "./TopBar/TopBar";
import LeftMenu from "./LeftMenu/LeftMenu";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";

export const Admin = () => {
    return (
        <Fragment>
            <TopBar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <LeftMenu/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Dashboard/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </Fragment>
    )
}
