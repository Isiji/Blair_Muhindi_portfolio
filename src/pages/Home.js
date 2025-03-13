import React from "react";
import Hero from "../components/Hero";
import ProjectsPreview from "../components/ProjectsPreview";
import AboutPreview from "../components/AboutPreview";
import EducationPreview from "../components/EducationPreview";
import ContactPreview from "../components/ContactPreview";
import ExperiencePreview from "../components/ExperiencePreview";
import SkillsPreview from "../components/SkillsPreview";


const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectsPreview />
      <AboutPreview />
      <EducationPreview />
      <ContactPreview />
        <ExperiencePreview />
        <SkillsPreview />
        

    </div>
  );
};

export default Home;
