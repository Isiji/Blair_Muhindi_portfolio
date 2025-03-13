import React from "react";
import { Link } from "react-router-dom";
import "./ExperiencePreview.css";

const experiences = [
  {
    role: "Software Developer & Researcher",
    company: "Office of Senator - Vihiga County",
    duration: "Dec 2022 - Present",
  },
  {
    role: "Logistics Assistant",
    company: "Davis & Shirtliff",
    duration: "Mar 2021 - Oct 2022",
  }
];

const ExperiencePreview = () => {
  return (
    <section className="experience-preview">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <span>{exp.duration}</span>
          </div>
        ))}
      </div>
      <Link to="/experience" className="experience-btn">View Full Experience</Link>
    </section>
  );
};

export default ExperiencePreview;
