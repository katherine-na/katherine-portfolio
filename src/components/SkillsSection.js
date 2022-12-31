import React from 'react';
import Skills from './Skills';

const skillsImage = require.context('../assets/skills', true);


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
          <Skills image={ skillsImage(`./html.png`) } name="HTML5"/>
          <Skills image={ skillsImage(`./css.png`) } name="CSS3"/>
          <Skills image={ skillsImage(`./javascript.png`) } name="JavaScript"/>
          <Skills image={ skillsImage(`./linux.png`) } name="Linux"/>
          <Skills image={ skillsImage(`./git.png`) } name="Git"/>
          <Skills image={ skillsImage(`./boostrap.png`) } name="Bootstrap"/>
          <Skills image={ skillsImage(`./react.png`) } name="React"/>
          <Skills image={ skillsImage(`./sass.png`) } name="Sass"/>
          {/* <Skills image={ skillsImage(`./figma.png`) } name="Figma"/> */}
          {/* <Skills image={ skillsImage(`./invision-logo.png`) } name="Invision"/> */}
          <Skills image={ skillsImage(`./vscode.png`) } name="VSCODE"/>
          <Skills image={ skillsImage(`./wordpress.webp`) } name="WordPress"/>
          {/* <Skills image={ skillsImage(`./responsive.jpg`) } name="Responsive Design"/> */}
        </div>
        </section>
    )
}

export default SkillsSection;