import { useState, useEffect, useCallback } from 'react';

const KEY = 'theme';
const VALID = ['light', 'dark'];

function readInitial() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem(KEY);
    if (VALID.includes(stored)) return stored;
  } catch (e) {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitial);

  // Sync to <html data-theme="..."> + persist + update meta theme-color
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a15' : '#f5f5f7');
  }, [theme]);

  // React to system changes only when user hasn't manually picked
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      try {
        if (localStorage.getItem(KEY)) return;
      } catch (err) {}
      setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
