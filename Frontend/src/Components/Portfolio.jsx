import React from 'react';
import { projects } from '../data/content';
import '../css/Portfolio.css';

function Portfolio() {
  return (
    <section id="work" className="panel glass">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-icon work" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h2>Projects</h2>
        </div>
        <span className="panel-num">03</span>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <a key={i} href={p.href} className="project-card">
            <div>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
            </div>
            <ul className="project-bullets">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
