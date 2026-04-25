import React, { useEffect } from 'react';

/**
 * Fixed background scene: 4 floating orbs + noise.
 * Pauses the orb animation while the user is scrolling
 * (matches v4 — keeps scroll smooth).
 */
function BgScene() {
  useEffect(() => {
    let scrollTimer;
    const onScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => document.body.classList.remove('scrolling'), 150);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
    </div>
  );
}

export default BgScene;
