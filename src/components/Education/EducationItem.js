import React from "react";
import Education from "./Education";
import './Education.css'

const EducationItem = () => {
  return (
    <div className="education-wrap">
      <div>
        <h2 className="education-title">My Education</h2>
      </div>
      <div className="education-container">
        <Education/>
    </div>
     
    </div>
  );
};

export default EducationItem;
