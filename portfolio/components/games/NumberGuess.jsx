'use client';
import { useState, useCallback, useRef } from 'react';

const MAX_TRIES = 7;

function randSecret() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function NumberGuess() {
  const [secret,  setSecret]  = useState(randSecret);
  const [input,   setInput]   = useState('');
  const [history, setHistory] = useState([]);
  const [status,  setStatus]  = useState('Think of a number between 1 and 100…');
  const [over,    setOver]    = useState(false);
  const inputRef = useRef(null);

  const reset = useCallback(() => {
    setSecret(randSecret());
    setInput('');
    setHistory([]);
    setStatus('Think of a number between 1 and 100…');
    setOver(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const guess = useCallback(() => {
    const val = parseInt(input, 10);
    if (!val || val < 1 || val > 100) return;
    setInput('');

    const tries    = history.length + 1;
    const isWin    = val === secret;
    const outOfTries = tries >= MAX_TRIES && !isWin;
    const hot      = Math.abs(val - secret) <= 10;

    setHistory((h) => [...h, { val, hot }]);

    if (isWin) {
      setStatus(`🎉 You got it in ${tries} guess${tries > 1 ? 'es' : ''}!`);
      setOver(true);
    } else if (outOfTries) {
      setStatus(`💀 Out of tries! It was ${secret}.`);
      setOver(true);
    } else {
      const remaining = MAX_TRIES - tries;
      const dir = val < secret ? '📈 Too low! Try higher.' : '📉 Too high! Try lower.';
      const temp = hot ? ' 🔥 Getting hot!' : ' ❄️ Cold…';
      setStatus(`${dir}${temp} ${remaining} tries left.`);
    }
  }, [input, history, secret]);

  const onKey = (e) => {
    if (e.key === 'Enter') guess();
  };

  return (
    <div style={styles.wrap}>
      <p className="game-title">
        Number Guess — 1 to 100 · {MAX_TRIES - history.length} tries left
      </p>
      <p className="game-status">{status}</p>

      {!over ? (
        <div style={styles.inputRow}>
          <input
            ref={inputRef}
            type="number"
            min={1}
            max={100}
            placeholder="???"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            style={styles.input}
            autoFocus
          />
          <button className="btn-primary" onClick={guess} style={{ fontSize: '13px', padding: '9px 20px' }}>
            Guess
          </button>
        </div>
      ) : (
        <button className="btn-primary" onClick={reset}>
          Play Again
        </button>
      )}

      <div style={styles.history}>
        {history.map((h, i) => (
          <span
            key={i}
            style={{
              ...styles.pill,
              borderColor: h.hot ? 'var(--accent3)' : 'var(--accent2)',
              color:       h.hot ? 'var(--accent3)' : 'var(--accent2)',
            }}
          >
            {h.val} {h.hot ? '🔥' : '❄️'}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' },
  inputRow: { display: 'flex', gap: '0.75rem', alignItems: 'center' },
  input: {
    background:   'var(--bg3)',
    border:       '1px solid var(--border)',
    color:        'var(--text)',
    padding:      '10px 16px',
    borderRadius: '6px',
    fontSize:     '16px',
    width:        '100px',
    fontFamily:   'var(--mono)',
    textAlign:    'center',
    outline:      'none',
  },
  history: {
    display:        'flex',
    flexWrap:       'wrap',
    gap:            '0.4rem',
    justifyContent: 'center',
    maxWidth:       '320px',
  },
  pill: {
    fontFamily:   'var(--mono)',
    fontSize:     '12px',
    padding:      '4px 12px',
    borderRadius: '4px',
    background:   'var(--bg3)',
    border:       '1px solid',
  },
};
