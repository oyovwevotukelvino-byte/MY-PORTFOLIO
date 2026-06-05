// ============================================================
// HOW I BUILD — src/Sections/HowIBuild.jsx
// Engineering depth section with process + skill badges.
// ============================================================

import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Building Through, Experience',
    body: 'A journey of building products, solving problems, and creating meaningful work across technology, business, and entrepreneurship.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Architecture first',
    body: 'Before writing a line of code I map data flow, failure modes, and scale bottlenecks — saving 10× the refactor time later.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Product thinking',
    body: 'I don\'t just implement features — I question whether the feature solves the real job-to-be-done, and push back when it doesn\'t.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Performance by default',
    body: 'Years of building across software, business, writing, and entrepreneurship — learning, failing, launching, and improving. Every choice is performance-driven: I aim for 95+ Lighthouse scores and track Core Web Vitals from day one.',
  },
];

const SKILL_GROUPS = [
  {
    group: 'Frontend',
    badges: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Responsive Design'],
  },
  {
    group: 'Backend',
    badges: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'WebSockets', 'Serverless'],
  },
  {
    group: 'Data',
    badges: ['MongoDB', 'PostgreSQL', 'Prisma', 'Database Design', 'Indexing'],
  },
  {
    group: 'Engineering',
    badges: ['AI Integration', 'Performance Optimization', 'Security', 'Testing', 'CI/CD', 'Docker', 'Deployment'],
  },
  {
    group: 'Product',
    badges: ['Problem Solving', 'Architecture Thinking', 'User Research', 'Entrepreneurship', 'Leadership'],
  },
  {
    
    group:'Payment Integrations',
    badges:['Stripe',' Paystack', 'Flutterwave', '- Secure real-world', 'payment systems'],
    icon: 'CreditCard'
  },
];

function Badge({ label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'var(--font-mono)', fontSize: '11.5px',
      color: 'var(--text-secondary)',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border)',
      padding: '5px 11px',
      borderRadius: 'var(--radius-full)',
      transition: 'var(--transition-fast)',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.color = 'var(--accent-text)';
        e.currentTarget.style.borderColor = 'var(--accent-border)';
        e.currentTarget.style.background = 'var(--accent-muted)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
      }}
    >
      {label}
    </span>
  );
}

export default function HowIBuild() {
  return (
    <section id="how-i-build" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <div className="section-label">Engineering Depth</div>
          <h2 className="section-title">How I Build</h2>
          <p className="section-desc">
            My engineering approach distilled — the principles, process, and tools I reach for consistently.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '64px',
        }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '22px',
                transition: 'var(--transition-base)',
              }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.14)', y: -2 }}
            >
              <div style={{
                width: '38px', height: '38px',
                background: 'var(--accent-muted)',
                border: '1px solid var(--accent-border)',
                borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-text)',
                marginBottom: '16px',
              }}>
                {p.icon}
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skill badge groups */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '17px', color: 'var(--text-primary)',
            marginBottom: '28px', letterSpacing: '-0.01em',
          }}>
            Technologies & Skills
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: gi * 0.06 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10.5px',
                  color: 'var(--text-tertiary)', letterSpacing: '0.08em',
                  textTransform: 'uppercase', paddingTop: '6px',
                  minWidth: '80px', flexShrink: 0,
                }}>
                  {group.group}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {group.badges.map(b => <Badge key={b} label={b} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
