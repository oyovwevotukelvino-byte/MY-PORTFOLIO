import React from 'react';

export default function Section({
  id,
  children,
  className = '',
  paddingClassName = 'py-16 md:py-24',
}) {
  return (
    <section id={id} className={`w-full ${paddingClassName} px-4 md:px-6 ${className}`.trim()}>
      {children}
    </section>
  );
}

