import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { links, profile } from '../data/content';
import '../css/Contact.css';

function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    ref.current
      ?.querySelectorAll('.reveal')
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-inner reveal">
        <span className="section-num">04 / Contact</span>
        <h2 className="contact-headline">
          Got something <em>interesting</em> to build? Let's talk.
        </h2>
        <p className="contact-body">
          Best way to reach me is email. I read everything; I reply to
          most things within a day or two.
        </p>

        <a href={`mailto:${links.email}`} className="email-big">
          {links.email} <span aria-hidden="true">→</span>
        </a>

        <ul className="social-links">
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FontAwesomeIcon icon={faXTwitter} />
              <span>X</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
