import React from 'react';
import { usePalette } from '../hooks/usePalette';
import '../css/PaletteIndicator.css';

function PaletteIndicator() {
  const { meta } = usePalette();

  return (
    <div
      className="palette-tag"
      aria-live="polite"
      aria-label="Active palette"
      title={`${meta.name} palette — ${meta.hint}. Refresh for a different vibe.`}
    >
      <span className="palette-swatch" aria-hidden="true">
        <span /><span /><span />
      </span>
      <span className="palette-tag-label">{meta.name}</span>
    </div>
  );
}

export default PaletteIndicator;
