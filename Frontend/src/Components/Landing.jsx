import React from 'react';
import { profile, links } from '../data/content';
import { useResumeMode } from '../hooks/useResumeMode';
import '../css/Landing.css';

const MODE_OPTIONS = [
  { id: 'recruiter', label: 'Recruiter' },
  { id: 'engineer',  label: 'Engineer' },
  { id: 'executive', label: 'Executive' },
];

function Landing() {
  const { mode, setMode } = useResumeMode();

  // Highlight the key phrase in the current summary view
  const summaryText = profile.summary[mode];
  const highlight = profile.summaryHighlight[mode];
  const highlighted = summaryText.replace(
    highlight,
    `<span class="hi">${highlight}</span>`
  );

  return (
    <header className="hero glass" id="top">
      {profile.available && (
        <span className="hero-eyebrow">
          {profile.status}
        </span>
      )}

      <h1 className="hero-name">{profile.name}</h1>

      <p className="hero-tag">
        {profile.role} in NYC.{' '}
        <span className="grad">CCNY-Grove grad. GSA Public Trust.</span>
      </p>

      <div className="hero-actions">
        <a href="#contact" className="glass-pill primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Get in touch
        </a>
        <a href={links.resume} className="glass-pill" aria-label="Resume PDF">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume PDF
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="glass-pill" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
          </svg>
          LinkedIn
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="glass-pill" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2c-3.34.72-4-1.61-4-1.61a3.15 3.15 0 00-1.32-1.74c-1.08-.74.08-.72.08-.72a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.46 1 2.54 2.54 0 01.76-1.6c-2.66-.3-5.47-1.34-5.47-5.95a4.66 4.66 0 011.24-3.23 4.32 4.32 0 01.12-3.18s1-.32 3.3 1.23a11.36 11.36 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23a4.32 4.32 0 01.12 3.18 4.66 4.66 0 011.24 3.23c0 4.62-2.81 5.65-5.49 5.95a2.86 2.86 0 01.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="glass-pill" aria-label="Twitter / X">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a>
      </div>

      <div className="mode-toggle" role="tablist" aria-label="Resume view">
        <span className="mode-toggle-label">View as</span>
        {MODE_OPTIONS.map((m) => (
          <button
            key={m.id}
            className={`mode-btn ${mode === m.id ? 'active' : ''}`}
            onClick={() => setMode(m.id)}
            role="tab"
            aria-selected={mode === m.id}
            type="button"
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Inline summary preview to demonstrate the mode change immediately */}
      <p
        className="hero-summary mode-fade"
        key={mode}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </header>
  );
}

export default Landing;
