import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroData } from '../data/hero';
import image from '../assets/Image.jpeg';

// ── Framer variants ──────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.94 },
  show:   { opacity: 1, scale: 1,    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

// ── Social icon paths ────────────────────────────────────────
const ICON_PATHS = {
  'brand-github': 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z',
  'brand-linkedin': 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  'mail': 'M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
  'brand-x': 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.737l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  'map-pin': 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
};

function SocialIcon({ icon, size = 18 }) {
  const path = ICON_PATHS[icon];
  if (!path) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon === 'brand-github' || icon === 'brand-x'
        ? <path d={path} fill="currentColor" stroke="none"/>
        : <path d={path}/>
      }
    </svg>
  );
}

// ── Component ────────────────────────────────────────────────
export default function Hero() {
  const { name, role, tagline, availableForWork, availabilityLabel, location, stats, ctas, socials } = heroData;

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '72px',
      }}
    >
      {/* Background grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 50%, transparent 100%)',
      }} />

      {/* Accent glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-160px', right: '-80px', zIndex: 0,
        width: '520px', height: '520px',
        background: 'radial-gradient(ellipse, rgba(124,106,247,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '56px',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ minWidth: 0 }}
          >
            {/* Availability badge */}
            {availableForWork && (
              <motion.div variants={item} style={{ marginBottom: '28px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'var(--accent-muted)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent-text)',
                  fontSize: '12px', fontWeight: 500,
                  padding: '5px 13px',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.02em',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 6px var(--accent)',
                    animation: 'heroPulse 2s infinite',
                    flexShrink: 0,
                  }} />
                  {availabilityLabel}
                </span>
              </motion.div>
            )}

            {/* Name */}
            <motion.h1 variants={item} style={{ marginBottom: '8px', lineHeight: 1.0 }}>
              {name.first}
              <br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 700 }}>{name.last}</span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={item} style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(15px, 2.2vw, 21px)',
              background: 'linear-gradient(90deg, var(--accent-text) 0%, #c4b5fd 50%, #93c5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '22px',
              lineHeight: 1.35,
              maxWidth: '500px',
            }}>
              {role}
            </motion.p>

            {/* Tagline */}
            <motion.p variants={item} style={{
              fontSize: '15.5px',
              color: 'var(--text-secondary)',
              lineHeight: 1.78,
              maxWidth: '500px',
              marginBottom: '36px',
              fontWeight: 300,
            }}>
              {tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} style={{
              display: 'flex', flexWrap: 'wrap', gap: '10px',
              marginBottom: '40px' ,
            }} className="cta-row">
              <Link to={ctas.primary.href} className="btn btn-primary" style={{ fontSize: '14px', padding: '11px 22px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
                {ctas.primary.label}
              </Link>
              <a href={ctas.secondary.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '14px', padding: '11px 22px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                {ctas.secondary.label}
              </a>
              <Link to={ctas.tertiary.href} className="btn btn-secondary" style={{ fontSize: '14px', padding: '11px 22px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {ctas.tertiary.label}
              </Link>
            </motion.div>

            {/* Socials + location */}
            <motion.div variants={item} style={{
              display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', 
              borderRadius: 'var(--radius-md)',
            }}>
              <span style={{
                fontSize: '11px', color: 'var(--text-tertiary)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginRight: '6px', fontFamily: 'var(--font-mono)',
              }}>
                Find me
              </span>

              {socials.map(s => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    color: 'var(--text-tertiary)',
                    transition: 'var(--transition-base)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-tertiary)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}

              <span style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                fontSize: '12px', color: 'var(--text-tertiary)',
                marginLeft: '8px', 
              }}>
                <SocialIcon icon="map-pin" size={13} />
                {location}
                
              </span>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={item} style={{
              display: 'flex', gap: '28px', flexWrap: 'wrap', marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid var(--border)',
            }} className="stats-row">
              {stats.map(s => (
                <div key={s.label} style={{ borderLeft: '2px solid var(--accent-border)', paddingLeft: '14px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', color: 'var(--text-primary)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px', letterSpacing: '0.02em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: profile image ── */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
            className="hero-image-col"
          >
            <div style={{
              width: '320px', height: '360px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle accent gradient inside card */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 60% 30%, rgba(124,106,247,0.14) 0%, transparent 65%)',
              }} />

              {/* Orbit rings */}
              <div className="orbit-ring" style={{
                position: 'absolute', borderRadius: '50%',
                border: '1px solid rgba(124,106,247,0.1)',
                width: '260px', height: '260px',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'orbit1 20s linear infinite',
              }}>
                
                <div style={{ position: 'absolute', top: '-3px', left: '50%', marginLeft: '-3px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
              </div>
              <div className="orbit-ring" style={{
                position: 'absolute', borderRadius: '50%',
                border: '1px solid rgba(124,106,247,0.06)',
                width: '360px', height: '360px',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'orbit1 32s linear infinite reverse',
              }} />

              {/* Profile image */}
              <img
                src={image}
                alt={`${name.first} ${name.last}`}
                style={{
                  width: '240px', height: '240px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid rgba(255,255,255,0.1)',
                  position: 'relative', zIndex: 1,
                }}
              />

              {/* Name tag at bottom */}
              <div style={{
                position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(9,9,11,0.88)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 18px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center', whiteSpace: 'nowrap',
                zIndex: 2,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                  {name.first} {name.last}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                  Full-Stack Developer
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.75); }
        }
        @keyframes orbit1 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-image-col {
            display: flex;
            justify-content: center;
            order: -1;
          }
          .hero-image-col > div {
            width: 200px !important;
            height: 280px !important;
          }
          .hero-grid .cta-row  {
           justify-content: center;
           }
          .hero-grid .stats-row { 
           justify-content: center;
         }
          .hero-image-col .orbit-ring {
            display: none !important;
          }

          .hero-image-col img{
            width: 160px !important;
            height: 160px !important;}
        }
        @media (max-width: 480px) {
          .hero-image-col >div {
          width: 160px !important;
          height: 160px !important;
          border-radius: 50% !important; 
         }

          .hero-image-col img{
            width: 130px !important;
            height: 130px !important;
            border-radius: 50% !important;
           }
        }
      `}</style>
    </section>
  );
}
