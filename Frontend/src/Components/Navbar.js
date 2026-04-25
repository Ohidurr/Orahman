import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import '../css/Navbar.css';

const NAV_LINKS = [
  { label: 'Summary',    href: '#summary',    num: '00' },
  { label: 'Experience', href: '#experience', num: '01' },
  { label: 'Skills',     href: '#skills',     num: '02' },
  { label: 'Projects',   href: '#work',       num: '03' },
  { label: 'Education',  href: '#education',  num: '04' },
];

function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const menuPanelRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Close on escape, outside click, or section click
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e) => {
      if (menuPanelRef.current && !menuPanelRef.current.contains(e.target)
          && menuBtnRef.current && !menuBtnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <>
      <button
        ref={menuBtnRef}
        className={`float-icon float-menu ${open ? 'open' : ''}`}
        aria-label="Open menu"
        aria-expanded={open}
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <button
        className="float-icon float-theme"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        type="button"
        onClick={toggle}
      >
        {theme === 'dark' ? (
          <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        ) : (
          <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        )}
      </button>

      <nav
        ref={menuPanelRef}
        className={`menu-panel ${open ? 'open' : ''}`}
        aria-label="Primary"
      >
        {NAV_LINKS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
            <span className="menu-num">{item.num}</span>
          </a>
        ))}
        <a href="#contact" className="cta" onClick={() => setOpen(false)}>
          Get in touch →
        </a>
      </nav>
    </>
  );
}

export default Navbar;
