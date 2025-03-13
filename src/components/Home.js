import React from "react";
import "./Home.css";
import HeroSection from "../components/HeroSection";
import ExperiencePreview from "../components/ExperiencePreview";
import EducationPreview from "../components/EducationPreview";
import ContactPreview from "../components/ContactPreview";
import ProjectsPreview from "../components/ProjectsPreview"; // We'll create this next

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ExperiencePreview />
      <EducationPreview />
      <ProjectsPreview />
      <ContactPreview />
    </div>
  );
};

export default Home;
