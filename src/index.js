import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Biography from "./components/Biography/Biography";
import SkillsSection from "./components/MySkills/SkillsSection"
import Projects from "./components/Projects/Projects";
import ExperienceItem from "./components/Experience/ExperienceItem";
import EducationItem from "./components/Education/EducationItem";
import Footer from "./components/Footer/Footer";
import NavigationBar from "../src/components/NavigationBar/NavigationBar"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavigationBar />
    <Biography/>
    <SkillsSection/>
    <Projects/>
    <ExperienceItem/>
    <EducationItem />
    <Footer/>
  </>
);
