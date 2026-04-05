import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

const PROJECTS = [
  {
    title:'Blogging System',
    tech:['PHP','MySQL','HTML','CSS'],
    desc:'A full-featured blogging platform. Users can create, edit, delete and read posts with a clean admin panel and authentication.',
    icon:'📝',
    color:'#8993be',
    tag:'Full Stack',

  },
  {
    title:'E-Commerce Platform',
    tech:['PHP','MySQL','HTML','CSS'],
    desc:'Complete shopping platform with product listings, cart management, checkout flow and order processing built with PHP.',
    icon:'🛒',
    color:'#ff4d6d',
    tag:'Full Stack',

  },
  {
    title:'Todo App',
    tech:['React.js','Tailwind CSS','JavaScript'],
    desc:'Sleek task management app using React hooks. Features add, complete, filter and delete tasks with smooth transitions.',
    icon:'✅',
    color:'#00ffe0',
    tag:'React',
  
  },
  {
    title:'Weather App',
    tech:['React.js','OpenWeatherMap API','JavaScript'],
    desc:'Real-time weather app using OpenWeatherMap API. Shows temperature, humidity, wind speed and a 5-day forecast by city.',
    icon:'🌦️',
    color:'#38bdf8',
    tag:'React',
  
  },
  {
    title:'Attendance App',
    tech:['Java','Android Studio','SQLite'],
    desc:'Android application to track and manage student attendance. Built with Java in Android Studio with local SQLite storage.',
    icon:'📱',
    color:'#3ddc84',
    tag:'Android',
  
  },
];

function ProjCard({ title, tech, desc, icon, color, tag, year }) {
  return (
    <div className="proj-card" style={{ borderRadius:20, padding:26, display:'flex', flexDirection:'column', gap:16 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div style={{ width:52, height:52, borderRadius:14, background:`${color}16`, border:`1px solid ${color}28`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem' }}>
          {icon}
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', padding:'4px 10px', borderRadius:99, background:`${color}14`, color, border:`1px solid ${color}28` }}>{tag}</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.6rem', color:'var(--muted)', letterSpacing:'.1em' }}>{year}</span>
        </div>
      </div>

      <div>
        <h3 style={{ fontWeight:700, color:'var(--text)', fontSize:'1.05rem', marginBottom:8 }}>{title}</h3>
        <p style={{ color:'rgba(204,217,240,0.5)', fontSize:'.82rem', lineHeight:1.65 }}>{desc}</p>
      </div>

      <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginTop:'auto' }}>
        {tech.map(t => (
          <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'var(--muted2)', background:'rgba(24,32,53,0.8)', border:'1px solid var(--border)', padding:'4px 10px', borderRadius:7 }}>{t}</span>
        ))}
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color, opacity:.75, marginTop:4, transition:'opacity .2s' }}
        onMouseEnter={e=>e.currentTarget.style.opacity=1}
        onMouseLeave={e=>e.currentTarget.style.opacity='.75'}
      >
        <span>View Project</span>
      </div>
    </div>
  );
}

function Carousel() {
  const trackRef = useRef(null);
  const pos      = useRef(0);
  const paused   = useRef(false);
  const raf      = useRef(null);
  const CARD     = 320 + 20; // width + gap

  useEffect(() => {
    const step = () => {
      if (!paused.current) {
        pos.current += 0.45;
        const loop = PROJECTS.length * CARD;
        if (pos.current >= loop) pos.current = 0;
        if (trackRef.current) trackRef.current.style.transform = `translateX(-${pos.current}px)`;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div
      style={{ overflow:'hidden', padding:'8px 0' }}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div ref={trackRef} style={{ display:'flex', gap:20, width:'max-content' }}>
        {/* triple repeat so loop is seamless */}
        {[...PROJECTS,...PROJECTS,...PROJECTS].map((p,i) => (
          <ProjCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold:.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', paddingTop:100 }}>
      <div style={{ position:'fixed', bottom:80, right:0, width:500, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,77,109,0.07) 0%,transparent 70%)', filter:'blur(70px)', pointerEvents:'none', zIndex:0 }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom:16 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'var(--accent)', letterSpacing:'.2em', textTransform:'uppercase' }}>/03</span>
          <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'clamp(3rem,7vw,6rem)', color:'var(--text)', letterSpacing:'.03em', marginTop:4 }}>
            My <span className="g-text">Projects</span>
          </h2>
        </div>

       
      </div>

      {/* Full-width carousel */}
      <div style={{ paddingLeft:28, position:'relative', zIndex:1, marginBottom:80 }}>
        <Carousel />
      </div>

      

      <Footer />
    </div>
  );
}