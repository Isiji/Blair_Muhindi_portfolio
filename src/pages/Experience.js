import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h1>Experience</h1>
      <div className="job">
        <h2>Software Developer & Researcher</h2>
        <p>Office of Senator - Vihiga County (2022 - Present)</p>
        <ul>
          <li>Developed a document management and event planning web application.</li>
          <li>Analyzed financial statements and conducted in-depth research.</li>
        </ul>
      </div>
      <div className="job">
        <h2>Logistics Assistant</h2>
        <p>Davis & Shirtliff (2021 - 2022)</p>
        <ul>
          <li>Optimized delivery operations and evaluated courier performance.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
