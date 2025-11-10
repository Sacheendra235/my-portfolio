import React from "react";
import "./Hero.css";
import heroPhoto from "../images/sasi-pic.jpg"; // correct relative import

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="hero" 
      style={{ backgroundImage: `url(${heroPhoto})` }} // use imported image
    >
      <div className="hero-content">
        <h1 className="slide-in-left">
          Hello, I'm <span className="highlight">Sacheendra</span>
        </h1>
        <p className="slide-in-right delay-1">
          Full Stack Developer | Python | Java | React | Node.js
        </p>
        <a href="#projects" className="btn slide-in-left delay-2">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
