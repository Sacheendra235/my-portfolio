import React from "react";
import "./Projects.css";

const projectsData = [
  {
   title: "Face Recognition based on Attendance System",
  description: "A smart attendance management system that uses facial recognition technology to automatically mark student or employee attendance.",
  tech: ["Python", "Servlets", "MySQL", "HTML", "CSS"],
  link: "https://github.com/Sacheendra235/face-recognition-attendance-systems",
  },
  {
    title: "Student Management System",
    description: "A web app to manage students, calculate percentage, add/update/delete records.",
    tech: ["Java", "JDBC", "Servlets", "Bootstrap"],
    link: "https://github.com/Sacheendra235/student-management-system",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website using React, Node.js, and Tailwind CSS.",
    tech: ["React", "Node.js", "Tailwind", "CSS"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
