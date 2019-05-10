import React from "react";

const CustomersLikesSection = () => {
    return (
        <div id="customers-likes-section">
            <h2 className="title">Why Customers Like Demo</h2>
            <ul className="container customers-likes-list">
                <div className="customers-like">
                    <h3>Billions of Data Points</h3>
                    <p>The most comprehensive coverage both online and in-store with more data points added every day.</p>
                </div>
                <div className="customers-like">
                    <h3>World Class Support</h3>
                    <p>Every customer is assigned a dedicated account manager to ensure success.</p>
                </div>
                <div className="customers-like">
                    <h3>Actionable Insights</h3>
                    <p>Easily analyze big data to make confident decisions that drive impactful results.</p>
                </div>
                <div className="customers-like">
                    <h3>Omnichannel Coverage</h3>
                    <p>A complete view of the retail landscape on and offline to optimize your entire business.</p>
                </div>
                <div className="customers-like">
                    <h3>High Quality Data</h3>
                    <p>We combine the power of data science with human validation to ensure the highest quality and accuracy.</p>
                </div>
                <div className="customers-like">
                    <h3>Increased Efficiency</h3>
                    <p>Automated data collection and workflow processes for measurable cost and time savings.</p>
                </div>
            </ul>
        </div>
    );
}

export default CustomersLikesSection;
