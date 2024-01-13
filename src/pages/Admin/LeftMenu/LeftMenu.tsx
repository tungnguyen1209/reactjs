import React, {useState} from 'react';
import {Link} from "react-router-dom";
import LayoutsCollapse from "./LayoutsCollapse";
import PagesCollapse from "./PagesCollapse";

function LeftMenu() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link
                        className='nav-link'
                        to='/'
                    >
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                        <LayoutsCollapse/>
                        <PagesCollapse/>
                    <div className="sb-sidenav-menu-heading">Addons</div>
                    <a className="nav-link" href="charts.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                        Charts
                    </a>
                    <a className="nav-link" href="tables.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                        Tables
                    </a>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>
    );
}

export default LeftMenu;