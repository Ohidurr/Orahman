import React, { useState, useEffect, useRef } from 'react';
import { profile, experience, skills, links } from '../data/content';
import '../css/About.css';

function About() {
  const [showResume, setShowResume] = useState(false);
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

  const toggleResume = () => {
    const next = !showResume;
    setShowResume(next);
    if (next) {
      setTimeout(() => {
        document
          .getElementById('resumeView')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-head reveal">
        <span className="section-num">02 / About</span>
        <h2>
          A short version, for the <em>curious.</em>
        </h2>
      </div>

      <div className="about-grid reveal">
        <aside className="about-aside">
          <p className="about-bio">
            I'm a site reliability engineer based in {profile.location}. I like
            working on the infrastructure that sits quietly behind good
            products — alerting that actually helps, dashboards you can read at
            3am, and systems that degrade gracefully.
          </p>
          <p className="about-bio">
            Outside of work: music, long walks, and the kind of reading that
            makes you slower at answering email.
          </p>
          <div className="about-actions">
            <button
              onClick={toggleResume}
              className="btn btn-primary"
              aria-expanded={showResume}
            >
              {showResume ? 'Hide resume ↑' : 'View full resume ↓'}
            </button>
            <a href={links.resume} download className="btn btn-ghost">
              Download PDF
            </a>
          </div>
        </aside>

        <div className="about-main">
          <div className="about-block">
            <h4>Experience</h4>
            <ul className="timeline">
              {experience.map((e, i) => (
                <li key={i} className="timeline-row">
                  <span className="timeline-when">{e.when}</span>
                  <div className="timeline-what">
                    <strong>{e.title}</strong>
                    <span>{e.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-block">
            <h4>Tools of the trade</h4>
            <ul className="skill-grid">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showResume && (
        <div id="resumeView" className="resume-embed reveal in">
          <div className="resume-embed-head">
            <span>resume.pdf</span>
            <a href={links.resume} download>Download ↓</a>
          </div>
          <object
            data={`${process.env.PUBLIC_URL}/resume.pdf`}
            type="application/pdf"
            width="100%"
            height="720"
            aria-label="Ohidur Rahman resume"
          >
            <p className="resume-fallback">
              Your browser can't display PDFs inline.{' '}
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>
                Download the PDF instead.
              </a>
            </p>
          </object>
        </div>
      )}
    </section>
  );
}

export default About;
