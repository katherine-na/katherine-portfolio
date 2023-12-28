import React from "react";

const skillsImage = [
  require('../../assets/skills/HTML5_badge.png'), 
  require('../../assets/skills/css.svg.png'), 
  require('../../assets/skills/js.png'), 
  require('../../assets/skills/react.png'), 
  require('../../assets/skills/node.svg.png'), 
  require('../../assets/skills/graphql.svg.png'), 
  require('../../assets/skills/B.svg.png'), 
  require('../../assets/skills/sass.svg.png'), 
  require('../../assets/skills/vtex.png'),
  require('../../assets/skills/vscode.svg.png'),
  require('../../assets/skills/aws.png'),
]

const Skills = (images) => {
  return (
        <div class="item">
          {skillsImage.map((image, index) => (
            <img className="skill-image" key={index} src={image} alt={`Image ${index}`}/>
          ))}
        </div>
  );
};

export default Skills;
