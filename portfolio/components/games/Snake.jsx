'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const COLS = 15, ROWS = 15, CELL = 20;

function randFood(snake) {
  let food;
  do {
    food = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}

export default function Snake() {
  const canvasRef   = useRef(null);
  const stateRef    = useRef(null); // live game state
  const intervalRef = useRef(null);

  const [score,   setScore]   = useState(0);
  const [running, setRunning] = useState(false);
  const [dead,    setDead]    = useState(false);

  /* ── Draw ── */
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx   = canvas.getContext('2d');
    const { snake, food } = stateRef.current;

    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines
    ctx.strokeStyle = '#ffffff08'; ctx.lineWidth = 0.5;
    for (let x = 0; x < COLS; x++)
      for (let y = 0; y < ROWS; y++)
        ctx.strokeRect(x * CELL, y * CELL, CELL, CELL);

    // Food
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    snake.forEach((seg, i) => {
      ctx.fillStyle = i === 0 ? '#6ee7b7' : '#4ade80';
      ctx.beginPath();
      ctx.roundRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 3);
      ctx.fill();
    });
  }, []);

  /* ── Start / Reset ── */
  const start = useCallback(() => {
    clearInterval(intervalRef.current);
    const initSnake = [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }];
    stateRef.current = {
      snake:   initSnake,
      food:    randFood(initSnake),
      dir:     { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
    };
    setScore(0);
    setDead(false);
    setRunning(true);
    draw();
  }, [draw]);

  /* ── Tick ── */
  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      const s = stateRef.current;
      s.dir = s.nextDir;
      const head = { x: s.snake[0].x + s.dir.x, y: s.snake[0].y + s.dir.y };

      const hit =
        head.x < 0 || head.x >= COLS ||
        head.y < 0 || head.y >= ROWS ||
        s.snake.some((seg) => seg.x === head.x && seg.y === head.y);

      if (hit) {
        clearInterval(intervalRef.current);
        setRunning(false); setDead(true);
        return;
      }

      s.snake.unshift(head);
      if (head.x === s.food.x && head.y === s.food.y) {
        s.food = randFood(s.snake);
        setScore((sc) => sc + 1);
      } else {
        s.snake.pop();
      }
      draw();
    }, 140);

    return () => clearInterval(intervalRef.current);
  }, [running, draw]);

  /* ── Direction helpers ── */
  const setDir = useCallback((dx, dy) => {
    if (!running) { start(); return; }
    const d = stateRef.current?.dir;
    if (!d) return;
    if (dx !== 0 && d.x !== 0) return;
    if (dy !== 0 && d.y !== 0) return;
    if (stateRef.current) stateRef.current.nextDir = { x: dx, y: dy };
  }, [running, start]);

  /* ── Keyboard ── */
  useEffect(() => {
    const map = { ArrowUp:[0,-1], ArrowDown:[0,1], ArrowLeft:[-1,0], ArrowRight:[1,0] };
    const onKey = (e) => {
      if (map[e.key]) { e.preventDefault(); setDir(...map[e.key]); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setDir]);

  /* ── Initial draw ── */
  useEffect(() => {
    stateRef.current = {
      snake: [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }],
      food:  { x: 11, y: 7 },
      dir:   { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
    };
    draw();
  }, [draw]);

  return (
    <div style={styles.wrap}>
      <p className="game-title">Snake — Arrow keys or buttons below</p>
      <p className="game-status">
        {dead ? `Game Over! Score: ${score}` : `Score: ${score}`}
      </p>

      <canvas
        ref={canvasRef}
        width={COLS * CELL}
        height={ROWS * CELL}
        style={styles.canvas}
      />

      {/* D-pad */}
      <div style={styles.dpad}>
        <div style={styles.dRow}>
          <button style={styles.dBtn} onClick={() => setDir(0, -1)}>▲</button>
        </div>
        <div style={styles.dRow}>
          <button style={styles.dBtn} onClick={() => setDir(-1, 0)}>◀</button>
          <button
            style={{ ...styles.dBtn, width: '60px' }}
            onClick={start}
          >
            {running ? '↻' : '▶ Go'}
          </button>
          <button style={styles.dBtn} onClick={() => setDir(1, 0)}>▶</button>
        </div>
        <div style={styles.dRow}>
          <button style={styles.dBtn} onClick={() => setDir(0, 1)}>▼</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap:   { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
  canvas: { border: '1px solid var(--border)', borderRadius: '8px', display: 'block' },
  dpad:   { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' },
  dRow:   { display: 'flex', gap: '4px' },
  dBtn:   {
    width:        '44px',
    height:       '44px',
    background:   'var(--surface2)',
    border:       '1px solid var(--border)',
    color:        'var(--muted)',
    fontSize:     '16px',
    borderRadius: '6px',
    cursor:       'pointer',
    display:      'flex',
    alignItems:   'center',
    justifyContent:'center',
    fontFamily:   'var(--sans)',
  },
};
