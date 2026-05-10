'use client';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data/portfolio';

const COLOR_MAP = {
  green:  { icon: 'rgba(110,231,183,0.12)', iconText: 'var(--accent)',  glow: '#6ee7b7', border: 'var(--accent)'  },
  purple: { icon: 'rgba(129,140,248,0.12)', iconText: 'var(--accent2)', glow: '#818cf8', border: 'var(--accent2)' },
  pink:   { icon: 'rgba(244,114,182,0.12)', iconText: 'var(--accent3)', glow: '#f472b6', border: 'var(--accent3)' },
};

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="section reveal">
      <p className="sec-tag">// 04 Projects</p>
      <h2 className="sec-title">Key Projects</h2>

      <div style={styles.grid}>
        {projects.map((p) => {
          const c = COLOR_MAP[p.color];
          return (
            <div
              key={p.name}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.transform   = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform   = 'none';
              }}
            >
              {/* Top-right badge */}
              <span style={styles.badge}>{p.badge}</span>

              {/* Icon */}
              <div style={{ ...styles.icon, background: c.icon, color: c.iconText }}>
                {p.icon}
              </div>

              <h3 style={styles.name}>{p.name}</h3>
              <p style={styles.stack}>{p.stack}</p>
              <p style={styles.desc}>{p.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display:             'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap:                 '1.25rem',
  },
  card: {
    background:   'var(--surface)',
    border:       '1px solid var(--border)',
    borderRadius: '12px',
    padding:      '1.5rem',
    position:     'relative',
    overflow:     'hidden',
    transition:   'border-color 0.2s, transform 0.2s',
    cursor:       'default',
  },
  badge: {
    position:     'absolute',
    top:          '1rem',
    right:        '1rem',
    fontSize:     '10px',
    fontFamily:   'var(--mono)',
    padding:      '3px 8px',
    borderRadius: '4px',
    background:   'rgba(110,231,183,0.12)',
    color:        'var(--accent)',
    border:       '1px solid rgba(110,231,183,0.2)',
  },
  icon: {
    width:        '40px',
    height:       '40px',
    borderRadius: '8px',
    display:      'flex',
    alignItems:   'center',
    justifyContent:'center',
    fontSize:     '18px',
    marginBottom: '1rem',
  },
  name: {
    fontSize:     '15px',
    fontWeight:   600,
    marginBottom: '0.4rem',
  },
  stack: {
    fontSize:     '11px',
    fontFamily:   'var(--mono)',
    color:        'var(--muted)',
    marginBottom: '0.75rem',
  },
  desc: {
    fontSize:  '13px',
    color:     'var(--muted)',
    lineHeight: 1.65,
  },
};
