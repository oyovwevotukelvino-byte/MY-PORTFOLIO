/**
 * Theme Tokens
 * Design system tokens for dark mode (current) and light mode
 */

export const darkTheme = {
  mode: 'dark',
  colors: {
    // Backgrounds
    bg: '#000510',
    bgSecondary: '#000c2e',
    bgTertiary: '#001a6e',
    bgQuaternary: '#0044aa',
    bgGlass: 'rgba(0, 229, 255, 0.12)',
    
    // Text
    textPrimary: '#ffffff',
    textSecondary: '#cbd5e1', // slate-300
    textMuted: '#64748b', // slate-500
    
    // Primary
    primary: '#00e5ff',
    primaryGlow: 'rgba(0, 229, 255, 0.8)',
    primaryBg: 'rgba(0, 229, 255, 0.12)',
    primaryBorder: 'rgba(0, 229, 255, 0.5)',
    
    // Accents
    accent: '#22d3ee', // cyan-400
    accentPurple: '#a78bfa', // violet-400
    accentGreen: '#4ade80', // green-400
    accentYellow: '#facc15',
    accentOrange: '#fb923c',
    accentRed: '#f87171',
    accentEmerald: '#34d399',
    
    // Cards/Glass
    card: 'rgba(0, 0, 0, 0.2)',
    cardBorder: 'rgba(255, 255, 255, 0.2)',
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.2)',
    
    // Gradients
    gradientPrimary: 'linear-gradient(180deg, #000510 0%, #000c2e 35%, #001a6e 58%, #0044aa 65%, #001a6e 70%, #000c2e 100%)',
    gradientText: 'linear-gradient(to right, #22d3ee, #a78bfa, #4ade80)',
    gradientButton: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    
    // Glow effects
    glow: '0 0 20px rgba(59, 130, 246, 0.5)',
    glowStrong: '0 0 30px rgba(59, 130, 246, 0.8)',
    glowText: '0 0 10px rgba(59, 130, 246, 0.7)',
    
    // Star effects
    star: '#ffffff',
    
    // Grid
    gridLine: 'rgba(0, 200, 255, 0.7)',
    gridLineAlt: 'rgba(120, 80, 255, 0.5)',
  },
  fonts: {
  heading: "'Poppins', sans-serif",   // 👈 cleaner, less techy
  body: "'Poppins', sans-serif",   
  hero: "'Orbitron', sans-serif",     // 👈 keep this ONLY for Hero
},
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
};

export const lightTheme = {
  mode: 'light',
  colors: {
    // Backgrounds
    bg: '#f8fafc', // slate-50
    bgSecondary: '#f1f5f9', // slate-100
    bgTertiary: '#e2e8f0', // slate-200
    bgQuaternary: '#cbd5e1', // slate-300
    bgGlass: 'rgba(15, 23, 42, 0.08)',
    
    // Text
    textPrimary: '#0f172a', // slate-900
    textSecondary: '#334155', // slate-700
    textMuted: '#64748b', // slate-500
    
    // Primary
    primary: '#0891b2', // cyan-600
    primaryGlow: 'rgba(8, 145, 178, 0.9)',
    primaryBg: 'rgba(8, 145, 178, 0.1)',
    primaryBorder: 'rgba(8, 145, 178, 0.4)',
    
    // Accents
    accent: '#0891b2', // cyan-600
    accentPurple: '#7c3aed', // violet-600
    accentGreen: '#16a34a', // green-600
    accentYellow: '#ca8a04', // yellow-600
    accentOrange: '#ea580c', // orange-600
    accentRed: '#dc2626', // red-600
    accentEmerald: '#059669', // emerald-600
    
    // Cards/Glass
    card: 'rgba(255, 255, 255, 0.8)',
    cardBorder: 'rgba(203, 213, 225, 0.5)',
    glass: 'rgba(255, 255, 255, 0.7)',
    glassBorder: 'rgba(203, 213, 225, 0.3)',
    
    // Gradients
    gradientPrimary: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
    gradientText: 'linear-gradient(to right, #0891b2, #7c3aed, #16a34a)',
    gradientButton: 'linear-gradient(to right, #0891b2, #7c3aed)',
    
    // Glow effects
    glow: '0 0 15px rgba(8, 145, 178, 0.3)',
    glowStrong: '0 0 25px rgba(8, 145, 178, 0.5)',
    glowText: '0 0 8px rgba(8, 145, 178, 0.5)',
    
    // Star effects
    star: '#94a3b8',
    
    // Grid
    gridLine: 'rgba(8, 145, 178, 0.5)',
    gridLineAlt: 'rgba(124, 58, 237, 0.4)',
  },
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Rajdhani', sans-serif",
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
};

// Theme tokens mapped for easy access
export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

// Semantic aliases for cleaner code
export const getThemeTokens = (mode) => {
  const theme = themes[mode] || themes.dark;
  return {
    t: theme,
    colors: theme.colors,
    fonts: theme.fonts,
    radius: theme.borderRadius,
    space: theme.spacing,
  };
};
