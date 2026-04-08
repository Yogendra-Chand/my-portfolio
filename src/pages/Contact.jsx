import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const SOCIALS = [
  { label:'GitHub',   icon:'⌨️', hint:'github.com/yogendra' },
  { label:'LinkedIn', icon:'💼', hint:'linkedin.com/in/yogendra-chand' },
  { label:'Email',    icon:'📧', hint:'https://mail.google.com/mail/u/0/#inbox' },
];

export default function Contact() {
  const [form, setForm]   = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent]   = useState(false);
  const [focus, setFocus] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold:.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', email:'', subject:'', message:'' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle = (field) => ({
    width:'100%', background:'rgba(11,15,26,0.8)',
    border: focus===field ? '1px solid rgba(0,255,224,0.45)' : '1px solid var(--border)',
    borderRadius:12, padding:'13px 16px',
    color:'var(--text)', fontSize:'.9rem',
    outline:'none', transition:'all .25s ease', fontFamily:"'DM Sans',sans-serif",
    boxShadow: focus===field ? '0 0 0 3px rgba(0,255,224,0.06)' : 'none',
  });

  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', paddingTop:100 }}>
      <div style={{ position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,255,224,0.05) 0%,transparent 70%)', filter:'blur(60px)', pointerEvents:'none', zIndex:0 }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px 80px', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom:64 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'var(--accent)', letterSpacing:'.2em', textTransform:'uppercase' }}>/04</span>
          <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'clamp(3rem,7vw,6rem)', color:'var(--text)', letterSpacing:'.03em', marginTop:4 }}>
            Get In <span className="g-text">Touch</span>
          </h2>
          <p style={{ color:'rgba(204,217,240,0.5)', marginTop:12, maxWidth:440, lineHeight:1.7 }}>
  I'm always open to exciting opportunities.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:48, alignItems:'start' }} className="contact-grid">

          {/* Left info */}
          <div className="reveal" style={{ display:'flex', flexDirection:'column', gap:20 }}>

            {[
              {  label:'Email',    value:'yogendraChand444@gmail.com' },
              {  label:'College',  value:'Orchid International College' },
              {  label:'Location', value:'Kathmandu,Nepal' },
             
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:16, padding:'16px 18px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:14 }}>
                <div style={{ width:42, height:42, borderRadius:11, background:'rgba(0,255,224,0.08)', border:'1px solid rgba(0,255,224,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', flexShrink:0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.1em', textTransform:'uppercase', marginBottom:3 }}>{label}</div>
                  <div style={{ fontSize:'.85rem', color:'var(--text)', fontWeight:500 }}>{value}</div>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div style={{ marginTop:8 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'var(--muted)', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:14 }}>// FIND ME ON</div>
              <div style={{ display:'flex', gap:12 }}>
                {SOCIALS.map(({ label, icon }) => (
                  <button key={label} data-hover
                    style={{ flex:1, padding:'12px 8px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, cursor:'none', display:'flex', flexDirection:'column', alignItems:'center', gap:6, transition:'all .3s ease', color:'var(--muted2)', fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', letterSpacing:'.08em' }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(0,255,224,0.3)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.background='rgba(0,255,224,0.04)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--muted2)'; e.currentTarget.style.background='var(--card)'; }}
                  >
                    <span style={{ fontSize:'1.2rem' }}>{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal delay-2">
            <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:20, padding:32 }}>
              {sent ? (
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, padding:'48px 0', textAlign:'center' }}>
                  <div style={{ width:64, height:64, borderRadius:'50%', background:'rgba(0,255,224,0.1)', border:'1px solid rgba(0,255,224,0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem' }}>✅</div>
                  <h3 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'2rem', color:'var(--text)', letterSpacing:'.05em' }}>Opps sorry Please send message to this email:yogendrachand444@gmail.com</h3>
                  <p style={{ color:'rgba(204,217,240,0.5)', fontSize:'.88rem', maxWidth:280, lineHeight:1.6 }}>
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:8 }}>Name</label>
                      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} onFocus={()=>setFocus('name')} onBlur={()=>setFocus('')} required  style={inputStyle('name')} />
                    </div>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:8 }}>Email</label>
                      <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} onFocus={()=>setFocus('email')} onBlur={()=>setFocus('')} required  style={inputStyle('email')} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:8 }}>Subject</label>
                    <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} onFocus={()=>setFocus('subject')} onBlur={()=>setFocus('')} style={inputStyle('subject')} />
                  </div>

                  <div>
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.62rem', color:'var(--muted)', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:8 }}>Message</label>
                    <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} onFocus={()=>setFocus('message')} onBlur={()=>setFocus('')} required rows={5} style={{ ...inputStyle('message'), resize:'none' }} />
                  </div>

                  <button type="submit" data-hover className="btn-glow"
                    style={{ padding:'14px', borderRadius:13, fontSize:'.92rem', border:'none', cursor:'none', fontFamily:"'DM Sans',sans-serif", letterSpacing:'.02em', marginTop:4 }}
                  >
                    Send Message 
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; } }`}</style>
      <Footer />
    </div>
  );
}