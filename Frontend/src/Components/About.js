import React from 'react';
import { experience } from '../data/content';
import '../css/About.css';

function About() {
  return (
    <section id="experience" className="panel glass">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-icon exp" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
            </svg>
          </div>
          <h2>Professional Experience</h2>
        </div>
        <span className="panel-num">01</span>
      </div>

      <div className="exp-list">
        {experience.map((role, i) => (
          <div className="exp-row" key={i}>
            <div className="exp-when">{role.when}</div>
            <div>
              <div className="exp-title">{role.title}</div>
              <div className="exp-company">
                {role.company}
                {role.tag && <span className="tag">{role.tag}</span>}
              </div>
              <ul className="exp-bullets">
                {role.bullets.map((b, j) => (
                  <li key={j}>
                    {b.leadership && (
                      <span className="leadership-tag">{b.leadership}</span>
                    )}
                    <span dangerouslySetInnerHTML={{ __html: b.text }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
