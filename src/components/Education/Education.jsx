import React from "react";
import { FaUniversity, FaCalendarAlt } from "react-icons/fa";

import "./education.css";

const educationData = [
  {
    degree: "M.Tech – Computer Science & Information Security",
    institute: "NIT Warangal",
    duration: "2023 – 2025",
  },
  {
    degree: "B.Tech – Computer Science",
    institute: "XYZ Institute of Technology",
    duration: "2019 – 2023",
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
