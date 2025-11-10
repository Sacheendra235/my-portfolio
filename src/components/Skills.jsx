import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "Java", level: "Expert" },
  { name: "Python", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "HTML & CSS", level: "Expert" },
  { name: "MySQL", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Git & GitHub", level: "Advanced" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
