'use client';
import { useReveal } from '../hooks/useReveal';
import { awards } from '../data/portfolio';

export default function Awards() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section reveal" style={{ paddingTop: 0 }}>
      <p className="sec-tag">// 05 Recognition</p>
      <h2 className="sec-title">Awards</h2>

      <div style={styles.list}>
        {awards.map((a) => (
          <div key={a.title} style={styles.item}>
            <span style={styles.icon}>{a.icon}</span>
            <div>
              <h3 style={styles.title}>{a.title}</h3>
              <p style={styles.desc}>{a.desc}</p>
              <p style={styles.date}>{a.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  list: {
    display:       'flex',
    flexDirection: 'column',
    gap:           '1rem',
  },
  item: {
    background:   'var(--surface)',
    border:       '1px solid var(--border)',
    borderRadius: '10px',
    padding:      '1.25rem 1.5rem',
    display:      'flex',
    alignItems:   'flex-start',
    gap:          '1rem',
  },
  icon: {
    fontSize:   '24px',
    flexShrink: 0,
    marginTop:  '2px',
  },
  title: {
    fontSize:     '15px',
    fontWeight:   600,
    marginBottom: '0.25rem',
  },
  desc: {
    fontSize: '13px',
    color:    'var(--muted)',
  },
  date: {
    fontSize:   '11px',
    fontFamily: 'var(--mono)',
    color:      'var(--accent)',
    marginTop:  '0.4rem',
  },
};
