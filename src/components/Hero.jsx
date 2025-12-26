import React from 'react';

export default function Hero() {
  return (
    <header className="hero hero--secondary">
      <div className="container text--center">

        <h1 className="hero__title">Abhay Ojha</h1>

        <p className="hero__subtitle">
          Software Engineer • M.Tech (CS & Information Security)
        </p>

        <p className="margin-vert--md">
          I build systems, work on security & automation, and write about what I learn.
        </p>

        <div className="margin-top--lg">
          <a
            className="button button--secondary button--lg margin-right--md"
            href="/projects"
          >
            View Projects
          </a>

          <a
            className="button button--outline button--secondary button--lg"
            href="/blog"
          >
            Read Blog
          </a>
        </div>

      </div>
    </header>
  );
}
