import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

/**
 * ThemeToggle
 * Floating button to toggle between dark/light modes
 * Shows current mode icon (🌙/☀️)
 */
function ThemeToggle() {
  const { isDark, toggleTheme, colors } = useTheme();

  const buttonStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: `1px solid ${colors.primaryBorder}`,
    background: colors.primaryBg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    color: colors.primary,
    cursor: 'pointer',
    boxShadow: colors.glow,
    transition: 'all 0.3s ease',
  };

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;
