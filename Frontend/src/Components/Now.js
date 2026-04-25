import React from 'react';
import { now } from '../data/content';
import '../css/Now.css';

function Now() {
  return (
    <section className="panel glass glass-hover">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-icon now" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h2>Now</h2>
        </div>
        <span className="panel-num">05</span>
      </div>
      <p className="now-text" dangerouslySetInnerHTML={{ __html: now }} />
    </section>
  );
}

export default Now;
