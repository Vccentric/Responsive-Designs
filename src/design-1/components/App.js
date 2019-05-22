import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ServicesSection from "./ServicesSection";
import HowItWorksSection from "./HowItWorksSection";
import CustomersLikesSection from './CustomersLikesSection';
import ConsultationForm from "./ConsultationForm";
import MainBanner from "./MainBanner";
import "../css/styles.css";
import "../../third-party-libraries/Normalize-8.0.1.css";

// main component
const App = () => {
    return (
        <div id="page-container">
            <Header />
            <MainBanner />
            <ServicesSection />
            <HowItWorksSection />
            <CustomersLikesSection />
            <ConsultationForm />
            <Footer />
        </div>
    );
}

export default App;
