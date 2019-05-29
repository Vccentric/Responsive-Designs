import React from 'react';
import { Link } from "react-router-dom";

// error page not found component
const ErrorNotFound = () => {
    return (
        <div id="error-container">
            <h3>Error: Page not found!</h3>
            <p>Click <Link to="/">Here</Link> to go to the homepage.</p>
        </div>
    );
}

export default ErrorNotFound;
