import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ConsultationForm from "./ConsultationForm";

// services page component
const ServicesPage = () => {
    return (
        <div id="page-container">
            <Header />
            <div id="main-content">
                <div className="container max column">
                    <h2>Market Intelligence</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est nec est imperdiet auctor. Nunc cursus nibh sapien, ut tincidunt enim ullamcorper et. Proin vel sapien efficitur, rutrum leo vel, luctus ipsum. Integer placerat porta felis, non dignissim diam dictum ut. Duis ac neque venenatis, luctus orci quis, luctus velit. Sed suscipit enim et libero sollicitudin egestas. Vestibulum porttitor iaculis euismod. Pellentesque et tortor elit.</p>
                    <p>Phasellus sed nisl ullamcorper felis dictum auctor vel eget lorem. Ut molestie magna et lacinia accumsan. Donec turpis lorem, hendrerit vitae molestie eu, ornare vel libero. Nullam lacinia finibus malesuada. Pellentesque tincidunt justo vitae elit accumsan, et ultricies felis placerat. Curabitur tristique felis diam, finibus rutrum tellus commodo eu. Phasellus a justo ex. Integer ornare sed nulla porta molestie. Integer suscipit arcu vitae mi accumsan, vel ultrices orci blandit. Phasellus porttitor id velit eu imperdiet. Proin euismod ullamcorper velit vitae feugiat. Aliquam tempor posuere augue eu pretium. Vivamus ut sodales velit.</p>
                    <h2>Optimization</h2>
                    <p>Nam ac purus varius, maximus ex quis, consectetur magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras feugiat aliquam dictum. Suspendisse sagittis pulvinar velit ac faucibus. In in dignissim orci, at blandit enim. Nulla enim ante, malesuada quis est vitae, mattis tincidunt mauris. Duis id augue ut turpis eleifend sagittis vitae ut dui. Aenean et diam ac magna pharetra porttitor.</p>
                    <p>Integer vehicula turpis accumsan laoreet gravida. Fusce et facilisis ipsum. Fusce sed sem massa. Maecenas suscipit fringilla feugiat. Pellentesque imperdiet feugiat dolor luctus sagittis. Nunc non mollis enim, vel sodales libero. Maecenas elementum odio aliquet lacinia mollis. Nulla tempor cursus eros quis rutrum. Proin consectetur sem convallis enim elementum, quis blandit augue venenatis. Sed id metus at erat porta lacinia sit amet a velit. Etiam venenatis arcu aliquet tempor aliquet. Nam vehicula nibh at nisl pretium cursus. Aenean volutpat lorem mi. Aliquam eget velit aliquet, scelerisque felis ut, euismod nulla. Ut sodales nunc id egestas tristique.</p>
                    <h2>Compliance</h2>
                    <p>Cras eu turpis et dolor volutpat venenatis id ac mauris. In et nisl et ligula consequat bibendum. Nunc vestibulum auctor turpis, in hendrerit lacus sagittis in. Vestibulum eget quam nec elit blandit semper. Cras vitae nisl vel ligula consequat viverra. Nulla at mi pharetra, scelerisque mauris non, auctor nunc. Cras consequat pretium tortor eu vestibulum. Aliquam convallis tellus nec quam varius, cursus efficitur nunc semper.</p>
                    <p>Maecenas bibendum vestibulum leo, eu iaculis orci viverra sed. Suspendisse fermentum est quis nisl venenatis scelerisque. Morbi sit amet turpis suscipit, hendrerit purus pretium, tempor tortor. In quis ante libero. Pellentesque ac orci sit amet mi iaculis efficitur. Praesent porttitor urna ac efficitur finibus. Aenean ac cursus urna, fermentum placerat enim. Morbi maximus, felis ut malesuada vulputate, diam nunc laoreet tortor, in euismod nulla nunc ultricies quam. In at augue vel lectus finibus sodales et ut lacus. Proin pretium venenatis est sit amet consectetur. Curabitur pellentesque, enim a elementum finibus, massa turpis suscipit eros, in vestibulum felis arcu id dui. Donec pulvinar neque sed leo hendrerit, sit amet vehicula sapien dignissim. Maecenas tincidunt massa sem, sit amet semper felis rutrum at. Vivamus vel erat neque.</p>
                </div>
            </div>
            <ConsultationForm />
            <Footer />
        </div>
    );
}

export default ServicesPage;
