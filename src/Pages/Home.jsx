// ============================================================
// HOME PAGE — src/Pages/Home.jsx
// Assembles all homepage sections in order.
// ============================================================

import Hero       from '../Sections/Hero';
import Projects   from '../Sections/Projects';
import HowIBuild  from '../Sections/HowIBuild';
import Contact    from '../Sections/Contact';
import Experience from '../Sections/Experience';
import Skills from '../Sections/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <HowIBuild />
      <Skills />
      <Experience />
      <Contact />
      
    </main>
  );
}
