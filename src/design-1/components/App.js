import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/styles.css";
import "../../third-party-libraries/Normalize-8.0.1.css";

// main component
const App = () => {
    return (
        <div id="page-container">
            <Header />
            <Footer />
        </div>
    );
}

export default App;
