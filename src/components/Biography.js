import React from "react";
import CV from "../assets/biography/Web-UI-Katherine-Negrete-08-2022.pdf"

const Biography = () => {
  const dowloadCv = "../assets/biography/Web-UI-Katherine-Negrete-08-2022.pdf";

  return (
    <section id="biography">
      <div className="biography-intro-text">
        <span>Hi, I'm Katherine!</span>
        <h1 className="title">
          Front End <br />
          Developer
        </h1>
        <p>
          Hi there! I'm a UI Front End Developer, I enjoy building websites.
        </p>
        <a href={dowloadCv} class="dowloand-cv" download>
          Dowloand CV
        </a>
      </div>
    </section>
  );
};

export default Biography;
