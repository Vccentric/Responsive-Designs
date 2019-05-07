import React from "react";

const ConsultationForm = () => {
    return (
        <div id="consultation">
            <h3 className="title">Get a free consultation.</h3>
            <p className="description">We'd love to learn more about your business needs and discuss how we can help you deliever the results you want.</p>
            <input type="text" id="fName" name="fName" placeholder="First Name" />
            <br />
            <input type="text" id="lName" name="lName" placeholder="Last Name" />
            <br />
            <input type="text" id="wEmail" name="wEmail" placeholder="Work Email" />
            <br />
            <input type="text" id="cName" name="cName" placeholder="Company Name" />
            <br />
            <select name="topic">
                <option value="">What are you interested in?</option>
                <option value="data">Data</option>
                <option value="price">Pricing</option>
                <option value="promo">Promotions</option>
            </select>
        </div>
    );
}

export default ConsultationForm;
