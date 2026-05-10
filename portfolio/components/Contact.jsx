'use client';
import { useReveal } from '../hooks/useReveal';
import { hero } from '../data/portfolio';

const CONTACT_LINKS = [
  { label: `📧 ${hero.email}`,  href: `mailto:${hero.email}`  },
  { label: `📞 ${hero.phone}`,  href: `tel:${hero.phone}`     },
  { label: '💼 LinkedIn',       href: hero.linkedin            },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="section reveal">
      <p className="sec-tag">// 07 Contact</p>
      <h2 className="sec-title">Let's Work Together</h2>

      <div style={styles.card}>
        <div style={styles.glow} />
        <p style={styles.sub}>
          Open to full-time roles, freelance projects, and interesting collaborations.
          Drop me a line — I respond fast.
        </p>
        <div style={styles.links}>
          {CONTACT_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={styles.link}
            >
              {l.label}
            </a>
          ))}
        </div>
        <p style={styles.location}>📍 {hero.location}</p>
      </div>
    </section>
  );
}

const styles = {
  card: {
    background:   'var(--surface)',
    border:       '1px solid var(--border)',
    borderRadius: '14px',
    padding:      '2.5rem',
    textAlign:    'center',
    position:     'relative',
    overflow:     'hidden',
  },
  glow: {
    position:      'absolute',
    inset:         0,
    background:    'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(110,231,183,0.06), transparent)',
    pointerEvents: 'none',
  },
  sub: {
    fontSize:  '16px',
    color:     'var(--muted)',
    maxWidth:  '480px',
    margin:    '0 auto',
    lineHeight: 1.7,
  },
  links: {
    display:        'flex',
    justifyContent: 'center',
    gap:            '1rem',
    flexWrap:       'wrap',
    marginTop:      '1.5rem',
  },
  link: {
    display:      'flex',
    alignItems:   'center',
    gap:          '0.5rem',
    padding:      '10px 20px',
    border:       '1px solid var(--border)',
    borderRadius: '8px',
    color:        'var(--text)',
    fontSize:     '13px',
    textDecoration:'none',
    transition:   'border-color 0.2s, color 0.2s',
  },
  location: {
    fontSize:   '12px',
    fontFamily: 'var(--mono)',
    color:      'var(--muted)',
    marginTop:  '1.5rem',
  },
};
