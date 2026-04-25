import { useState, useEffect, useCallback } from 'react';

const KEY = 'resumeMode';
const VALID = ['recruiter', 'engineer', 'executive'];

function readInitial() {
  if (typeof window === 'undefined') return 'recruiter';
  try {
    const stored = localStorage.getItem(KEY);
    if (VALID.includes(stored)) return stored;
  } catch (e) {}
  return 'recruiter';
}

export function useResumeMode() {
  const [mode, setMode] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    try { localStorage.setItem(KEY, mode); } catch (e) {}
  }, [mode]);

  const change = useCallback((next) => {
    if (VALID.includes(next)) setMode(next);
  }, []);

  return { mode, setMode: change };
}
