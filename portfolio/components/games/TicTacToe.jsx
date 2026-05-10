'use client';
import { useState, useCallback } from 'react';

const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

function checkWinner(board, player) {
  return WIN_LINES.find((line) => line.every((i) => board[i] === player)) ?? null;
}

function aiMove(board) {
  const empty = board.map((v, i) => (v ? null : i)).filter((v) => v !== null);
  // Win
  for (const i of empty) {
    const b = [...board]; b[i] = 'O';
    if (checkWinner(b, 'O')) return i;
  }
  // Block
  for (const i of empty) {
    const b = [...board]; b[i] = 'X';
    if (checkWinner(b, 'X')) return i;
  }
  // Centre
  if (board[4] === '') return 4;
  // Corners
  const corners = [0, 2, 6, 8].filter((i) => !board[i]);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  return empty[Math.floor(Math.random() * empty.length)];
}

export default function TicTacToe() {
  const [board, setBoard]   = useState(Array(9).fill(''));
  const [status, setStatus] = useState('Your turn (X)');
  const [over, setOver]     = useState(false);
  const [winLine, setWinLine] = useState(null);

  const reset = useCallback(() => {
    setBoard(Array(9).fill(''));
    setStatus('Your turn (X)');
    setOver(false);
    setWinLine(null);
  }, []);

  const handleClick = useCallback((idx) => {
    if (board[idx] || over) return;

    const next = [...board];
    next[idx] = 'X';

    const win = checkWinner(next, 'X');
    if (win) {
      setBoard(next); setWinLine(win); setOver(true);
      setStatus('🎉 You win!'); return;
    }
    if (next.every(Boolean)) {
      setBoard(next); setOver(true); setStatus("It's a draw!"); return;
    }

    setStatus('AI thinking…');
    setBoard(next);

    setTimeout(() => {
      const move = aiMove(next);
      const after = [...next];
      after[move] = 'O';
      const win2 = checkWinner(after, 'O');
      if (win2) {
        setBoard(after); setWinLine(win2); setOver(true);
        setStatus('AI wins! 🤖'); return;
      }
      if (after.every(Boolean)) {
        setBoard(after); setOver(true); setStatus("It's a draw!"); return;
      }
      setBoard(after);
      setStatus('Your turn (X)');
    }, 400);
  }, [board, over]);

  return (
    <div style={styles.wrap}>
      <p className="game-title">Tic Tac Toe — You are X</p>
      <p className="game-status">{status}</p>

      <div style={styles.board}>
        {board.map((val, i) => {
          const isWin = winLine?.includes(i);
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={!!val || over}
              style={{
                ...styles.cell,
                color:     val === 'X' ? 'var(--accent)' : val === 'O' ? 'var(--accent3)' : 'var(--text)',
                background: isWin ? 'rgba(110,231,183,0.12)' : 'var(--bg3)',
                borderColor: isWin ? 'var(--accent)' : 'var(--border)',
              }}
            >
              {val}
            </button>
          );
        })}
      </div>

      <button className="btn-outline" onClick={reset} style={{ fontSize: '13px', padding: '8px 18px' }}>
        Restart
      </button>
    </div>
  );
}

const styles = {
  wrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' },
  board: {
    display:             'grid',
    gridTemplateColumns: 'repeat(3, 90px)',
    gridTemplateRows:    'repeat(3, 90px)',
    gap:                 '4px',
  },
  cell: {
    width:        '90px',
    height:       '90px',
    border:       '1px solid var(--border)',
    borderRadius: '8px',
    fontSize:     '32px',
    fontWeight:   700,
    cursor:       'pointer',
    display:      'flex',
    alignItems:   'center',
    justifyContent:'center',
    fontFamily:   'var(--mono)',
    transition:   'background 0.15s',
  },
};
