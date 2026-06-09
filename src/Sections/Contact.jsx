// ============================================================
// CONTACT.JSX — v2.0 Merged
//
// Base: your original Contact.jsx (ThemeProvider + contactConfig driven)
// Added: contact form panel with name/email/message + send state
//
// Dependencies (already in your project):
//   framer-motion, lucide-react, ../theme/ThemeProvider, ../data/contact
// ============================================================

import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, MapPin, Check, Send, ArrowRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import { contactConfig } from '../data/contact';

/* ── Icon map — extend as needed ───────────────────────────── */




/* ── Style factory (same as your original) ─────────────────── */
const getContactStyles = (colors) => ({
  section: {
    /* Force contact section to pure black */
    background: '#000000',
  },
  primaryCard: {
    border: `${colors.accentColor}80`,
    background: `${colors.accentColor}0D`,
  },
  card: {
    border: `${colors.cardBorder}`,
    background: `${colors.bg}50`,
    hoverBorder: `${colors.accentColor}80`,
    hoverBg: `${colors.accentColor}0D`,
  },
  border: colors.cardBorder,
});

/* ── Shared input style ─────────────────────────────────────── */
const baseInputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  color: '#fafafa',
  fontFamily: 'inherit',
  fontSize: '14px',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
  lineHeight: 1.5,
};

