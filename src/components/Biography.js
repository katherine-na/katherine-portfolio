import React from "react";

const Biography = () => {
  const dowloadCv = "./files/Web-UI-Katherine-Negrete-Aguilar-08-2022.pdf";
  const videoTitle = require.context('../assets/biography')

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
