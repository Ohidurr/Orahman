import React from 'react';
import { links } from '../data/content';
import '../css/Contact.css';

// Slot definitions read URLs from data/content.js so a single edit there
// updates the contact section. Each slot becomes a clickable link.
const SLOTS = [
  {
    label: 'Email',
    href: `mailto:${links.email}`,
    display: links.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: links.linkedin,
    display: links.linkedin.replace(/^https?:\/\//, ''),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: links.github,
    display: links.github.replace(/^https?:\/\//, ''),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2c-3.34.72-4-1.61-4-1.61a3.15 3.15 0 00-1.32-1.74c-1.08-.74.08-.72.08-.72a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.46 1 2.54 2.54 0 01.76-1.6c-2.66-.3-5.47-1.34-5.47-5.95a4.66 4.66 0 011.24-3.23 4.32 4.32 0 01.12-3.18s1-.32 3.3 1.23a11.36 11.36 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23a4.32 4.32 0 01.12 3.18 4.66 4.66 0 011.24 3.23c0 4.62-2.81 5.65-5.49 5.95a2.86 2.86 0 01.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: links.twitter,
    display: links.twitter.replace(/^https?:\/\//, ''),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="panel glass contact-panel">
      <div className="panel-icon contact" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>
      <h2>Let's build something that stays up.</h2>
      <p>Reach out via any of the channels below.</p>
      <div className="contact-placeholder">
        {SLOTS.map((s) => {
          const isExternal = s.href.startsWith('http');
          return (
            <a
              key={s.label}
              href={s.href}
              className="contact-slot"
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {s.icon}
              <span><strong>{s.label}:</strong> <em>{s.display}</em></span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
