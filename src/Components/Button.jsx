import React from 'react';
import { motion as Motion } from 'framer-motion';

function Button({ name, style, children, onClick, className = '' }) {
  return (
    <Motion.button
      className={`${style} ${className} font-semibold transition-all duration-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children || name}
    </Motion.button>
  );
}

export default Button;
