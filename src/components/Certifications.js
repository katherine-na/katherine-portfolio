import React from "react";
import { useState } from "react";

const certificationImage = [
    require('../assets/certification/cert-html.png'), 
    require('../assets/certification/cert-css.png'), 
    require('../assets/certification/cert-js.png'), 
    require('../assets/certification/cert-rd.png'), 
    require('../assets/certification/cert-udemy.jpeg')
]

const Certifications = (image) => {

    // const openModal = (certification-image) => {
    //     let modal = document.getElementByClassName(certification-image);
    //     modal.style.display = "block"
    // }

    // const closeModal = (certification-image) => {
    //     let modal =  document.getElementByClassName(certification-image);
    //     modal.style.display = "none"
    // } 

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