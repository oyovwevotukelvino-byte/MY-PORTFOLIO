import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

// ── Helpers ──────────────────────────────────────────────────
const getDesc      = p => p.tagline  || p.desc        || '';
const getTech      = p => p.tags     || p.tech        || [];
const getImage     = p => p.coverImage || p.image     || null;
const getCategory  = p => p.category || 'Project';
const getStatus    = p => p.status   || 'Live';
const getYear      = p => p.year     || '';

const STATUS_STYLE = {
  'Live':        { bg: 'rgba(74,222,128,0.1)',   border: 'rgba(74,222,128,0.25)',   color: '#4ade80'  },
  'In Progress': { bg: 'rgba(251,191,36,0.1)',   border: 'rgba(251,191,36,0.25)',   color: '#fbbf24'  },
  'Archive':     { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)',   color: 'rgba(255,255,255,0.4)' },
};

function TechPill({ label }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono, monospace)',
      fontSize: '11px',
      color: 'rgba(255,255,255,0.45)',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      padding: '4px 10px',
      borderRadius: '9999px',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
}

function StatusBadge({ status }) {
  const s = STATUS_STYLE[status] || STATUS_STYLE['Live'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      fontSize: '10.5px', fontWeight: 500,
      padding: '3px 10px', borderRadius: '9999px',
      background: s.bg, border: `1px solid ${s.border}`, color: s.color,
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
      {status}
    </span>
  );
}

function CoverImage({ src, title, height = 240 }) {
  const [errored, setErrored] = useState(false);

  if (src && !errored) {
    return (
      <img
        src={src}
        alt={title}
        onError={() => setErrored(true)}
        style={{
          width: '100%', height: `${height}px`,
          objectFit: 'cover', display: 'block',
        }}
      />
    );
  }

  return (
    <div style={{
      width: '100%', height: `${height}px`,
      background: 'linear-gradient(135deg, rgba(124,106,247,0.18) 0%, rgba(124,106,247,0.04) 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'var(--font-display, sans-serif)',
        fontWeight: 800, fontSize: '64px',
        color: 'rgba(124,106,247,0.2)',
        letterSpacing: '-0.05em', userSelect: 'none',
      }}>
        {title?.charAt(0) || '?'}
      </span>
    </div>
  );
}

