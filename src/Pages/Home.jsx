import React from 'react';
import Navbar from '../Components/Navbar';
import ThemeToggle from '../Components/ThemeToggle';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Services from '../Sections/Services'; // Now Skills
import Projects from '../Sections/Projects';
import BuilderMindset from '../Sections/BuilderMindset';
import Experience from '../Sections/Experience';
import Contact from '../Sections/Contact';

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* Featured early impact */}
      <Services /> {/* Skills */}
      <BuilderMindset />
      <Experience />
      <Contact />
      <ThemeToggle />
    </div>
  );
}

export default Home;
