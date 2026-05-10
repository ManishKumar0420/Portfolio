'use client';
import { useState, useCallback } from 'react';

const EMOJIS = ['🚀','⚡','🎯','💡','🔥','🌊','🎮','🏆'];

function buildDeck() {
  return [...EMOJIS, ...EMOJIS]
    .sort(() => Math.random() - 0.5)
    .map((emoji, id) => ({ id, emoji, flipped: false, matched: false }));
}

export default function MemoryMatch() {
  const [cards,   setCards]   = useState(buildDeck);
  const [selected, setSelected] = useState([]);
  const [locked,  setLocked]  = useState(false);
  const [moves,   setMoves]   = useState(0);
  const [matches, setMatches] = useState(0);

  const reset = useCallback(() => {
    setCards(buildDeck());
    setSelected([]);
    setLocked(false);
    setMoves(0);
    setMatches(0);
  }, []);

  const handleClick = useCallback((id) => {
    if (locked) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;

    const nextSelected = [...selected, id];
    const nextCards    = cards.map((c) =>
      c.id === id ? { ...c, flipped: true } : c
    );
    setCards(nextCards);

    if (nextSelected.length < 2) {
      setSelected(nextSelected);
      return;
    }

    // Two cards flipped
    setMoves((m) => m + 1);
    setSelected([]);

    const [a, b] = nextSelected;
    const ca = nextCards.find((c) => c.id === a);
    const cb = nextCards.find((c) => c.id === b);

    if (ca.emoji === cb.emoji) {
      const matched = nextCards.map((c) =>
        c.id === a || c.id === b ? { ...c, matched: true } : c
      );
      setCards(matched);
      setMatches((m) => m + 1);
    } else {
      setLocked(true);
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === a || c.id === b ? { ...c, flipped: false } : c
          )
        );
        setLocked(false);
      }, 900);
    }
  }, [cards, selected, locked]);

  const done = matches === EMOJIS.length;

  return (
    <div style={styles.wrap}>
      <p className="game-title">Memory Match — Find all pairs</p>
      <p className="game-status">
        {done
          ? `🎉 Completed in ${moves} moves!`
          : `Moves: ${moves} · Matches: ${matches}/${EMOJIS.length}`}
      </p>

      <div style={styles.grid}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            style={styles.cardWrap}
          >
            <div
              style={{
                ...styles.inner,
                transform: card.flipped || card.matched ? 'rotateY(180deg)' : 'none',
              }}
            >
              {/* Front (hidden face) */}
              <div style={styles.front}>?</div>
              {/* Back (emoji face) */}
              <div
                style={{
                  ...styles.back,
                  background:  card.matched ? 'rgba(110,231,183,0.1)' : 'var(--bg3)',
                  borderColor: card.matched ? 'var(--accent)' : 'var(--border)',
                }}
              >
                {card.emoji}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-outline" onClick={reset} style={{ fontSize: '13px', padding: '8px 18px' }}>
        Restart
      </button>
    </div>
  );
}

const styles = {
  wrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' },
  grid: {
    display:             'grid',
    gridTemplateColumns: 'repeat(4, 70px)',
    gap:                 '8px',
  },
  cardWrap: {
    width:       '70px',
    height:      '70px',
    perspective: '600px',
    cursor:      'pointer',
  },
  inner: {
    width:               '100%',
    height:              '100%',
    position:            'relative',
    transformStyle:      'preserve-3d',
    transition:          'transform 0.35s',
  },
  front: {
    position:           'absolute',
    inset:              0,
    borderRadius:       '8px',
    display:            'flex',
    alignItems:         'center',
    justifyContent:     'center',
    backfaceVisibility: 'hidden',
    background:         'var(--surface2)',
    border:             '1px solid var(--border)',
    fontSize:           '22px',
    color:              'var(--muted)',
  },
  back: {
    position:           'absolute',
    inset:              0,
    borderRadius:       '8px',
    display:            'flex',
    alignItems:         'center',
    justifyContent:     'center',
    backfaceVisibility: 'hidden',
    border:             '1px solid var(--border)',
    fontSize:           '24px',
    transform:          'rotateY(180deg)',
    transition:         'background 0.3s, border-color 0.3s',
  },
};
