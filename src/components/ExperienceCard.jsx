import React from 'react';

export default function ExperienceCard({
  role,
  company,
  duration,
  details = [],
  tech = [],
}) {
  return (
    <div className="card shadow--sm margin-bottom--md">
      <div className="card__body">
        <h3 className="margin-bottom--sm">{role}</h3>

        <p className="text--secondary margin-bottom--sm">
          {company} • {duration}
        </p>

        {details.length > 0 && (
          <ul className="margin-bottom--sm">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <p className="text--secondary text--small">
            <strong>Tech:</strong> {tech.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}
