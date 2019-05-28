import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home"
import "../css/styles.css";
import "../../third-party-libraries/Normalize-8.0.1.css";

// main router component
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
