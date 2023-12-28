import React from "react";
import { useState } from "react";
import './Certification.css'

const certificationImage = [
    require('../../assets/certification/cert-html.png'), 
    require('../../assets/certification/cert-css.png'), 
    require('../../assets/certification/cert-js.png'), 
    require('../../assets/certification/cert-rd.png'), 
]

const Certifications = (image) => {

    return(
        <section id="certification">
            <div className="certification-item">
                <div>
                    {certificationImage.map((image, index) => (
                        <img className="certification-image" key={index} src={image} alt={`Image ${index}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications;