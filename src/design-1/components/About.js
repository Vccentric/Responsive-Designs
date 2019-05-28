import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// about component
const About = () => {
    return (
        <div id="page-container">
            <Header />
            <div id="main-content">
                <div className="container max column">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget quam placerat, ut fermentum lorem egestas. Nam non faucibus dolor, a fringilla dolor. Nam hendrerit, diam nec cursus condimentum, elit nisl elementum odio, eu semper velit metus in tortor. Nunc felis lectus, laoreet sed semper vitae, finibus ac tortor. Duis facilisis eros in eros consequat lacinia. Donec vehicula laoreet sapien eget blandit. Curabitur pretium commodo leo vitae consectetur.</p>
                    <p>Suspendisse potenti. Mauris vitae varius mauris, eu ornare neque. Proin feugiat dignissim eros, elementum hendrerit mi varius a. Curabitur feugiat, velit vel luctus ullamcorper, leo nisi pellentesque turpis, nec lobortis libero leo sed lectus. Praesent accumsan justo non placerat hendrerit. Nulla facilisis elit ut dolor venenatis, et maximus nulla sollicitudin. Ut nunc lacus, vestibulum rhoncus diam eget, tincidunt convallis quam. Curabitur vitae nisl et nibh aliquet laoreet. Aliquam feugiat enim quis dolor maximus euismod. Nulla non metus ullamcorper augue blandit elementum. Curabitur in justo euismod, faucibus elit nec, tristique justo. Proin lobortis placerat ullamcorper.</p>
                    <p>Praesent vulputate gravida lacus vehicula feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus est purus, ullamcorper ac cursus ut, malesuada vitae dolor. Nam ut mi tempus, pharetra urna sit amet, scelerisque elit. Morbi condimentum dignissim tristique. Donec porttitor vulputate justo, in auctor enim. Quisque id eros diam. Maecenas volutpat libero quis risus aliquam, sit amet mattis magna lacinia. Mauris vel lobortis mi. Nulla vitae suscipit ex, vel venenatis enim. Quisque blandit est at fermentum rhoncus. Sed dictum nec nisi eget pharetra. Aenean nisi lorem, vulputate ac sollicitudin id, sollicitudin quis metus. Nulla convallis erat in vulputate facilisis. Etiam sit amet massa vitae justo venenatis tempus non id tortor. Pellentesque erat risus, placerat at interdum eu, pharetra id est.</p>
                    <p>Sed euismod non sem porta tincidunt. Cras dignissim libero ac pretium fringilla. Nullam et gravida felis. Suspendisse potenti. Maecenas ac metus eget nibh convallis fringilla. Sed est augue, varius id ipsum vitae, facilisis pharetra ante. Morbi cursus libero a odio malesuada malesuada. In cursus a diam vehicula tempus. Vestibulum rhoncus elit ut magna rhoncus auctor. Morbi et est purus. Sed maximus elementum mattis. In in suscipit diam, vel faucibus ligula. Cras euismod ornare dolor, nec maximus est bibendum non. Morbi aliquet pretium interdum.</p>
                    <p>Suspendisse potenti. Curabitur purus turpis, facilisis sed pulvinar nec, vehicula ac mi. In non massa ultricies, efficitur velit consectetur, interdum lacus. Proin vitae nisi magna. Morbi consectetur, magna sit amet dignissim mattis, mi nibh pharetra ante, vitae consequat lectus neque eu massa. Aliquam id varius orci. Praesent non gravida neque.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
