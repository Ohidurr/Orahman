import React, { useState, useEffect, useRef } from 'react';
import { profile } from '../data/content';
import '../css/Landing.css';

function Landing() {
  const [waving, setWaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // small delay so animation feels intentional
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const triggerWave = () => {
    setWaving(true);
    setTimeout(() => setWaving(false), 1600);
  };

  return (
    <section id="top" className="landing" ref={sectionRef}>
      <div className="landing-inner">
        <div className="eyebrow">
          <span
            className={`status-dot ${profile.available ? 'available' : ''}`}
            aria-hidden="true"
          />
          <span>{profile.status}</span>
          <span className="eyebrow-sep" aria-hidden="true">/</span>
          <span>{profile.location}</span>
        </div>

        <h1 className={`headline ${mounted ? 'in' : ''}`}>
          {profile.tagline.map((word, i) => (
            <span
              key={i}
              className={`word ${word.em ? 'em' : ''}`}
              style={{ animationDelay: `${0.08 + i * 0.06}s` }}
            >
              {word.text}{' '}
            </span>
          ))}
        </h1>

        <div className="wave-row" onClick={triggerWave}>
          <span
            className={`wave-emoji ${waving ? 'wave' : ''}`}
            role="img"
            aria-label="Waving hand"
          >
            👋
          </span>
          <span className="wave-label">
            Hi — I'm {profile.name}. <em>Click the wave.</em>
          </span>
        </div>

        <div className="hero-meta">
          <div className="meta-col">
            <div className="meta-label">Currently</div>
            <p>{profile.blurbs.currently}</p>
          </div>
          <div className="meta-col">
            <div className="meta-label">Background</div>
            <p>{profile.blurbs.background}</p>
          </div>
        </div>
      </div>

      <a href="#work" className="scroll-hint" aria-label="Scroll to work">
        <span>Scroll</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Landing;
