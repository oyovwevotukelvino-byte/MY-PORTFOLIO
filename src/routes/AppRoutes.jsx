// ============================================================
// APP ROUTES — src/routes/AppRoutes.jsx
// Central routing config for the entire app.
// All pages are lazy-loaded for performance.
// ============================================================

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Layout
import Navbar from "../Components/Navbar";



// Lazy-loaded pages (code splitting)
const Home     = lazy(() => import('../Pages/Home'));
const Projects = lazy(() => import('../Pages/Projects'));
const Writing  = lazy(() => import('../Pages/Writing'));
const About    = lazy(() => import('../Pages/About'));
const Contact  = lazy(() => import('../Pages/Contact'));

// const CaseStudy = lazy(() => import('../Pages/CaseStudy'));  // uncomment when ready

// Simple full-page loading fallback
function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '28px', height: '28px',
        borderRadius: '50%',
        border: '2px solid rgba(255,255,255,0.08)',
        borderTopColor: 'var(--accent)',
        animation: 'spin 0.7s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// Footer component — lightweight, inline here for simplicity


function Footer() {
  const socials = [
    { icon: 'ti-brand-github',   href: 'https://github.com/oyovwevotukelvino-byte' },
    { icon: 'ti-brand-linkedin', href: 'https://www.linkedin.com/in/oyovwevotukelvin/' },
    { icon: 'ti-brand-whatsapp',        href: 'https://wa.me/2347062140486' },
  ];

  const linkStyle = {
    fontSize: '13.5px', color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none', transition: 'color 0.18s ease',
  };

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '56px 0 32px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: '120px', marginBottom: '56px' }}>

          {/* Brand */}
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fafafa', letterSpacing: '-0.03em', marginBottom: '14px' }}>
              OK<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: 1.8, color: 'rgba(255,255,255,0.38)', maxWidth: '260px', margin: '0 0 24px' }}>
               developer building thoughtful digital products.
              Open to collaborations and ambitious ideas.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)'; e.currentTarget.style.color = '#10b981'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  <i className={`ti ${s.icon}`} style={{ fontSize: '16px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', margin: '0 0 18px' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['/', '/projects', '/writing', '/about', '/contact'].map((path, i) => (
                <Link key={path} to={path} style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = '#fafafa'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {['Home', 'Projects', 'Writing', 'About', 'Contact'][i]}
                </Link>
              ))}
            </div>
          </div>

          
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)', fontFamily: 'monospace' }}>
            © {new Date().getFullYear()} Oyovwevotu Kelvin. All rights reserved.
          </span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace' }}>
            
          </span>
        </div>

      </div>
    </footer>
  );
}
export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"          element={<Home />}     />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/writing"   element={<Writing />}  />
          <Route path="/about"     element={<About />}    />
          <Route path="/contact"   element={<Contact />}  />
          {/* <Route path="/projects/:slug" element={<CaseStudy />} /> */}
        </Routes>
      </Suspense>
      
      <Footer />
    </>
  );
}
