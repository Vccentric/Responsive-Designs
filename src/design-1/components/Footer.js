import React from "react";

// footer component
const Footer = () => {
    return (
        <footer id="footer">
            <ul className="container">
                <li className="category">SERVICES</li>
                <li>Compliance</li>
                <li>Market Intelligence</li>
                <li>Optimization</li>
            </ul>
            <ul className="container">
                <li className="category">COMPANY</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Resources</li>
            </ul>
            <ul className="container">
                <li className="category">SUPPORT</li>
                <li>Contact Us</li>
                <li>Support</li>
                <li>Resources</li>
            </ul>
        </footer>
    );
}

export default Footer;
