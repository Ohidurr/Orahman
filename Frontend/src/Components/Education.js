import React from 'react';
import { education } from '../data/content';
import '../css/Education.css';

function Education() {
  return (
    <section id="education" className="panel glass glass-hover">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-icon edu" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 10l-10-5L2 10l10 5 10-5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <h2>Education</h2>
        </div>
        <span className="panel-num">04</span>
      </div>

      {education.map((e, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-title">{e.title}</div>
          <div className="edu-school">{e.school}</div>
          <div className="edu-when">{e.when}</div>
        </div>
      ))}
    </section>
  );
}

export default Education;
