import React from "react";
import NewsletterForm from "./NewsletterForm";

// footer component
const Footer = () => {
    return (
        <footer id="footer">
            <div className="container max column">
                <div className="container row footer-lists-section">
                    <ul className="container footer-list">
                        <li className="category">SERVICES</li>
                        <li>Compliance</li>
                        <li>Market Intelligence</li>
                        <li>Optimization</li>
                    </ul>
                    <ul className="container footer-list">
                        <li className="category">COMPANY</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Resources</li>
                    </ul>
                    <ul className="container footer-list">
                        <li className="category">SUPPORT</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                        <li>Resources</li>
                    </ul>
                    <NewsletterForm />
                </div>
                <span className="copyright">Demo &copy;2019. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
