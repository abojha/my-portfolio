import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

import "./hero.css";

export default function Hero() {
  return (
    <header className="hero-section">
      <div className="container hero-container">

        {/* Left: Profile Image */}
        <div className="hero-image">
          <img
            src="/img/myimg.jpg"
            alt="Abhay Ojha"
          />
        </div>

        {/* Right: Content */}
        <div className="hero-content">
          <h1 className="hero-title">Abhay Ojha</h1>

          <h2 className="hero-subtitle">
            Software Engineer • M.Tech (CS & Information Security)
          </h2>

          <p className="hero-description">
            I build scalable systems, work on security & automation,
            and share practical learnings through blogs and teaching.
          </p>

          {/* Social Icons */}
          <div className="hero-socials">
            <a href="https://github.com/abojha" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/abhayojha0012" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/abojha404" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:abhayojha0012@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
