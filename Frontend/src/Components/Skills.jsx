import React from 'react';
import { skillGroups } from '../data/content';
import '../css/Skills.css';

function Skills() {
  return (
    <section id="skills" className="panel glass glass-hover">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-icon skills" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <h2>Skills</h2>
        </div>
        <span className="panel-num">02</span>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h4>
              {group.name}
              {group.badge && <span className="badge">{group.badge}</span>}
            </h4>
            <ul className="skill-chips">
              {group.items.map((item) => {
                const isObj = typeof item === 'object';
                const name = isObj ? item.name : item;
                const exploring = isObj && item.exploring;
                return (
                  <li
                    key={name}
                    className={`chip ${exploring ? 'exploring' : ''}`}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
