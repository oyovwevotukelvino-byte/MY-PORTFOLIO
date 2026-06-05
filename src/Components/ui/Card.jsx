import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm ${className}`.trim()}
    >
      {children}
    </div>
  );
}

