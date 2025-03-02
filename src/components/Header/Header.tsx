import React, { ReactElement } from "react";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import "./header.scss";

export const Header = (): ReactElement => {
    return (
        <div className="headerContainer">
            <div className="header">
                <div className="headerLeft">
                    <HeaderLogo />
                    <HeaderSearch />
                </div>
                <HeaderMenu />
            </div>
        </div>
    );
};

export default Header;
