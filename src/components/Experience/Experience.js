import React from "react";
import './Experience.css'

const Experience = (props) => {
    return(
        <section id="my-experience">
                <img src={props.company} className="company-img"/>
                <div className="line">{props.line}</div>
                <p className="company-name">{props.companyName}</p>
                <p className="company-location">{props.companyLocation}</p>
                <p className="company-date">{props.companyDate}</p>
                <p className="company-tools">{props.companyTools}</p>
                <p className="company-description">{props.companyDescription}</p>
        </section>
    )
};

export default Experience;