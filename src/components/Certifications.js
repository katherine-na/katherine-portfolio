import React from "react";

const Certifications = (props) => {
    return(
        <section id="certification">
            <div className="certification-item">
                <a href={props.certLink}>
                <img className="certification-image" src={props.certImage} />
                </a>
            </div>
        </section>
    )
}

export default Certifications;