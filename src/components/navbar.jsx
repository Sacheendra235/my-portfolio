import React, { useState } from "react";
import { 
  FaHome, FaUser, FaProjectDiagram, FaLaptopCode, 
  FaGraduationCap, FaAward, FaEnvelope, FaFileAlt 
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">Sacheendra</div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#hero" onClick={closeMenu}><FaHome className="nav-icon"/> Home</a>
          <a href="#about" onClick={closeMenu}><FaUser className="nav-icon"/> About</a>
          <a href="#projects" onClick={closeMenu}><FaProjectDiagram className="nav-icon"/> Projects</a>
          <a href="#skills" onClick={closeMenu}><FaLaptopCode className="nav-icon"/> Skills</a>
          <a href="#education" onClick={closeMenu}><FaGraduationCap className="nav-icon"/> Education</a>
          <a href="#achievements" onClick={closeMenu}><FaAward className="nav-icon"/> Achievements</a>
          <a href="#contact" onClick={closeMenu}><FaEnvelope className="nav-icon"/> Contact</a>
          <a href="/Certificates/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="resume-btn">
            <FaFileAlt className="nav-icon"/>Resume
          </a>
        </nav>

        <div className={menuOpen ? "hamburger active" : "hamburger"} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
