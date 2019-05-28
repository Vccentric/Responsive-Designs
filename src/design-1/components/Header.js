import React from "react";
import { Link, NavLink } from "react-router-dom";

// header component
const Header = () => {
    return (
        <header id="header">
            <div className="container max">
                <div className="company-info">
                    <div className="logo"><NavLink to="/" activeClassName="selected">D</NavLink></div>
                    <div className="company"><NavLink to="/" activeClassName="selected">Demo</NavLink></div>
                </div>
                <ul className="menubar">
                    <li>SERVICES</li>
                    <li><NavLink to="/about" activeClassName="selected">ABOUT</NavLink></li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
