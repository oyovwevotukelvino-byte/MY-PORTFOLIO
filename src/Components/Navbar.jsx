// ============================================================
// NAVBAR — Final Production
// Mobile-first. All issues resolved.
//
// BEFORE → AFTER audit:
// ❌ display:none on hamburger via inline style + CSS class
//    → ✅ isMobile state from matchMedia — no CSS fights
// ❌ Drawer: opacity-only fade, no motion
//    → ✅ AnimatePresence + slide-down + staggered links
// ❌ No tap-outside to close
//    → ✅ Backdrop div with onClick
// ❌ No Escape key close
//    → ✅ keydown listener when menu open
// ❌ hamburger < 44px tap target
//    → ✅ 44×44px button
// ❌ Active link in drawer: no visual indicator
//    → ✅ left border accent + background tint
// ❌ Resume button text overflows on 320px
//    → ✅ text hidden on xs, only icon shows below 360px
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation, Link }        from 'react-router-dom';
import { motion, AnimatePresence }           from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',     to: '/'         },
  { label: 'Projects', to: '/projects' },
  { label: 'Writing',  to: '/writing'  },
  { label: 'About',    to: '/about'    },
  { label: 'Contact',  to: '/contact'  },
];

/* Animated hamburger lines */
function HamburgerIcon({ open }) {
  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '18px' }}
    >
      {[
        { open: { rotate: 45,  y: 7  }, closed: { rotate: 0, y: 0 } },
        { open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } },
        { open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } },
      ].map((variants, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{ duration: 0.2 }}
          style={{
            display: 'block',
            height: '1.5px',
            background: 'currentColor',
            borderRadius: '1px',
            transformOrigin: 'center',
          }}
        />
      ))}
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  /* ── Viewport detection ── */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /* ── Close on route change ── */
  useEffect(() => { setMenuOpen(false); }, [location]);

  /* ── Escape key ── */
  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [menuOpen]);

  /* ── Scroll shadow ── */
  const onScroll = useCallback(() => setScrolled(window.scrollY > 12), []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = (menuOpen && isMobile) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, isMobile]);

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: scrolled ? 'rgba(9,9,11,0.94)' : 'rgba(9,9,11,0.78)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
    >
      {/* ══ Bar ══ */}
      <div
        className="container"
        style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--nav-height)',
          gap: '10px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="Go to homepage"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800, fontSize: '16px',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center',
            flexShrink: 0,
            /* 44px touch target */
            padding: '10px 0',
          }}
        >
          OK<span style={{ color: 'var(--accent)', fontSize: '20px', lineHeight: 1 }}>.</span>
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-body)',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                  padding: '6px 13px',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'var(--transition-fast)',
                  whiteSpace: 'nowrap',
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Right: Resume + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '12px', padding: '8px 12px', minHeight: '38px' }}
            aria-label="Open resume PDF"
          >
            {/* Hide text on very narrow screens, show from 360px */}
            <span className="resume-text">Resume</span>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {isMobile && (
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
              style={{
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: menuOpen ? 'rgba(255,255,255,0.07)' : 'transparent',
                border: `1px solid ${menuOpen ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                flexShrink: 0,
                touchAction: 'manipulation',
              }}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          )}
        </div>
      </div>

      {/* ══ Mobile drawer ══ */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
              style={{
                position: 'fixed', inset: 0,
                top: 'var(--nav-height)',
                background: 'rgba(0,0,0,0.55)',
                zIndex: 198,
              }}
            />

            {/* Panel */}
            <motion.nav
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top: 'var(--nav-height)',
                left: 0, right: 0,
                background: 'rgba(9,9,11,0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: '12px 1rem 20px',
                zIndex: 199,
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.18 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 5vw, 22px)',
                      fontWeight: 700,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      /* 52px tap target */
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                      borderLeft: isActive
                        ? '3px solid var(--accent)'
                        : '3px solid transparent',
                      transition: 'var(--transition-fast)',
                    })}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <div style={{ marginTop: '12px', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '14px', minHeight: '50px' }}
                >
                  Download Resume ↗
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* Hide "Resume" text on very small screens — just show arrow icon */
        .resume-text { display: inline; }
        @media (max-width: 359px) { .resume-text { display: none; } }
      `}</style>
    </header>
  );
}
