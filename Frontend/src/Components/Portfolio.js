import React, { useEffect, useRef } from 'react';
import { projects } from '../data/content';
import '../css/Portfolio.css';

function Portfolio() {
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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    ref.current
      ?.querySelectorAll('.reveal')
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" className="portfolio" ref={ref}>
      <div className="section-head reveal">
        <span className="section-num">01 / Work</span>
        <h2>
          Selected projects. <em>Quietly over-engineered.</em>
        </h2>
      </div>

      <ol className="work-list reveal">
        {projects.map((p, i) => (
          <li key={i} className="work-item">
            <a href={p.href} className="work-link">
              <span className="work-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="work-year">{p.year}</span>
              <div className="work-body">
                <h3 className="work-title">{p.title}</h3>
                <p className="work-desc">{p.description}</p>
                <ul className="work-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <span className="work-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Portfolio;
