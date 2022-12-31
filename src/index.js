import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Biography from "./components/Biography";
import SkillsSection from "./components/SkillsSection"
import Projects from "./components/Projects";
import ExperienceItem from "./components/ExperienceItem";
import EducationItem from "./components/EducationItem";
import CertificationItem from "./components/CertificationItem";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Biography/>
    <SkillsSection/>
    <Projects/>
    <ExperienceItem/>
    <EducationItem/>
    <CertificationItem/>
    <Footer/>
  </>
);
