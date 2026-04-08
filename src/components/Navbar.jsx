import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/skills',   label: 'Skills'   },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all .4s ease',
        ...(scrolled
          ? { background: 'rgba(6,8,15,0.88)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(24,32,53,0.5)', padding: '12px 0' }
          : { background: 'transparent', padding: '22px 0' }),
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.9rem', letterSpacing: '.1em', background: 'linear-gradient(130deg,#00ffe0,#7b61ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
           Chand ji<span style={{ color: '#00ffe0' }}>.</span>
          </span>
        </NavLink>

 
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                style={{ textDecoration: 'none' }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

     
        <NavLink
          to="/contact"
          style={{ textDecoration: 'none' }}
          className="desktop-nav"
        >
          <button
            className="btn-outline"
            style={{ padding: '8px 22px',color:'#F54927', borderRadius: 99, fontFamily: "'JetBrains Mono',monospace", fontSize: '.75rem', letterSpacing: '.1em', cursor: 'none' }}
          >
            Hire Me
          </button>
        </NavLink>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'none', color: '#00ffe0', display: 'none' }}
          className="hamburger"
          data-hover
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(11,15,26,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(24,32,53,0.5)', padding: '16px 28px 20px' }}>
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              style={{ display: 'block', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(24,32,53,0.4)' }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  );
}