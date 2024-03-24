import React, { useState } from 'react';
import '../css/Landing.css'; // Import the specific CSS file for Landing

function Landing() {
  const [isWaving, setIsWaving] = useState(false);

  const toggleWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000); // Adjust timing as needed
  };

  return (
    <section id="landing" onClick={toggleWave}>
      <h1>
        <span className={isWaving ? 'wave' : ''}>👋</span>{" "}
      </h1>
      <h1>Ohidur Rahman</h1>
      <p>Welcome.</p>
    </section>
  );
}

export default Landing;
;
