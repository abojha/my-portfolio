import React from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

import "./experience.css";

const experiences = [
  {
    role: "Graduate Intern – Technical",
    company: "Intel Corporation",
    duration: "2024 – Present",
    points: [
      "Built Python automation frameworks reducing manual effort",
      "Worked on scalable internal tooling for CPU design flows",
      "Collaborated with cross-functional engineering teams",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="experience-title">💼 Experience</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.role}</h3>

                <div className="experience-meta">
                  <span>
                    <FaBuilding /> {exp.company}
                  </span>
                  <span>
                    <FaCalendarAlt /> {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
