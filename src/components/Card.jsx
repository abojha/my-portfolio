import React from 'react';

export default function Card({ title, children, link }) {
  return (
    <div className="card shadow--sm margin-bottom--md">
      <div className="card__body">
        <h3 className="margin-bottom--sm">{title}</h3>

        <p className="text--secondary">
          {children}
        </p>

        {link && (
          <div className="margin-top--md">
            <a
              className="button button--primary button--sm"
              href={link}
            >
              Learn more
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
