import React from "react";
import Certifications from "./Certifications";

const certificationImage = [
  '../assets/certification/cert-html.png',
  '../assets/certification/cert-css.png',
  '../assets/certification/cert-js.png',
  '../assets/certification/cert-rd.png',
  '../assets/certification/cert-udemy.jpeg'
]

const CertificationItem = () => {
  
  return (
    <div className="certification-wrap">
      <Certifications image={certificationImage}/>
    </div>
  );
};

export default CertificationItem;
