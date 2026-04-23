import React, { useEffect, useRef } from 'react';
import { writing } from '../data/content';
import '../css/Writing.css';

function Writing() {
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
    <section id="writing" className="writing" ref={ref}>
      <div className="section-head reveal">
        <span className="section-num">03 / Writing</span>
        <h2>
          Notes on <em>craft, systems, and on-call.</em>
        </h2>
      </div>

      <ul className="post-list reveal">
        {writing.map((p, i) => (
          <li key={i}>
            <a href={p.href} className="post">
              <span className="post-tag">{p.tag}</span>
              <h3 className="post-title">{p.title}</h3>
              <div className="post-meta">
                <span>{p.date}</span>
                <span>{p.readTime}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Writing;
