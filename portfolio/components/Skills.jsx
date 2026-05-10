'use client';
import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/portfolio';

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="section reveal">
      <p className="sec-tag">// 02 Skills</p>
      <h2 className="sec-title">Technical Expertise</h2>

      <div style={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} style={styles.card}>
            <p style={styles.cat}>{group.category}</p>
            <div style={styles.tags}>
              {group.items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display:             'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap:                 '1rem',
  },
  card: {
    background:   'var(--surface)',
    border:       '1px solid var(--border)',
    borderRadius: '10px',
    padding:      '1.25rem',
    transition:   'border-color 0.2s, transform 0.2s',
    cursor:       'default',
  },
  cat: {
    fontSize:      '11px',
    fontFamily:    'var(--mono)',
    color:         'var(--accent2)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom:  '0.75rem',
  },
  tags: {
    display:   'flex',
    flexWrap:  'wrap',
    gap:       '0.4rem',
  },
};
