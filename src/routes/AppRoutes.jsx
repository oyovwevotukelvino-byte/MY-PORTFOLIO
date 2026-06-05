// ============================================================
// APP ROUTES — src/routes/AppRoutes.jsx
// Central routing config for the entire app.
// All pages are lazy-loaded for performance.
// ============================================================

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
      marginTop: '24px',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '15px',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          OK<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span style={{
          fontSize: '12px',
          color: 'var(--text-tertiary)',
          fontFamily: 'var(--font-mono)',
        }}>
          Built by Oyovwevotu Kelvin · {new Date().getFullYear()}
        </span>
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
