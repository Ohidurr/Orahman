import React, { useState, useEffect, useRef } from 'react';
import { dailyWords, dailyFacts } from '../data/content';
import '../css/DailyCard.css';

function getDateKey() {
  const t = new Date();
  return t.getFullYear() * 1000 + t.getMonth() * 31 + t.getDate();
}

function pick(arr, key) {
  const i = ((key % arr.length) + arr.length) % arr.length;
  return arr[i];
}

function DailyCard() {
  const [offset, setOffset] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const swapTimerRef = useRef(null);
  const spinTimerRef = useRef(null);

  const dateKey = getDateKey() + offset;
  const word = pick(dailyWords, dateKey);
  const fact = pick(dailyFacts, dateKey);

  const dateLabel = offset === 0
    ? new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : `+${offset}`;

  const refresh = () => {
    setSpinning(true);
    setSwapping(true);
    clearTimeout(swapTimerRef.current);
    clearTimeout(spinTimerRef.current);
    swapTimerRef.current = setTimeout(() => {
      setOffset((o) => o + 1);
      setSwapping(false);
    }, 280);
    spinTimerRef.current = setTimeout(() => setSpinning(false), 700);
  };

  useEffect(() => () => {
    clearTimeout(swapTimerRef.current);
    clearTimeout(spinTimerRef.current);
  }, []);

  return (
    <section className="panel glass glass-hover">
      <div className="panel-head">
        <div className="panel-title">
          <div className="panel-icon fact" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2z"/>
            </svg>
          </div>
          <h2>Daily</h2>
        </div>
        <div className="panel-actions">
          <span className="panel-num">{dateLabel}</span>
          <button
            className={`refresh-btn ${spinning ? 'spinning' : ''}`}
            onClick={refresh}
            aria-label="New word and fact"
            title="New word and fact"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`fact-content ${swapping ? 'swapping' : ''}`}>
        <div className="fact-block">
          <div className="fact-tag word">⬡ Word of the Day</div>
          <div className="fact-headline">{word.title}</div>
          <div className="fact-body">{word.body}</div>
        </div>
        <div className="fact-block">
          <div className="fact-tag fact">★ Fact of the Day</div>
          <div className="fact-body">{fact.body}</div>
        </div>
      </div>
    </section>
  );
}

export default DailyCard;
