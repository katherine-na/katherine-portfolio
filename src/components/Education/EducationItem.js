import React from "react";
import Education from "./Education";
import './Education.css'

const schoolImages = ['colbach.png', 'coursera.png', 'udemy.png']

const EducationItem = () => {
  return (
    <div className="education-wrap">
      <div>
        <h2 className="education-title">My Education</h2>
      </div>
      <div className="education-container">
        <Education images={schoolImages}/>
    </div>
     
    </div>
  );
};

export default EducationItem;
