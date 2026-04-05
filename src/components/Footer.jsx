import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(24,32,53,0.5)', padding: '40px 28px', textAlign: 'center', background: 'rgba(6,8,15,0.6)' }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <span style={{ fontFamily: "'Bebas Neue',cursive", fontSize: '2rem', letterSpacing: '.1em', background: 'linear-gradient(130deg,#00ffe0,#7b61ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          YOGENDRA CHAND
        </span>
      </NavLink>
      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', color: 'var(--muted)', marginTop: 10, letterSpacing: '.08em' }}>
      2026
      </p>
    </footer>
  );
}