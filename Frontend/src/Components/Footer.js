import React from 'react';
import { profile } from '../data/content';
import '../css/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} {profile.name}</span>
        <span className="footer-dot" aria-hidden="true">·</span>
        <span>Set in Fraunces &amp; JetBrains Mono</span>
        <span className="footer-dot" aria-hidden="true">·</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}

export default Footer;
