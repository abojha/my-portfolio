import React from "react";
import { FaUniversity, FaCalendarAlt } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

import "./Education.css";

const educationData = [
  {
    degree: "M.Tech – Computer Science & Information Security",
    institute: "NIT Warangal",
    duration: "2024 – Present",
    cgpa: 9.09,
  },
  {
    degree: "B.Tech – Computer Science",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    duration: "2020 – 2024",
    cgpa: 8.83,
  },
];

export default function Education() {
  return (
    <section className="education-section">
      <div className="container">
        <h2 className="education-title">🎓 Education</h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <span className="education-cgpa">
                <GiAchievement />
                {edu.cgpa}
              </span>
              <div className="education-meta">
                <span>
                  <FaUniversity /> {edu.institute}
                </span>
                <span>
                  <FaCalendarAlt /> {edu.duration}
                </span>
              </div>

              {/* <ul className="education-highlights">
                {edu.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
