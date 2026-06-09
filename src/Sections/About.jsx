// About page — full redesign stub
import { motion } from 'framer-motion';

const TIMELINE = [
  { year:'2021', event:'Started learning software development', detail:'HTML, CSS, JS — late-night YouTube and MDN docs.' },
  { year:'2022', event:'Built first full-stack app', detail:'A CRUD web app with Node.js + MongoDB. Shipped it.' },
  { year:'2023', event:'Went deep on React + system design', detail:'TypeScript, state management, API design patterns.' },
  { year:'2024', event:'Exploring entrepreneurship + AI', detail:'Building products that combine tech, business, and creativity.' },
];
const colors = {
  accent: '#3b82f6',
  accentPurple: '#8b5cf6',
  accentGreen: '#10b981',
  primary: '#ffffff',
  card: '#111827',
  cardBorder: '#374151',
  textMuted: '#9ca3af',
};
export default function About() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth:'740px' }}>
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
          <div className="section-label">About</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,48px)', marginBottom:'24px' }}>Who I am</h1>
          <p style={{ fontSize:'16px', color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'16px' }}>
            I'm <strong style={{ color:'var(--text-primary)' }}>Oyovwevotu Kelvin</strong> —  a Nigerian software developer and entrepreneur building technology solutions that connect business, creativity, and innovation across Africa.
            I build technology that combines software, business thinking, creativity, and innovation  I build systems that scale businesses. 
            From payment integrations that handle real transactions to export platforms connecting Nigeria to Dubai markets.
          </p>
          <p style={{ fontSize:'16px', color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'48px' }}>
            Outside of code I'm interested in agriculture, education, writing, and how technology can accelerate human development in Africa and beyond Hands-on with full-stack apps, but my edge is turning ideas into revenue-generating products. 
            Looking for partners who want to build in silence, then dominate.
          </p>
        </motion.div>
        <motion.div initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.15 }}>
          <h2 style={{ fontSize:'20px', marginBottom:'28px' }}>Journey</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
            {TIMELINE.map((t,i) => (
              <div key={t.year} style={{ display:'flex', gap:'20px', paddingBottom:'28px', position:'relative' }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                  <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:'var(--accent)', border:'2px solid var(--bg-primary)', zIndex:1 }} />
                  {i < TIMELINE.length-1 && <div style={{ width:'1px', flex:1, background:'var(--border)', marginTop:'4px' }} />}
                </div>
                <div style={{ paddingBottom:'4px' }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--accent-text)', marginBottom:'4px' }}>{t.year}</div>
                  <div style={{ fontSize:'15px', fontWeight:600, color:'var(--text-primary)', marginBottom:'4px' }}>{t.event}</div>
                  <div style={{ fontSize:'13.5px', color:'var(--text-secondary)' }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-8">
              
              {[ 
                { value: "5+", label: "Projects Deployed", color: colors.accent },
                { value: "2+", label: "Business Ideas Live", color: colors.accentPurple },
                { value: "100%", label: "Production Ready", color: colors.accentGreen },
                { value: "24/7", label: "Builder Mode", color: colors.accentPurple },

              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{
                    background: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    backdropFilter: "blur(12px)",
                    borderRadius:'var(--radius-md)',
                    marginBottom:'16px',
                    padding:'22px',
                  }}
                >
                  <div style={{
                    fontSize:'2rem',
                    fontWeight:700,
                    color:item.color,
                    
                  }}
                  >
                    {item.value}
                  </div>

                  <div
                    className="mt-2"
                    style={{ color: colors.textMuted }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}

            </div>
          </motion.div>
      </div>
    </main>
  );
}
