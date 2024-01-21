import React from "react";
import ProjectItem from "./ProjectItem";
import './Projects.css'

const projectImages = require.context("../../assets/projects");

const Projects = () => {
  return (
    <section id="my-projects">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-items">
        <div className="p-item">
          <ProjectItem
            image={projectImages(`./sunshine.png`)}
            name="Swimmwear Store"
            skills="HTML5, SASS, Javascript"
            description="Swimwear online shop with products displayed using images"
            demo="https://katherine-na.github.io/swimsuit-shop-project/marked/index.html"
            repo="https://github.com/katherine-na/swimsuit-shop-project"
          />
        </div>
        <div className="p-item">
          <ProjectItem
            image={projectImages(`./thingstodo.png`)}
            name="Things to do"
            skills="React, Tailwind"
            description="An application to write down the things you have pending to do"
            demo="https://knathingstodo.netlify.app/"
            repo="https://github.com/katherine-na/daily"
          />
        </div>
        <div className="p-item">
          <ProjectItem
            image={projectImages(`./bookstore.png`)}
            name="Book Store"
            skills="Bootstrap"
            description="Awesome book gallery with insightful reviews about it"
            demo="https://katherine-na.github.io/gallery-project/"
            repo="https://github.com/katherine-na/gallery-project"
          />
        </div>
        {/* <div className="p-item">
          <ProjectItem
            image={projectImages(`./clock.png`)}
            name="Clock"
            skills="JavaScript"
            description="This is a web application that displays a real time clock"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
