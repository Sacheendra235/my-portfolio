import React from "react";
import { FaAward } from "react-icons/fa";
import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Java Full Stack Developer",
      description: "Completed full stack Java training at KodNest Bangalore.",
      icon: <FaAward />,
    },
    {
      title: "Python Projects",
      description: "Developed 10+ projects using Python and Django.",
      icon: <FaAward />,
    },
    {
      title: "Internship Certificate 1",
      description: "Backend internship at XYZ Company.",
      certificateUrl: "/Certificates/internship1.pdf",
      icon: <FaAward />,
    },
    {
      title: "Internship Certificate 2",
      description: "Frontend internship at ABC Company.",
      certificateUrl: "/Certificates/internship2.pdf",
      icon: <FaAward />,
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements & Certifications</h2>
      <p className="subtitle">Click on internship certificates to view them</p>
      <div className="achievements-container">
        {achievements.map((item, index) => (
          <div key={index}>
            {item.certificateUrl ? (
              // If certificate exists, wrap in <a> to open PDF in new tab
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card-link"
              >
                <div className="achievement-card">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            ) : (
              // Otherwise just show the card
              <div className="achievement-card">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