function FeaturedCard({ project }) {
  const tech   = getTech(project);
  const image  = getImage(project);
  const status = getStatus(project);

  return (
    <Motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        background: 'rgba(17,17,19,1)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '24px',
        transition: 'border-color 0.2s ease',
      }}
      className="featured-card"
      whileHover={{ borderColor: 'rgba(124,106,247,0.35)' }}
    >
      <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <span style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10.5px', fontWeight: 500,
            color: 'rgba(168,155,248,1)',
            background: 'rgba(124,106,247,0.12)',
            border: '1px solid rgba(124,106,247,0.25)',
            padding: '3px 10px', borderRadius: '9999px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            Featured
          </span>
          <StatusBadge status={status} />
          {getYear(project) && (
            <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10.5px', color: 'rgba(255,255,255,0.25)' }}>
              {getYear(project)}
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display, sans-serif)',
          fontWeight: 800, fontSize: 'clamp(22px, 2.5vw, 30px)',
          color: '#fafafa', letterSpacing: '-0.03em',
          marginBottom: '14px', lineHeight: 1.15,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '14.5px', color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.75, marginBottom: '22px',
          maxWidth: '420px',
        }}>
          {getDesc(project)}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
          {tech.slice(0, 5).map(t => <TechPill key={t} label={t} />)}
          {tech.length > 5 && <TechPill label={`+${tech.length - 5}`} />}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px', borderRadius: '9px',
                textDecoration: 'none', transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = '#fafafa'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              <span>GitHub</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', fontWeight: 500,
                color: '#fff', background: 'rgba(124,106,247,1)',
                padding: '8px 16px', borderRadius: '9px',
                textDecoration: 'none', transition: 'all 0.18s ease',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(106,88,224,1)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,106,247,1)'; e.currentTarget.style.transform = 'none'; }}
            >
              Live Demo <ExternalLink size={13} />
            </a>
          )}
          {project.slug ? (
            <Link
              to={`/projects/${project.slug}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', fontWeight: 500,
                color: 'rgba(168,155,248,1)',
                background: 'rgba(124,106,247,0.1)',
                border: '1px solid rgba(124,106,247,0.22)',
                padding: '8px 16px', borderRadius: '9px',
                textDecoration: 'none', transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,106,247,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,106,247,0.1)'; }}
            >
              Case Study <ArrowRight size={13} />
            </Link>
          ) : (
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', fontWeight: 500,
                color: 'rgba(168,155,248,1)',
                background: 'rgba(124,106,247,0.1)',
                border: '1px solid rgba(124,106,247,0.22)',
                padding: '8px 16px', borderRadius: '9px',
                cursor: 'pointer', transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,106,247,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,106,247,0.1)'; }}
            >
              Case Study <ArrowRight size={13} />
            </button>
          )}
        </div>
      </div>

      <div style={{
        position: 'relative', overflow: 'hidden',
        borderLeft: '1px solid rgba(255,255,255,0.07)',
        minHeight: '380px',
      }}>
        <CoverImage src={image} title={project.title} height={380} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(124,106,247,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      </div>

      <style>{`
        @media (max-width: 820px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-card > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.07);
            min-height: 220px !important;
          }
        }
        @media (max-width: 580px) {
          .featured-card > div:first-child {
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </Motion.article>
  );
}

function ProjectCard({ project, index }) {
  const tech   = getTech(project);
  const image  = getImage(project);
  const status = getStatus(project);

  return (
    <Motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      style={{
        background: 'rgba(17,17,19,1)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.22s ease',
        cursor: 'default',
      }}
      whileHover={{
        y: -5,
        borderColor: 'rgba(255,255,255,0.15)',
        transition: { duration: 0.2 },
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <CoverImage src={image} title={project.title} height={196} />
        <Motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(9,9,11,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px',
          }}
        >
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(17,17,19,0.9)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fafafa', textDecoration: 'none',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>GH</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(124,106,247,0.9)', border: '1px solid rgba(124,106,247,0.4)',
                color: '#fff', textDecoration: 'none',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </Motion.div>

        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <StatusBadge status={status} />
        </div>
      </div>

      <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '10px', color: 'rgba(168,155,248,0.8)',
          letterSpacing: '0.07em', textTransform: 'uppercase',
          marginBottom: '6px',
        }}>
          {getCategory(project)}
        </div>

        <h4 style={{
          fontFamily: 'var(--font-display, sans-serif)',
          fontWeight: 700, fontSize: '16px',
          color: '#fafafa', letterSpacing: '-0.02em',
          marginBottom: '8px', lineHeight: 1.2,
        }}>
          {project.title}
        </h4>

        <p style={{
          fontSize: '13.5px', color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.68, marginBottom: '16px',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {getDesc(project)}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
          {tech.slice(0, 3).map(t => <TechPill key={t} label={t} />)}
          {tech.length > 3 && <TechPill label={`+${tech.length - 3}`} />}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {project.slug ? (
            <Link
              to={`/projects/${project.slug}`}
              style={{
                fontSize: '12.5px', fontWeight: 500,
                color: 'rgba(168,155,248,0.9)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '4px',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(168,155,248,1)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(168,155,248,0.9)'}
            >
              Case study <ArrowRight size={12} />
            </Link>
          ) : (
            <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.25)' }}>
              {getYear(project)}
            </span>
          )}

          <div style={{ display: 'flex', gap: '4px' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '30px', height: '30px', borderRadius: '7px',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none', transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fafafa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; }}
              >
                <span>GH</span>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '30px', height: '30px', borderRadius: '7px',
                  border: '1px solid rgba(124,106,247,0.2)',
                  color: 'rgba(124,106,247,0.7)',
                  textDecoration: 'none', transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(168,155,248,1)'; e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(124,106,247,0.7)'; e.currentTarget.style.borderColor = 'rgba(124,106,247,0.2)'; }}
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Motion.article>
  );
}

export default function Projects() {
  const featured  = projects.find(p => p.featured);
  const secondary = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: '96px 0',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '52px' }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(168,155,248,1)',
            marginBottom: '14px',
          }}>
            <span style={{ display: 'block', width: '20px', height: '1px', background: 'rgba(124,106,247,1)' }} />
            Projects
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display, sans-serif)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 42px)',
            letterSpacing: '-0.03em',
            color: '#fafafa',
            marginBottom: '12px',
            lineHeight: 1.05,
          }}>
            Things I've Built
          </h2>
          <p style={{
            fontSize: '15.5px', color: 'rgba(255,255,255,0.5)',
            maxWidth: '500px', lineHeight: 1.75, fontWeight: 300,
          }}>
            Real products with real problems. Each one ships code that solves something, teaches something, or earns something.
          </p>
        </Motion.div>

        {featured && <FeaturedCard project={featured} />}

        {secondary.length > 0 && (
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '24px', marginTop: '56px',
              paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display, sans-serif)',
              fontWeight: 700, fontSize: '17px', color: '#fafafa',
              letterSpacing: '-0.02em',
            }}>
              Other Notable Projects
            </span>
            <span style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '11px', color: 'rgba(255,255,255,0.3)',
            }}>
              {secondary.length} project{secondary.length !== 1 ? 's' : ''}
            </span>
          </Motion.div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}>
          {secondary.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <Link
            to="/projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              fontSize: '14px', fontWeight: 500,
              color: 'rgba(255,255,255,0.6)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '11px 24px', borderRadius: '10px',
              textDecoration: 'none', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fafafa'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}