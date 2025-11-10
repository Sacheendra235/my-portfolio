import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or projects!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in touch</h3>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>sacheendra@gmail.com.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+91 9391194979</span>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/gorla-sacheendra-97205823a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/gorla-Sacheendra235"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
