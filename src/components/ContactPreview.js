import React from "react";
import { Link } from "react-router-dom";
import "./ContactPreview.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPreview = () => {
  return (
    <section className="contact-preview">
      <h2>Get in Touch</h2>
      <div className="contact-info">
        <p><FaEnvelope className="icon" /> <a href="mailto:blairisiji@gmail.com">blairisiji@gmail.com</a></p>
        <p><FaPhone className="icon" /> <a href="tel:+254702805027">+254 702 805027</a></p>
        <p><FaMapMarkerAlt className="icon" /> Nairobi, Kenya</p>
        <p><FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/blair.muhindi" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><FaGithub className="icon" /> <a href="https://github.com/blairisiji" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
      <Link to="/contact" className="contact-btn">Contact Me</Link>
    </section>
  );
};

export default ContactPreview;