/* ── Contact Form sub-component ─────────────────────────────── */
function ContactForm({ accentEmerald }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formIsActive = true;

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.message) return;

  setStatus('sending');
  try {
    const res = await fetch('https://formspree.io/f/meewzqeq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? 'sent' : 'error');
  } catch {
    setStatus('error');
  }
};


  const accentFocus = accentEmerald || '#10b981';
  const focusOn  = (e) => {
    e.target.style.borderColor = `${accentFocus}60`;
    e.target.style.boxShadow   = `0 0 0 3px ${accentFocus}18`;
  };
  const focusOff = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.boxShadow   = 'none';
  };

  /* ── Sent state ── */
  if (status === 'sent') {
    return (
      <Motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '48px 24px', textAlign: 'center', gap: '16px',
        }}
      >
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: `${accentFocus}18`,
          border: `1px solid ${accentFocus}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Check size={24} color={accentFocus} strokeWidth={2.5} />
        </div>
        <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fafafa', margin: 0 }}>
          Message sent!
        </h4>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.65 }}>
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setForm({ name:'', email:'', message:'' }); setStatus('idle'); }}
          style={{
            marginTop: '8px', background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.5)', fontSize: '13px',
            padding: '7px 18px', borderRadius: '8px', cursor: 'pointer',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fafafa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
        >
          Send another
        </button>
      </Motion.div>
    );
  }

  /* ── Error state ── */
  if (status === 'error') {
    return (
      <div style={{ padding: '32px 24px', textAlign: 'center' }}>
        <p style={{ color: '#f87171', marginBottom: '12px', fontSize: '14px' }}>
          Contact form not yet active. Please use WhatsApp or Email above.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.6)', fontSize: '13px',
            padding: '7px 16px', borderRadius: '8px', cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  if (status === 'inactive') {
    return (
      <div style={{ padding: '32px 24px', textAlign: 'center' }}>
        
        <button
          onClick={() => setStatus('idle')}
          style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.8)', fontSize: '13px',
            padding: '7px 16px', borderRadius: '8px', cursor: 'pointer',
          }}
        >
          Back to form
        </button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} noValidate style={{ padding: '28px 28px 32px' }}>
      <h3 style={{
        fontSize: '17px', fontWeight: 700, color: '#fafafa',
        marginBottom: '12px', letterSpacing: '-0.02em',
      }}>
        Send a message
      </h3>
      
      {/* Name */}
      <div style={{ marginBottom: '14px' }}>
        <label
          htmlFor="cf-name"
          style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace' }}
        >
          Name
        </label>
        <input
          id="cf-name" name="name" type="text"
          placeholder="Your name"
          value={form.name} onChange={handleChange}
          required autoComplete="name"
          disabled={!formIsActive}
          style={{ ...baseInputStyle, opacity: formIsActive ? 1 : 0.55, cursor: formIsActive ? 'text' : 'not-allowed' }}
          onFocus={focusOn} onBlur={focusOff}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: '14px', }}>
        <label
          htmlFor="cf-email"
          style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace' }}
        >
          Email
        </label>
        <input
          id="cf-email" name="email" type="email"
          placeholder="you@example.com"
          value={form.email} onChange={handleChange}
          required autoComplete="email"
          disabled={!formIsActive}
          style={{ ...baseInputStyle, opacity: formIsActive ? 1 : 0.55, cursor: formIsActive ? 'text' : 'not-allowed' }}
          onFocus={focusOn} onBlur={focusOff}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: '22px' }}>
        <label
          htmlFor="cf-message"
          style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace' }}
        >
          Message
        </label>
        <textarea
          id="cf-message" name="message"
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          value={form.message} onChange={handleChange}
          required
          disabled={!formIsActive}
          style={{ ...baseInputStyle, resize: 'vertical', minHeight: '118px', opacity: formIsActive ? 1 : 0.55, cursor: formIsActive ? 'text' : 'not-allowed' }}
          onFocus={focusOn} onBlur={focusOff}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!formIsActive || status === 'sending'}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          background: !formIsActive
            ? 'rgba(255,255,255,0.08)'
            : status === 'sending'
              ? 'rgba(16,185,129,0.5)'
              : `linear-gradient(135deg, ${accentFocus}, ${accentFocus}cc)`,
          border: 'none',
          color: '#fff', fontSize: '14px', fontWeight: 600,
          padding: '12px 20px', borderRadius: '10px',
          cursor: !formIsActive || status === 'sending' ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={e => { if (formIsActive && status !== 'sending') e.currentTarget.style.opacity = '0.88'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
      >
        {!formIsActive
          ? <><Send size={15} /> Message form disabled</>
          : status === 'sending'
          ? <>Sending<span style={{ animation: 'cfDots 1.2s infinite' }}>…</span></>
          : <><Send size={15} /> Send Message</>
        }
      </button>
      <style>{`
        @keyframes cfDots {
          0%,100%{opacity:1} 50%{opacity:0.3}
        }
      `}</style>
    </form>
  );
}

/* ── Main Component ─────────────────────────────────────────── */
function Contact({ config = contactConfig }) {
  const { colors } = useTheme();
  const styles = getContactStyles(colors);
  const {  contacts, location } = config;
  
 
  const openLink = (url) => window.open(url, '_blank');

  return (
    <section
      id="contact"
      className="section"
      style={styles.section}
    >
      <div
  className="container"
  style={{
    maxWidth: '740px',
  }}
>

        {/* ── Hero intro ── */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="section-label">
  Contact
</div>

<h1
  style={{
    fontSize: 'clamp(32px,5vw,56px)',
    lineHeight: 1.1,
    marginBottom: '24px',
    
    
  }}
>
  Let's Build Something Meaningful
</h1>

<p
  style={{
    fontSize: '16px',
    lineHeight: 1.8,
    color: 'var(--text-secondary)',
    maxWidth: '640px',
    margin: '0 auto 80px',
    
  }}
>
  Whether you're building a startup, launching a product,
  exploring partnerships, or simply want to connect,
  I'd love to hear from you.
</p>
        </Motion.div>

        {/* ── Contact cards (your original grid) ── */}
       <div
  style={{
    background: 'var(--bg-card)',
    border: `1px solid var(--border)`,
    borderRadius: '20px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '64px', 
    maxWidth:'740px',
    marginInline:'auto',
    
    
  }}
>
          {contacts.map((contact, index) => {
            const Icon = contact.icon ?? null;
            return (
              
              <Motion.div
  key={contact.id}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -4 }}
  onClick={() => openLink(contact.link)}
  style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  }}
>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-2xl glow flex-shrink-0 ${
                    contact.primary
                      ? 'bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/40'
                      : 'bg-white/10 border border-white/30'
                  }`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      contact.primary ? 'text-emerald-400 neon-text' : 'text-white group-hover:text-emerald-400 transition-colors'
                    }`}>
                      {contact.title}
                    </h3>
                    <p className={`text-lg truncate ${
                      contact.primary ? 'text-emerald-300' : 'text-gray-400 group-hover:text-gray-300 transition-colors'
                    }`}>
                      {contact.desc}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 mt-auto ${
                  contact.primary ? 'text-emerald-400 font-semibold' : 'text-sm text-gray-500'
                }`}>
                  <span>Click to connect</span>
                  <ArrowRight className={`w-5 h-5 ${contact.primary ? 'ml-auto' : ''} group-hover:translate-x-1 transition-transform`} />
                </div>
              </Motion.div>
            );
          })}
        </div>
       

        {/* ── Contact Form ── */}
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${colors.accentColor}50`}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
          >
            {/* Card header strip */}
            <div style={{
              padding: '16px 28px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
                background: `${colors.accentColor}18`,
                border: `1px solid ${colors.accentColor}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Mail size={16} color={colors.accentColor} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fafafa', lineHeight: 1.2 }}>
                  Or send a direct message
                </div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.38)', marginTop: '1px' }}>
                  I read every message and reply within 24 hours
                </div>
              </div>
            </div>

            {/* The form itself */}
            <ContactForm accentEmerald={colors.accentColor} />
            
            
          </div>
          <div
  style={{
    textAlign: 'center',
    marginBottom: '64px',
  }}
>
  <p
    style={{
      color: 'var(--text-secondary)',
      lineHeight: 1.8,
    }}
  >
    Open to collaborations, freelance projects,
    startup partnerships, and ambitious ideas.
  </p>
</div>
        </Motion.div>

        {/* ── Location + copyright (your original) ── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-white/10 pt-16"
        >
          <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '16px',
  }}
>
  <MapPin className="w-5 h-5 text-gray-400" />
  <span className="text-gray-400">{location}</span>
</div>
        </Motion.div>

      </div>
    </section>
  );
}

export default Contact;
