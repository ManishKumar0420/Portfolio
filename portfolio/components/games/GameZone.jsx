'use client';
import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import TicTacToe   from './TicTacToe';
import Snake        from './Snake';
import MemoryMatch  from './MemoryMatch';
import NumberGuess  from './NumberGuess';

const GAMES = [
  { id: 'ttt',    label: 'Tic Tac Toe',    Component: TicTacToe  },
  { id: 'snake',  label: 'Snake',          Component: Snake      },
  { id: 'memory', label: 'Memory Match',   Component: MemoryMatch },
  { id: 'guess',  label: 'Number Guess',   Component: NumberGuess },
];

export default function GameZone() {
  const [active, setActive] = useState('ttt');
  const ref = useReveal();

  const ActiveGame = GAMES.find((g) => g.id === active)?.Component;

  return (
    <section id="games" ref={ref} className="section reveal">
      <p className="sec-tag">// 06 Fun Zone</p>
      <h2 className="sec-title">Take a Break & Play</h2>

      {/* Tab bar */}
      <div style={styles.tabs}>
        {GAMES.map((g) => (
          <button
            key={g.id}
            onClick={() => setActive(g.id)}
            style={{
              ...styles.tab,
              color:       active === g.id ? 'var(--accent)'  : 'var(--muted)',
              borderColor: active === g.id ? 'var(--accent2)' : 'var(--border)',
              background:  active === g.id ? 'var(--surface2)': 'transparent',
            }}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Game area */}
      <div style={styles.area}>
        {ActiveGame && <ActiveGame key={active} />}
      </div>
    </section>
  );
}

const styles = {
  tabs: {
    display:   'flex',
    gap:       '0.5rem',
    flexWrap:  'wrap',
    marginBottom: '1.5rem',
  },
  tab: {
    padding:      '8px 18px',
    border:       '1px solid',
    borderRadius: '6px',
    fontSize:     '13px',
    cursor:       'pointer',
    fontFamily:   'var(--sans)',
    transition:   'all 0.2s',
    background:   'transparent',
  },
  area: {
    background:   'var(--surface)',
    border:       '1px solid var(--border)',
    borderRadius: '14px',
    padding:      '2rem',
    minHeight:    '420px',
    display:      'flex',
    flexDirection:'column',
    alignItems:   'center',
    gap:          '1.5rem',
  },
};
