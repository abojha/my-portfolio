import React from 'react';

export default function EducationCard({
  degree,
  institute,
  duration,
  score,
  details = [],
}) {
  return (
    <div className="card shadow--sm margin-bottom--md">
      <div className="card__body">

        {/* Degree */}
        <h3 className="margin-bottom--sm">
          {degree}
        </h3>

        {/* Institute + Duration */}
        <p className="text--secondary margin-bottom--sm">
          {institute} • {duration}
        </p>

        {/* Score / CGPA */}
        {score && (
          <p className="text--small margin-bottom--sm">
            <strong>CGPA:</strong> {score}
          </p>
        )}

        {/* Bullet details */}
        {details.length > 0 && (
          <ul className="margin-top--sm">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}
