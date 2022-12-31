import React from "react";

const Education = (props) => {
  return(
    <section id="my-education">
        <div className="education">
            <img className="school-img" src={props.school}/>
            <div className="info">
              <p className="school-info">{props.schoolDate}</p>
              <p className="school-info">{props.schoolInfo}</p>
            </div>
        </div>
    </section>
  )
};

export default Education;
