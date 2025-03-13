import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Blair Muhindi Isiji</h1>
        <p>Innovative Software Developer | Problem Solver | Tech Enthusiast</p>
        <Link to="/about" className="hero-btn">Learn More About Me</Link>
      </div>
    </section>
  );
};

export default Hero;
