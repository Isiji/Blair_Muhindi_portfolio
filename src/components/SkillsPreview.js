import React from "react";
import { Link } from "react-router-dom";
import { FaPython, FaCode, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";
import "./SkillsPreview.css";

const SkillsPreview = () => {
  return (
    <section className="skills-preview">
      <h2>My Skills</h2>
      <div className="skills-list">
        <div className="skill"><FaPython /> Python & Flask</div>
        <div className="skill"><FaCode /> JavaScript & C</div>
        <div className="skill"><FaDatabase /> SQL & Databases</div>
        <div className="skill"><FaDocker /> Docker & DevOps</div>
        <div className="skill"><FaGitAlt /> Git & Version Control</div>
      </div>
      <Link to="/skills" className="skills-btn">View More</Link>
    </section>
  );
};

export default SkillsPreview;
