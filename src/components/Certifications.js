import React from "react";
import { useState } from "react";

const Certifications = (props) => {

    const [showText, setShowText] = useState(false);

    const handleText = () => {
        setShowText(!showText);
    }

    return(
        <section id="certification">
            <div className="certification-item" onMouseOver={handleText}>
                <a href={props.certLink} target="">
                <img className="certification-image" src={props.certImage} />
                <p className={`certification-text ${showText? 'active' : 'inactive'}`}>{props.name}</p>
                </a>
            </div>
        </section>
    )
}

export default Certifications;