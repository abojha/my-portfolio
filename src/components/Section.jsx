import React from 'react';

export default function Section({ title, children }) {
  return (
    <section className="padding-vert--sm">
      <div className="container">
        <h2 className="margin-bottom--lg">{title}</h2>
        {children}
      </div>
    </section>
  );
}
