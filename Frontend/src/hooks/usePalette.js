import { useState, useEffect } from 'react';
import { palettes, paletteMeta } from '../data/content';

// Random per-load — no persistence (matches v4: "alive on every visit")
function pickRandom() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

function readInitial() {
  // If the inline head script already chose one, use it (no flash)
  if (typeof document !== 'undefined') {
    const existing = document.documentElement.getAttribute('data-palette');
    if (existing && palettes.includes(existing)) return existing;
  }
  return pickRandom();
}

export function usePalette() {
  const [palette, setPalette] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
  }, [palette]);

  return {
    palette,
    meta: paletteMeta[palette] || paletteMeta.aurora,
  };
}
