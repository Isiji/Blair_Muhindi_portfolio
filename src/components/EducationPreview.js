import React from "react";
import { Link } from "react-router-dom";
import "./EducationPreview.css";

const educationList = [
  {
    institution: "ALX Africa",
    degree: "Software Engineering Program",
    duration: "June 2023 - Aug 2024",
  },
  {
    institution: "Egerton University",
    degree: "BSc. Agricultural Economics",
    duration: "Sept 2016 - June 2021",
  },
  {
    institution: "Corporate Finance Institute",
    degree: "Financial Modelling & Valuation Analysis",
    duration: "Feb 2022 - Feb 2023",
  }
];

const EducationPreview = () => {
  return (
    <section className="education-preview">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <span>{edu.duration}</span>
          </div>
        ))}
      </div>
      <Link to="/education" className="education-btn">View Full Education</Link>
    </section>
  );
};

export default EducationPreview;
