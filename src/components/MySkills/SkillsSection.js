import React from 'react';
import Skills from './Skills';
import './Skills.css'

const skillsImage = [
  '../assets/skills/html.png', 
  '../assets/skills/css.png', 
  '../assets/skills/javascript.png', 
  '../assets/skills/linux.png', 
  '../assets/skills/git.png', 
  '../assets/skills/boostrap.png', 
  '../assets/skills/sass.png', 
  '../assets/skills/react.png', 
  '../assets/skills/vscode.png'
]

const SkillsSection = () => {
    return (
        <section id="skills">
        <div class="skills-subtitle">
          <h2>My skills</h2>
          <p>
            I took online courses in various education platforms where I studied
            front end technologies. I did projects using my skills!
          </p>
        </div>
        <div className="skills-items">
          <Skills images={skillsImage}/>
        </div>
        </section>
    )
}

export default SkillsSection;