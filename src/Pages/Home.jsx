import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import Accordion from '../Sections/Accordion';
import Counter from '../Sections/Counter';





 
function Home() {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Accordion/>
      <Counter/>
    </div>
  )
}

export default Home