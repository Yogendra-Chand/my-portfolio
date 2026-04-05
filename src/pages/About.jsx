import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const INFO = [
  { label:'Name',    value:'Yogendra Chand' },
  { label:'College', value:'Orchid International College' },
  { label:'Focus',   value:'Front-End Development' },
  { label:'Status',  value:'Open to Work ' },
  { label:'Location',value:'Kathmandu,Nepal' },
  { label:'Passion', value:'Building Web Experiences' },

];

const TIMELINE = [
  { year:'2021', title:'Started Web Journey', desc:'Learned HTML, CSS and the basics of web development. Built first static websites.' },
  { year:'2022', title:'JavaScript & PHP',    desc:'Dived into JavaScript interactivity and built server-side projects with PHP and MySQL.' },
  { year:'2023', title:'React.js & Tailwind', desc:'Discovered the React ecosystem. Built Todo App and Weather App with hooks and APIs.' },
  { year:'2024', title:'Android Development', desc:'Explored Java and Android Studio. Built an Attendance Management App for mobile.' },
  { year:'2025', title:'Orchid International',desc:'Enrolled at Orchid International College, levelling up full-stack and design skills.' },
];

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold:.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', paddingTop:100 }}>

      {/* blob */}
      <div style={{ position:'fixed', top:100, right:0, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(123,97,255,0.08) 0%,transparent 70%)', filter:'blur(60px)', pointerEvents:'none', zIndex:0 }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px 80px', position:'relative', zIndex:1 }}>

        {/* Section header */}
        <div className="reveal" style={{ marginBottom:64 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'var(--accent)', letterSpacing:'.2em', textTransform:'uppercase' }}>/01</span>
          <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'clamp(3rem,7vw,6rem)', color:'var(--text)', letterSpacing:'.03em', marginTop:4 }}>
            About <span className="g-text">Me</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'start' }} className="about-grid">

          {/* Photo + info */}
          <div className="reveal" style={{ display:'flex', flexDirection:'column', gap:24 }}>

            {/* Photo card */}
            <div style={{ borderRadius:20, overflow:'hidden', border:'1px solid var(--border)', background:'var(--card)', position:'relative', height:360 }}>
         
              <img 
  src="/photo.jpg"
  alt="Yogendra"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
/>

              {/* Name overlay */}
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(6,8,15,0.95),transparent)', padding:'24px 20px 16px' }}>
                <div style={{ fontWeight:600, color:'var(--text)', fontSize:'1.05rem' }}>Yogendra Chand</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.72rem', color:'var(--accent)', marginTop:3 }}>Front-End Developer</div>
              </div>
            </div>

            {/* Info grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              {INFO.map(({ label, value }) => (
                <div key={label} style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:14, padding:'14px 16px' }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.6rem', color:'var(--muted)', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:5 }}>{label}</div>
                  <div style={{ fontSize:'.82rem', color:'var(--text)', fontWeight:500 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text + timeline */}
          <div className="reveal delay-1" style={{ display:'flex', flexDirection:'column', gap:32 }}>
            <div>
              <h3 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'clamp(2rem,4vw,3rem)', color:'var(--text)', lineHeight:1.1, marginBottom:18 }}>
                Passionate about building <span className="g-text">beautiful</span> web experiences
              </h3>
              <p style={{ color:'rgba(204,217,240,0.6)', lineHeight:1.8, marginBottom:14 }}>
                Hi! I'm <span style={{ color:'var(--accent)', fontWeight:600 }}>Yogendra Chand</span>, a passionate front-end developer from Kathmandu, Nepal. I enjoy turning creative ideas into real, interactive web experiences with clean and efficient code.
              </p>
              <p style={{ color:'rgba(204,217,240,0.5)', lineHeight:1.8 }}>
                I specialize in modern UIs using React.js and Tailwind CSS. I'm constantly pushing my skills  from building weather apps to full e-commerce platforms.
              </p>
            </div>

           

            <NavLink to="/contact" style={{ textDecoration:'none', alignSelf:'flex-start' }}>
              <button className="btn-glow" style={{ padding:'12px 28px', borderRadius:99, fontSize:'.88rem', border:'none', cursor:'none', fontFamily:"'DM Sans',sans-serif" }}>
                Get In Touch 
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; } }`}</style>
      <Footer />
    </div>
  );
}