import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsPreview.css";

const projects = [
  { name: "Tana River Office Management System", link: "https://tanariversenator.co.ke" },
  { name: "Airbnb Clone", link: "/projects" },
  { name: "EduConnect Education System", link: "/projects" }
];

const ProjectsPreview = () => {
  return (
    <section className="projects-preview">
      <h2>Featured Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-item">
            {project.name}
          </a>
        ))}
      </div>
      <Link to="/projects" className="projects-btn">View All Projects</Link>
    </section>
  );
};

export default ProjectsPreview;
