import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institute: "Narayan Engineering College",
      year: "2021 - 2025",
      details: "Specialized in Software Development, Web Applications, and Python projects.",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Intermediate (MPC)",
      institute: "Sri ChaitanayJunior College",
      year: "2019 - 2021",
      details: "Focus on Mathematics, Physics, and Chemistry.",
      icon: <FaGraduationCap />,
    },
    {
      degree: "High School (SSC)",
      institute: "Ap Model High School",
      year: "2018 - 2019",
      details: "Completed secondary education with distinction.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="education" className="education">
      <h2>Education / Study</h2>
      <p className="subtitle">My academic background and achievements</p>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="icon">{edu.icon}</div>
            <h3>{edu.degree}</h3>
            <span className="institute">{edu.institute}</span>
            <span className="year">{edu.year}</span>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
