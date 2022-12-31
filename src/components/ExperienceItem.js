import React from "react";
import Experience from "./Experience";

const companyImage = require.context("../assets/experience", true);

const ExperienceItem = () => {
  return (
    <div className="experience-section">
      <h2>My Experience</h2>
      <div className="experience-item">
      <Experience 
          company={companyImage(`./ravik.png`)} 
          companyName="Assistant to Data Scientist"
          companyLocation="Ciudad de México"
          companyDate="Jul 2020 to Apr 2022"
          companyTools="WordPress, Microsoft Office, MacOS, Google Apps, Terminal, Figma, Bash, VS Code, Slack"
          companyDescription="Help with editing image files, data extraction, documentation
          Labeling data, screenshots, data entry, testing, moving files, compression, copying, backups
          Zoom, Google Suite (Slides, Sheets, Docs, Meet, Drive)
          Research details of projects
          Slack, Microsoft Office (Word, Powerpoint, Excel, Teams)
          Mac OS"
          />
        <Experience
          company={companyImage(`./knowledgize.png`)}
          companyName="Knowledgize"
          companyLocation="Playa del Carmen"
          companyDate="23 May to 15 Oct 2022"
          companyTools="Git, GitHub, Django, Bash, Linux, MacOS, HTML5, CSS, Vue.js"
          companyDescription="Update & improve the appearance of Knowledgise web app
          Ensure the accurate translation of information & documentation
          Testing features in development
          Use git & github to update branches with changes
          Research user questions and answers"
        />
        <Experience 
          company={companyImage(`./vinneren.png`)} 
          companyName="Vinneren"
          companyLocation="Ciudad de México"
          companyDate="17 Oct to Present 2022"
          companyTools="Git, Bitbucket, HTML, CSS, Sass, React, VTEX"
          companyDescription=""
          />
      </div>
    </div>
  );
};

export default ExperienceItem;
