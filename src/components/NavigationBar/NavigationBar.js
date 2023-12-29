import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const socialMediaImages = require.context("../../assets/socialMedia");
  
  return (
    <section id="NavigationBar">
      <li className="navbar">
        <ul>Contact Me:</ul>
        <ul className="navbar-social">
          <a
            href="https://www.linkedin.com/in/katherine-negrete-07b65b240/"
            target="_blank"
          >
            <img
              className="footer-image"
              src={socialMediaImages(`./linkeding.jpeg`)}
            />
          </a>
        </ul>
        <ul className="navbar-social">
          <a href="https://github.com/katherine-na" target="_blank">
            <img
              className="footer-image"
              src={socialMediaImages(`./github.png`)}
            />
          </a>
        </ul>
      </li>
    </section>
  );
};

export default NavigationBar;
