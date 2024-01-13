import React, {useState} from 'react';
import {useCollapse} from "react-collapsed";

function AuthenticationCollapse() {
    const [isExpanded, setExpanded] = useState(false)
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    return (
        <><a {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })} className={"nav-link" + (isExpanded ? "" : " collapsed")} href="#"
             data-bs-toggle="collapse"
             data-bs-target="#collapseLayouts" aria-expanded={isExpanded ? "true" : "false"}
             aria-controls="collapseLayouts"
        >
            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
            Error
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
            <section {...getCollapseProps()}>
                <div
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link" href="401.html">401 Page</a>
                        <a className="nav-link" href="404.html">404 Page</a>
                        <a className="nav-link" href="500.html">500 Page</a>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default AuthenticationCollapse;