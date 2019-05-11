import React from "react";

const ConsultationForm = () => {
    return (
        <div id="consultation-form">
            <div className="container">
                <h2 className="title">GET A FREE CONSULTATION</h2>
                <p className="description">We'd love to learn more about your business needs and discuss how we can help you deliever the results you want.</p>
                <input type="text" id="fName" name="fName" placeholder="First Name" />
                <input type="text" id="lName" name="lName" placeholder="Last Name" />
                <input type="text" id="wEmail" name="wEmail" placeholder="Work Email" />
                <input type="text" id="cName" name="cName" placeholder="Company Name" />
                <select name="topic">
                    <option value="">What are you interested in?</option>
                    <option value="data">Data</option>
                    <option value="price">Pricing</option>
                    <option value="promo">Promotions</option>
                </select>
                <button type="button" className="button submit">SUBMIT</button>
            </div>
        </div>
    );
}

export default ConsultationForm;
