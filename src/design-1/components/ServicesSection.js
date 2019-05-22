import React from "react";

// services section component
const ServicesSection = () => {
    return (
        <div id="services-section">
            <div className="container max column">
                <div className="container row services">
                    <div className="container column service">
                        <h3 className="title">Market Intelligence</h3>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est nec est imperdiet auctor. Nunc cursus nibh sapien, ut tincidunt enim ullamcorper et. Proin vel sapien efficitur, rutrum leo vel, luctus ipsum. Integer placerat porta felis, non dignissim diam dictum ut. Duis ac neque venenatis, luctus orci quis, luctus velit. Sed suscipit enim et libero sollicitudin egestas. Vestibulum porttitor iaculis euismod. Pellentesque et tortor elit.</p>
                        <span>LEARN MORE</span>
                    </div>
                    <div className="container column service">
                        <h3 className="title">Optimization</h3>
                        <p className="description">Nam ac purus varius, maximus ex quis, consectetur magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras feugiat aliquam dictum. Suspendisse sagittis pulvinar velit ac faucibus. In in dignissim orci, at blandit enim. Nulla enim ante, malesuada quis est vitae, mattis tincidunt mauris. Duis id augue ut turpis eleifend sagittis vitae ut dui. Aenean et diam ac magna pharetra porttitor.</p>
                        <span>LEARN MORE</span>
                    </div>
                    <div className="container column service">
                        <h3 className="title">Compliance</h3>
                        <p className="description">Cras eu turpis et dolor volutpat venenatis id ac mauris. In et nisl et ligula consequat bibendum. Nunc vestibulum auctor turpis, in hendrerit lacus sagittis in. Vestibulum eget quam nec elit blandit semper. Cras vitae nisl vel ligula consequat viverra. Nulla at mi pharetra, scelerisque mauris non, auctor nunc. Cras consequat pretium tortor eu vestibulum. Aliquam convallis tellus nec quam varius, cursus efficitur nunc semper.</p>
                        <span>LEARN MORE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
