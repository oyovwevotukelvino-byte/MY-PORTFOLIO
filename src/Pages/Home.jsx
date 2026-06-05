// ============================================================
// HOME PAGE — src/Pages/Home.jsx
// Assembles all homepage sections in order.
// ============================================================

import Hero       from '../Sections/Hero';
import Projects   from '../Sections/Projects';
import HowIBuild  from '../Sections/HowIBuild';
import Contact    from '../Sections/Contact';
import Experience from '../Sections/Experience';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <HowIBuild />
      <Experience />
      <Contact />
    </main>
  );
}
