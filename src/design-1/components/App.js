import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ServicesPage from "./ServicesPage";
import ErrorNotFound from "./ErrorNotFound";
import "../css/styles.css";
import "../../third-party-libraries/Normalize-8.0.1.css";

// main router component
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/contact" component={Home} />
                <Route component={ErrorNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
