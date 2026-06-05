import React from 'react';

export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-white/20 bg-white/5 text-slate-200 ${className}`.trim()}
    >
      {children}
    </span>
  );
}

