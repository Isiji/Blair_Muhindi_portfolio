import React from "react";
import "./Projects.css";

const projects = [
  { name: "Tana River Office Management System", link: "https://tanariversenator.co.ke" },
  { name: "Airbnb Clone", link: "#" },
  { name: "EduConnect Education System", link: "#" }
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-item">
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
