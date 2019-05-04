import React from "react";

// header component
const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="logo">D</div>
                <div className="company">Demo</div>
            </div>
            <ul className="menubar">
                <li>Services</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}

export default Header;
