import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m a detail-oriented Software Developer with expertise in Python, Flask, SQL, and DevOps. 
          Passionate about building efficient web applications and optimizing workflows.
        </p>
        <Link to="/about" className="about-btn">Read More</Link>
      </div>
    </section>
  );
};

export default AboutPreview;
