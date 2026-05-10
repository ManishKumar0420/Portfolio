'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'games',      label: 'Fun Zone'   },
  { id: 'contact',    label: 'Contact'    },
];

export default function Navbar() {
  const [active, setActive] = useState('about');

  /* Highlight nav link based on scroll position */
  useEffect(() => {
    const onScroll = () => {
      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(link.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>MK<span style={{ color: 'var(--muted)' }}>.</span></span>
      <div style={styles.links}>
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            style={{
              ...styles.link,
              color: active === l.id ? 'var(--accent)' : 'var(--muted)',
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position:       'sticky',
    top:            0,
    zIndex:         100,
    background:     'rgba(10,10,15,0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom:   '1px solid var(--border)',
    padding:        '0 2rem',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    height:         '56px',
  },
  logo: {
    fontFamily:    'var(--mono)',
    fontSize:      '14px',
    color:         'var(--accent)',
    letterSpacing: '0.05em',
  },
  links: {
    display: 'flex',
    gap:     '1.5rem',
  },
  link: {
    background:    'none',
    border:        'none',
    fontFamily:    'var(--sans)',
    fontSize:      '13px',
    cursor:        'pointer',
    transition:    'color 0.2s',
    padding:       '4px 0',
  },
};
