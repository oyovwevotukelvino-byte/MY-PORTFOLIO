// Writing page — expand with blog/essay list from src/data/writing.js
import { motion } from 'framer-motion';
const TOPICS = [
  { title:'Why Africa Needs More Builders', date:'2024', readTime:'5 min', tag:'Essay' },
  { title:'What Entrepreneurship Taught Me About Software', date:'2024', readTime:'7 min', tag:'Essay' },
  { title:'The Anatomy of a Dysfunctional World', date:'2024', readTime:'6 min', tag:'Philosophy' },
  { title:'Technology and Human Development', date:'2024', readTime:'8 min', tag:'Innovation' },
];
export default function Writing() {
  return (
    <main className="section">
      <div className="container">
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
          <div className="section-label">Ideas</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,48px)', marginBottom:'12px' }}>Writing</h1>
          <p className="section-desc" style={{ marginBottom:'48px' }}>
            I don't just build software. I explore ideas, create systems, and pursue solutions that can outlive me , technical deep-dives, and ideas I keep coming back to.
          </p>
        </motion.div>
        <div style={{ display:'flex', flexDirection:'column', gap:'1px', border:'1px solid var(--border)', borderRadius:'var(--radius-lg)', overflow:'hidden' }}>
          {TOPICS.map((t,i) => (
            <motion.div key={t.title} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:i*0.06 }}
              style={{ background:'var(--bg-secondary)', padding:'20px 22px', display:'flex', alignItems:'center', gap:'16px', borderBottom:'1px solid var(--border)', cursor:'pointer', transition:'var(--transition-fast)' }}
              onMouseEnter={e=>e.currentTarget.style.background='var(--bg-tertiary)'}
              onMouseLeave={e=>e.currentTarget.style.background='var(--bg-secondary)'}
            >
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--accent-text)', background:'var(--accent-muted)', border:'1px solid var(--accent-border)', padding:'3px 8px', borderRadius:'var(--radius-full)', flexShrink:0 }}>{t.tag}</span>
              <span style={{ flex:1, fontSize:'15px', fontWeight:500, color:'var(--text-primary)' }}>{t.title}</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-tertiary)', flexShrink:0 }}>{t.readTime}</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-tertiary)', flexShrink:0 }}>{t.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
