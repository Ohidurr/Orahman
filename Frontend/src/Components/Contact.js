import React from 'react';
// Importing Font Awesome components and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="social-links">
        {/* Updated Twitter (X) icon using an <img> tag */}
        <a href="https://x.com/_Ohidur" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="X Logo" style={{ width: '32px', height: '32px' }} />
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/Ohidur-Rahman" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        {/* GitHub */}
        <a href="https://github.com/Ohidurr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </section>
  );
}

export default Contact;