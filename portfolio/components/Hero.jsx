'use client';
import { hero } from '../data/portfolio';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" style={styles.hero}>
      {/* Ambient glow */}
      <div style={styles.glow} />

      <p style={styles.eyebrow}>
        <span style={styles.eyebrowLine} />
        Available for opportunities
      </p>

      <h1 style={styles.name}>
        {hero.name.split(' ')[0]}
        <br />
        <span style={{ color: 'var(--accent)' }}>{hero.name.split(' ')[1]}</span>
      </h1>

      <p style={styles.title}>{hero.title}</p>
      <p style={styles.desc}>{hero.description}</p>

      <div style={styles.btns}>
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          See My Work
        </button>
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          Get in Touch
        </button>
      </div>

      <div style={styles.statsRow}>
        {hero.stats.map((s) => (
          <div key={s.label}>
            <div style={styles.statVal}>{s.value}</div>
            <div style={styles.statLbl}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position:       'relative',
    minHeight:      '92vh',
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    padding:        '5rem 3rem',
    maxWidth:       '960px',
    margin:         '0 auto',
    overflow:       'hidden',
  },
  glow: {
    position:       'absolute',
    inset:          0,
    background:
      'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(110,231,183,0.06), transparent), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(129,140,248,0.07), transparent)',
    pointerEvents:  'none',
  },
  eyebrow: {
    fontFamily:    'var(--mono)',
    fontSize:      '12px',
    color:         'var(--accent)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom:  '1.5rem',
    display:       'flex',
    alignItems:    'center',
    gap:           '0.75rem',
  },
  eyebrowLine: {
    display:    'inline-block',
    width:      '32px',
    height:     '1px',
    background: 'var(--accent)',
  },
  name: {
    fontSize:      'clamp(3rem, 8vw, 6rem)',
    fontWeight:    700,
    lineHeight:    1,
    letterSpacing: '-0.03em',
    marginBottom:  '1rem',
  },
  title: {
    fontFamily:   'var(--mono)',
    fontSize:     'clamp(12px, 2vw, 15px)',
    color:        'var(--muted)',
    marginBottom: '2rem',
    lineHeight:   1.8,
  },
  desc: {
    fontSize:     '16px',
    color:        'var(--muted)',
    maxWidth:     '520px',
    lineHeight:   1.75,
    marginBottom: '2.5rem',
  },
  btns: {
    display:   'flex',
    gap:       '1rem',
    flexWrap:  'wrap',
  },
  statsRow: {
    display:      'flex',
    gap:          '2.5rem',
    marginTop:    '3rem',
    paddingTop:   '3rem',
    borderTop:    '1px solid var(--border)',
    flexWrap:     'wrap',
  },
  statVal: {
    fontFamily: 'var(--mono)',
    fontSize:   '28px',
    fontWeight: 700,
    color:      'var(--accent)',
  },
  statLbl: {
    fontSize:  '12px',
    color:     'var(--muted)',
    marginTop: '4px',
  },
};
