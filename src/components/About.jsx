import React from "react";
import "./About.css";
import profilePhoto from "../images/sasi-pic.jpg"; // same or different photo

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePhoto} alt="Sacheendra" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate Full Stack Developer skilled in Python, Java, React, Node.js, and SQL.  
            I enjoy building interactive and responsive web applications that solve real-world problems.
          </p>
          <p>
            I have completed professional training in Java Full Stack development and continuously improve my skills through hands-on projects.  
            My goal is to create efficient, scalable, and user-friendly web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
