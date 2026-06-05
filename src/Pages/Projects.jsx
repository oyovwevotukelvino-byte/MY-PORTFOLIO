// Full Projects page — stub, expand with all projects list + filters
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
          <div className="section-label">All Work</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,48px)', marginBottom:'12px' }}>Projects</h1>
          <p className="section-desc" style={{ marginBottom:'48px' }}>
            Everything I've built — from production apps to experiments and open-source work.
          </p>
        </motion.div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'16px' }}>
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.07, duration:0.5 }}
              style={{ background:'var(--bg-secondary)', border:'1px solid var(--border)', borderRadius:'var(--radius-lg)', padding:'20px' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--accent-text)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'8px' }}>{p.category}</div>
              <h3 style={{ fontSize:'17px', marginBottom:'8px' }}>{p.title}</h3>
              <p style={{ fontSize:'13.5px', color:'var(--text-secondary)', marginBottom:'16px', lineHeight:1.65 }}>{p.tagline}</p>
              <Link to={`/projects/${p.slug}`} className="btn btn-secondary" style={{ fontSize:'13px', padding:'7px 14px' }}>View Case Study →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
