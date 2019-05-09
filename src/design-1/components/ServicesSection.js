import React from "react";

// services section component
const ServicesSection = () => {
    return (
        <div className="services-section">
            <h2 className="title">Your single source for omnichannel intelligence and optimization</h2>
            <div className="container row">
                <div className="container column">
                    <h3 className="title">Market Intelligence</h3>
                    <p className="description">Comprehensive market intelligence for ultimate visibility into your competitive landscape across the spectrum of pricing, assortment, and promotions.</p>
                    <span>LEARN MORE</span>
                </div>
                <div className="container column">
                    <h3 className="title">Optimization</h3>
                    <p className="description">Automate online and in-store data collection, analysis, and workflows to capitalize on opportunities to optimize your business.</p>
                    <span>LEARN MORE</span>
                </div>
                <div className="container column">
                    <h3 className="title">Compliance</h3>
                    <p className="description">Protect your brand by ensuring pricing and merchandising compliance across your entire reseller network, both online and in-store.</p>
                    <span>LEARN MORE</span>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
