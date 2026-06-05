// ============================================================
// DESIGN TOKENS — Portfolio v2.0
// Import this wherever you need raw values.
// In Tailwind v4 you can expose these via CSS variables instead.
// ============================================================

export const colors = {
  // Base
  bg: {
    primary:   '#09090b',   // page background
    secondary: '#111113',   // card / surface
    tertiary:  '#18181b',   // elevated surface
    border:    'rgba(255,255,255,0.07)',
    borderHover:'rgba(255,255,255,0.14)',
  },

  // Brand accent — violet
  accent: {
    DEFAULT: '#7c6af7',
    hover:   '#6a58e0',
    muted:   'rgba(124,106,247,0.12)',
    border:  'rgba(124,106,247,0.25)',
    text:    '#a89bf8',
  },

  // Text hierarchy
  text: {
    primary:   '#fafafa',
    secondary: 'rgba(255,255,255,0.6)',
    tertiary:  'rgba(255,255,255,0.35)',
    disabled:  'rgba(255,255,255,0.2)',
  },

  // Semantic
  success: '#4ade80',
  warning: '#fbbf24',
  error:   '#f87171',
};

export const typography = {
  fontDisplay: "'Syne', sans-serif",
  fontBody:    "'DM Sans', sans-serif",
  fontMono:    "'JetBrains Mono', monospace",

  // Scale (px)
  xs:   '11px',
  sm:   '13px',
  base: '15px',
  md:   '17px',
  lg:   '20px',
  xl:   '26px',
  '2xl':'34px',
  '3xl':'46px',
  '4xl':'60px',

  // Weight
  normal:      400,
  medium:      500,
  semibold:    600,
  bold:        700,
  extrabold:   800,

  // Line height
  tight:  1.1,
  snug:   1.3,
  normal_lh: 1.6,
  relaxed:   1.75,
};

export const spacing = {
  // Use multiples of 4px
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  8:  '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
};

export const radii = {
  sm:   '6px',
  md:   '10px',
  lg:   '14px',
  xl:   '20px',
  full: '9999px',
};

export const breakpoints = {
  sm:  '480px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl':'1440px',
};

export const transitions = {
  fast:   'all 0.15s ease',
  base:   'all 0.2s ease',
  slow:   'all 0.35s ease',
};

// Google Fonts import string — paste into index.html or index.css
export const fontImport =
  "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap";
