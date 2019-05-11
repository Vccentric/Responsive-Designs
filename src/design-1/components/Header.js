import React from "react";

// header component
const Header = () => {
    return (
        <header id="header">
            <div className="container max">
                <div className="company-info">
                    <div className="logo">D</div>
                    <div className="company">Demo</div>
                </div>
                <ul className="menubar">
                    <li>SERVICES</li>
                    <li>SOLUTIONS</li>
                    <li>RESOURCES</li>
                    <li>ABOUT</li>
                    <li>CAREERS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
