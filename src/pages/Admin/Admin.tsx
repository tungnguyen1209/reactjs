import React, {Fragment, useEffect} from 'react'
import TopBar from "./TopBar/TopBar";
import LeftMenu from "./LeftMenu/LeftMenu";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import {getCurrentLoginUser} from "../../store/account/actions";
import {useDispatch} from "react-redux";

export const Admin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentLoginUser());
    }, [dispatch]);

    return (
        <Fragment>
            <TopBar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <LeftMenu/>
                </div>
                <div id="layoutSidenav_content">
                    <div id="content">
                        <Dashboard/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Fragment>
    )
}
