import React from "react";


const Skills = (props) => {
  return (
        <div class="item">
          <img src={props.image} className="skill-image"/>
          <p>{props.name}</p>
        </div>
  );
};

export default Skills;
