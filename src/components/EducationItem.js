import React from "react";
import Education from "./Education";

const schoolImages = require.context("../assets/school", true);

const EducationItem = () => {
  return (
    <div className="education-wrap">
    <h2 className="education-title">My Education</h2>
      <Education
        school={schoolImages(`./colbach.jpg`)}
        schoolDate="Ago 2020"
        schoolInfo="Activities and societies: Intensive course covering modern web development practice on front-end."
      />
      <Education
      school={schoolImages(`./coursera.png`)}
      schoolDate="Jan 2022"
      schoolInfo="Activities and societies: Intensive course covering modern web development practice on front-end."/>
    </div>
  );
};

export default EducationItem;
