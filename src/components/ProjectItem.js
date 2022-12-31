import React from "react";

const ProjectItem = (props) => {
  return (
    <section id="project">
      <div class="projects-wrapper">
        <div class="project">
          <div class="project-thumbnail">
            <img src={props.image} className="project-image" />
          </div>
          <div class="project-description">
            <h3 className="p-title">{props.name}</h3>
            <p className="p-skills">{props.skills}</p>
            <p className="p-description">{props.description}</p>
          </div>
        </div>
        <div class="project-buttons">
          <div className="demo">
            <a href={props.demo} target="_blank">Demo</a>
          </div>
          <div className="repo">
            <a href={props.repo} target="_blank">Repository</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
