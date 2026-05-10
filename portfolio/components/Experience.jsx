'use client';
import { useReveal } from '../hooks/useReveal';
import { experience } from '../data/portfolio';

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="section reveal">
      <p className="sec-tag">// 03 Experience</p>
      <h2 className="sec-title">Where I've Worked</h2>

      <div style={styles.timeline}>
        {experience.map((job) => (
          <div key={job.role} style={styles.item}>
            <div style={styles.dot} />
            <p style={styles.date}>{job.period}</p>
            <h3 style={styles.role}>{job.role}</h3>
            <p style={styles.company}>{job.company}</p>
            <ul style={styles.bullets}>
              {job.bullets.map((b, i) => (
                <li key={i} style={styles.bullet}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  timeline: {
    position:    'relative',
    paddingLeft: '2rem',
  },
  item: {
    position:     'relative',
    marginBottom: '3rem',
    /* The vertical line is a pseudo-element — we do it via a wrapper div */
  },
  dot: {
    position:    'absolute',
    left:        '-2.45rem',
    top:         '6px',
    width:       '10px',
    height:      '10px',
    borderRadius:'50%',
    background:  'var(--accent)',
    boxShadow:   '0 0 0 3px var(--bg), 0 0 0 4px var(--accent)',
  },
  date: {
    fontFamily:   'var(--mono)',
    fontSize:     '11px',
    color:        'var(--accent)',
    marginBottom: '0.4rem',
  },
  role: {
    fontSize:     '18px',
    fontWeight:   600,
    marginBottom: '0.25rem',
  },
  company: {
    fontSize:     '13px',
    color:        'var(--muted)',
    fontFamily:   'var(--mono)',
    marginBottom: '1rem',
  },
  bullets: {
    listStyle:     'none',
    display:       'flex',
    flexDirection: 'column',
    gap:           '0.5rem',
  },
  bullet: {
    fontSize:    '14px',
    color:       'var(--muted)',
    paddingLeft: '1.25rem',
    lineHeight:  1.65,
    position:    'relative',
  },
};
