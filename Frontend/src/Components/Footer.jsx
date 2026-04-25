import React from 'react';
import { profile } from '../data/content';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      © {year} {profile.name} · {profile.role} · {profile.location}
    </footer>
  );
}

export default Footer;
