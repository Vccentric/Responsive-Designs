import React from "react";

const NewsletterForm = () => {
    return (
        <div id="newsletter-form">
            <h3 className="title">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="description">Don't miss out on our latest news, posts, and blogs.</p>
            <input type="text" id="emailForNewsletter" name="emailForNewsletter" placeholder="Email Address" />
            <button type="button" className="button submit">SUBSCRIBE</button>
        </div>
    );
}

export default NewsletterForm;
