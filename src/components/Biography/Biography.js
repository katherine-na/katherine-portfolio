import React from "react";
import './Biography.css'
import MyCV from "../../assets/CV/Front-End-Dev_Katherine_Negrete.pdf"

const Biography = () => {

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
        <a href={MyCV} class="dowloand-cv" download="Front-End-Dev_Katherine_Negrete.pdf">
          Dowloand CV
        </a>
      </div>
      <div></div>
    </section>
  );
};

export default Biography;
