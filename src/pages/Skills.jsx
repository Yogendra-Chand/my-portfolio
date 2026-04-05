import { useEffect } from 'react';
import Footer from '../components/Footer';

const TECH = [
  { name:'React.js',        color:'#00ffe0', cat:'Frontend' },
  { name:'JavaScript',      color:'#f7df1e', cat:'Frontend' },
  { name:'Tailwind CSS',    color:'#38bdf8', cat:'Frontend' },
  { name:'HTML5',           color:'#e34c26', cat:'Frontend' },
  { name:'CSS3',            color:'#264de4', cat:'Frontend' },
  { name:'Java',            color:'#f89820', cat:'Mobile'   },
  { name:'Android Studio',  color:'#3ddc84', cat:'Mobile'   },
  { name:'Canva',           color:'#ff61f6', cat:'Design'   },
  { name:'Git',             color:'#f05032', cat:'Tools'    },
  { name:'VS Code',         color:'#007acc', cat:'Tools'    },
];

const SOFT = [
  { name:'Communication'     },
  { name:'Problem Solving'  },
  { name:'Team Collaboration' },
  { name:'Creative Thinking' },
  { name:'Quick Learner'     },
  { name:'Attention to Detail' },
  { name:'Time Management'   },
  { name:'Adaptability'      },
];

const LEARNING = [
  { name:'Next.js',    icon:'▲', color:'#fff'    },
  { name:'TypeScript', icon:'TS', color:'#3178c6' },
  { name:'Node.js',    icon:'🟢', color:'#68a063' },
  { name:'MongoDB',    icon:'🍃', color:'#47a248' },
];

const CATS = ['Frontend','Mobile','Design','Tools'];

export default function Skills() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold:.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', paddingTop:100 }}>
      <div style={{ position:'fixed', top:80, left:0, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,255,224,0.07) 0%,transparent 70%)', filter:'blur(60px)', pointerEvents:'none', zIndex:0 }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px 80px', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom:64 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'var(--accent)', letterSpacing:'.2em', textTransform:'uppercase' }}>/02</span>
          <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'clamp(3rem,7vw,6rem)', color:'var(--text)', letterSpacing:'.03em', marginTop:4 }}>
            My <span className="g-text">Skills</span>
          </h2>
          
        </div>

        {/* Tech skills by category */}
        {CATS.map(cat => {
          const items = TECH.filter(t => t.cat === cat);
          return (
            <div key={cat} className="reveal" style={{ marginBottom:44 }}>
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:18 }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.68rem', color:'var(--muted)', letterSpacing:'.18em', textTransform:'uppercase' }}>// {cat}</span>
                <div style={{ flex:1, height:1, background:'linear-gradient(to right,var(--border),transparent)' }} />
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
                {items.map(({ name, icon, color }) => (
                  <div key={name} className="skill-chip"
                    style={{ display:'flex', alignItems:'center', gap:9, padding:'10px 18px', borderRadius:12, fontSize:'.88rem', fontWeight:500 }}
                    data-hover
                  >
                    <span style={{ fontSize:'1.1rem' }}>{icon}</span>
                    <span>{name}</span>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:color, marginLeft:4, boxShadow:`0 0 6px ${color}` }} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Two column: soft + learning */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginTop:20 }} className="two-col">

          {/* Soft skills */}
          <div className="reveal delay-1">
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.68rem', color:'var(--violet)', letterSpacing:'.18em', textTransform:'uppercase', marginBottom:18 }}>
              // SOFT SKILLS
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {SOFT.map(({ name, icon }) => (
                <div key={name} className="skill-chip"
                  style={{ display:'flex', alignItems:'center', gap:7, padding:'9px 16px', borderRadius:10, fontSize:'.83rem' }}
                  data-hover
                >
                  <span>{icon}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently learning */}
          <div className="reveal delay-2">
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.68rem', color:'var(--rose)', letterSpacing:'.18em', textTransform:'uppercase', marginBottom:18 }}>
              // CURRENTLY LEARNING
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {LEARNING.map(({ name, icon, color }) => (
                <div key={name} style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 18px', borderRadius:14, background:'var(--card)', border:'1px solid var(--border)', transition:'all .3s ease' }}
                  className="dark-card"
                >
                  <div style={{ width:36, height:36, borderRadius:10, background:`${color}18`, border:`1px solid ${color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'JetBrains Mono',monospace", fontSize:'.75rem', color, fontWeight:700 }}>
                    {icon}
                  </div>
                  <span style={{ fontWeight:500, color:'var(--text)' }}>{name}</span>
                  <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:5 }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:color, animation:'blink 1.4s step-end infinite', display:'inline-block' }} />
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.1em' }}>IN PROGRESS</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div style={{ marginTop:16, padding:'18px 20px', borderRadius:16, background:'linear-gradient(135deg,rgba(0,255,224,0.06),rgba(123,97,255,0.08))', border:'1px solid rgba(0,255,224,0.12)' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'var(--muted)', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:6 }}>STUDYING AT</div>
              <div style={{ fontWeight:700, color:'var(--text)', fontSize:'1rem' }}>Orchid International College</div>
              <div style={{ color:'var(--accent)', fontSize:'.82rem', marginTop:4, fontFamily:"'JetBrains Mono',monospace" }}>Bachelor's Program · Nepal</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .two-col{ grid-template-columns:1fr !important; } }`}</style>
      <Footer />
    </div>
  );
}