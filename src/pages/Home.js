import React from "react";
import Hero from "../components/Hero";
import ProjectsPreview from "../components/ProjectsPreview";
import AboutPreview from "../components/AboutPreview";
import EducationPreview from "../components/EducationPreview";
import ContactPreview from "../components/ContactPreview";
import ExperiencePreview from "../components/ExperiencePreview";
import SkillsPreview from "../components/SkillsPreview";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <EducationPreview />
      <ExperiencePreview />
      <ContactPreview />
        

    </div>
  );
};

export default Home;
