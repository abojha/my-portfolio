import React from "react";
import {
  FaPython,
  FaLinux,
  FaGitAlt,
  FaDocker,
  FaShieldAlt,
} from "react-icons/fa";
import { SiCplusplus, SiDjango, SiPostgresql } from "react-icons/si";

import "./Skills.css";

const skills = [
  { icon: <FaPython />, label: "Python" },
  { icon: <SiDjango />, label: "Django" },
  { icon: <SiCplusplus />, label: "C / C++" },
//   { icon: <FaLinux />, label: "Linux" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaShieldAlt />, label: "Security" },
];

export default function SkillBubbles() {
  return (
    <section className="skill-bubbles-section">
      <div className="container skill-bubbles-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bubble-wrapper">
            <div className="skill-bubble">
              {skill.icon}
            </div>

            {/* Tooltip */}
            <span className="skill-tooltip">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

