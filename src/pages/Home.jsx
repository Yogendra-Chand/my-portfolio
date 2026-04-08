import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const TECH_STRIP = ['React.js','JavaScript','Tailwind CSS','HTML5','CSS3','PHP','Java','Android','Canva','Git'];

export default function Home() {
  // scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section className="grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>

        {/* Ambient blobs */}
        <div style={{ position:'absolute', top:80, right:'-60px', width:480, height:480, borderRadius:'50%', background:'radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)', filter:'blur(40px)', pointerEvents:'none' }} className="anim-float" />
        <div style={{ position:'absolute', bottom:40, left:'-80px', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,255,224,0.08) 0%, transparent 70%)', filter:'blur(50px)', pointerEvents:'none' }} className="anim-floatB" />
        <div style={{ position:'absolute', top:'40%', left:'40%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,77,109,0.05) 0%, transparent 70%)', filter:'blur(60px)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px', width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}
             className="hero-grid">

          {/* Left */}
          <div>
            {/* badge */}
            <div className="anim-fsup s1" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:99, border:'1px solid rgba(0,255,224,0.2)', background:'rgba(0,255,224,0.04)', marginBottom:28 }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#00ffe0', boxShadow:'0 0 8px #00ffe0', animation:'blink 1.1s step-end infinite', display:'inline-block' }} />
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'var(--accent)', letterSpacing:'.15em' }}>AVAILABLE FOR WORK</span>
            </div>

            <h1 className="anim-fsup s2" style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'clamp(4rem,9vw,8rem)', lineHeight:.95, letterSpacing:'.02em', color:'', marginBottom:8 }}>
             यो
              <span className="g-text">गेन्द्र</span>
              <br/>
              <span style={{ fontSize:'clamp(1.6rem,4vw,3rem)', color:'var(--muted2)', letterSpacing:'.1em' }}>चन्द</span>
            </h1>

            <p className="anim-fsup s3" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.78rem', color:'var(--muted2)', letterSpacing:'.18em', textTransform:'uppercase', marginBottom:20 }}>
              Front-End Developer &nbsp;·&nbsp; React Enthusiast
            </p>

            <p className="anim-fsup s4" style={{ color:'rgba(204,217,240,0.6)', fontSize:'.95rem', lineHeight:1.75, maxWidth:440, marginBottom:32 }}>
              Crafting immersive digital experiences with clean code and creative design. Currently studying at{' '}
              <span style={{ color:'var(--accent)', fontWeight:600 }}>Orchid International College</span>.
            </p>

            <div className="anim-fsup s5" style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <NavLink to="/projects" style={{ textDecoration:'none' }}>
                <button className="btn-glow" style={{ padding:'13px 30px', borderRadius:99, fontSize:'.88rem', border:'none', cursor:'none', fontFamily:"'DM Sans',sans-serif" }}>
                  View Projects 
                </button>
              </NavLink>
              <NavLink to="/contact" style={{ textDecoration:'none' }}>
                <button className="btn-outline" style={{ padding:'13px 30px', borderRadius:99, fontSize:'.88rem', background:'none', cursor:'none', fontFamily:"'DM Sans',sans-serif" }}>
                  Let's Talk 
                </button>
              </NavLink>
            </div>

          
            
          </div>

          {/* Right — avatar */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
            <div className="anim-float" style={{ position:'relative', width:300, height:300 }}>
              {/* rings */}
              <div className="anim-spin" style={{ position:'absolute', inset:0, borderRadius:'50%', border:'1px solid rgba(0,255,224,0.15)' }} />
              <div className="anim-spinrev" style={{ position:'absolute', inset:16, borderRadius:'50%', border:'1px dashed rgba(123,97,255,0.15)' }} />
              <div className="anim-spin" style={{ position:'absolute', inset:32, borderRadius:'50%', border:'1px solid rgba(0,255,224,0.08)', animationDuration:'35s' }} />

              {/* avatar circle */}
              <div className="anim-glow" style={{ position:'absolute', inset:48, borderRadius:'50%', background:'linear-gradient(135deg,rgba(0,255,224,0.12),rgba(123,97,255,0.18))', border:'1px solid rgba(0,255,224,0.25)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
         
<img 
  src="/Image.jpg"
  alt="Yogendra"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
/>
              </div>

              {/* floating tags */}
              <div style={{ position:'absolute', top:-10, right:-20, background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'7px 14px', fontFamily:"'JetBrains Mono',monospace", fontSize:'.72rem', color:'var(--accent)', boxShadow:'0 8px 30px rgba(0,0,0,0.4)', whiteSpace:'nowrap' }}>
                 React.js
              </div>
              <div style={{ position:'absolute', bottom:-12, left:-24, background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'7px 14px', fontFamily:"'JetBrains Mono',monospace", fontSize:'.72rem', color:'var(--violet)', boxShadow:'0 8px 30px rgba(0,0,0,0.4)', whiteSpace:'nowrap' }}>
                 JavaScript
              </div>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:.35 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.2em' }}>SCROLL</span>
          <div style={{ width:1, height:44, background:'linear-gradient(to bottom,var(--accent),transparent)' }} className="anim-blink" />
        </div>

        <style>{`
          @media(max-width:768px){ .hero-grid{ grid-template-columns:1fr !important; text-align:center; } .hero-grid > div:last-child{ display:none; } }
        `}</style>
      </section>

      {/* ── Tech marquee strip ── */}
      <div style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'18px 0', overflow:'hidden', background:'rgba(11,15,26,0.5)' }}>
        <div className="anim-marquee" style={{ display:'flex', gap:0, whiteSpace:'nowrap', width:'max-content' }}>
          {[...TECH_STRIP,...TECH_STRIP,...TECH_STRIP].map((t,i) => (
            <span key={i} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'rgba(61,80,112,0.7)', letterSpacing:'.2em', textTransform:'uppercase', padding:'0 28px' }}>
              {t} <span style={{ color:'var(--accent)', opacity:.3 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}