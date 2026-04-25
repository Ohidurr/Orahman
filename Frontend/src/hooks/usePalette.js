import { useState, useEffect, useCallback } from 'react';
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
  const [palette, setPaletteState] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
  }, [palette]);

  // Expose a setter for programmatic palette changes (e.g. a "try another"
  // button on a future settings page). Validates against known palettes.
  const setPalette = useCallback((next) => {
    if (palettes.includes(next)) setPaletteState(next);
  }, []);

  // Convenience: cycle to a random different palette.
  const shuffle = useCallback(() => {
    setPaletteState((current) => {
      const others = palettes.filter((p) => p !== current);
      return others[Math.floor(Math.random() * others.length)];
    });
  }, []);

  return {
    palette,
    meta: paletteMeta[palette] || paletteMeta.aurora,
    setPalette,
    shuffle,
  };
}
