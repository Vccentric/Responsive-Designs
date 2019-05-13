import React from "react";

const HowItWorksSection = () => {
    return (
        <div id="how-it-works-section">
            <div className="container max row">
                <ul className="container row how-it-works-points">
                    <li className="point">
                        <span className="num">30+</span>
                        <span>BRANDS TRACKED</span>
                    </li>
                    <li className="point">
                        <span className="num">100+</span>
                        <span>SKUS MONITORED</span>
                    </li>
                    <li className="point">
                        <span className="num">700+</span>
                        <span>CROWDSOURCED SHOPPERS</span>
                    </li>
                    <li className="point">
                        <span className="num">5+</span>
                        <span>YEARS OF PRODUCT HISTORY</span>
                    </li>
                </ul>
                <div className="container column how-it-works-info">
                    <h2 className="title">How It Works</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in libero justo. Nullam ut dictum ante, eget semper massa. Curabitur ante mi, eleifend nec mi et, molestie dapibus massa. Maecenas molestie felis bibendum efficitur placerat. Phasellus ultrices efficitur leo, vel sagittis dui iaculis at. Vestibulum accumsan tortor eget tortor sollicitudin tincidunt. Pellentesque enim tellus, tempor id tincidunt a, feugiat et lectus. Donec bibendum tincidunt dui quis efficitur. Sed dapibus mauris eu quam blandit, in vulputate ipsum vestibulum. Praesent fermentum pulvinar placerat.</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksSection;
