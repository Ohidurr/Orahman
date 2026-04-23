import React, { useState, useEffect } from 'react';
import { profile, nav } from '../data/content';
import '../css/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-wrap">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <button
          className={`menu-btn ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-list ${open ? 'open' : ''}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={close}>
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
