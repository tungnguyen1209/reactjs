import React, {useState} from 'react';
import {useCollapse} from "react-collapsed";
import AuthenticationCollapse from "./AuthenticationCollapse";
import ErrorCollapse from "./ErrorCollapse";

function PagesCollapse() {
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
            Pages
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
            <section {...getCollapseProps()}>
                <div
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <AuthenticationCollapse/>
                        <ErrorCollapse/>
                    </nav>
                </div>
            </section>
        </>
    )
        ;
}

export default PagesCollapse;