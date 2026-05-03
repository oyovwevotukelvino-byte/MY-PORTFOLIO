import { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false); // Close mobile menu
    };

    return (
<nav className='flex justify-between items-center px-4 md:px-8 py-4 text-white border-b border-white/30 backdrop-blur-md sticky top-0 z-50'>
            <a 
                href="#hero" 
                onClick={(e) => {e.preventDefault(); scrollToSection('hero');}}
                className='font-bold text-xl neon-text cursor-pointer'
            >
                Oyovwevotu Kelvin 
            </a>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-6 font-medium cursor-pointer'>
                <li onClick={() => scrollToSection('hero')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('featured-project')}>Featured</li>
                <li onClick={() => scrollToSection('skills')}>Skills</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('mindset')}>Mindset</li>
                <li onClick={() => scrollToSection('experience')}>Experience</li>
            </ul>

            <div className='hidden md:block'>
                <Button name="Let’s Work" style='glow-hover bg-blue-600/20 text-white border border-blue-500/50 backdrop-blur-sm px-6 py-2 rounded-lg font-semibold hover:glow transition-all' />
            </div>

            {/* Hamburger Icon */}
            <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                {open ? <X size={28}/> : <Menu size={28}/>}
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className='absolute top-16 left-0 w-full bg-black/90 border-t border-white/30 backdrop-blur-md md:hidden p-6 shadow-xl'>
                    <ul className='flex flex-col gap-4 text-lg'>
                        <li onClick={() => scrollToSection('hero')}>Home</li>
                        <li onClick={() => scrollToSection('about')}>About</li>
                        <li onClick={() => scrollToSection('featured-project')}>Featured</li>
                        <li onClick={() => scrollToSection('skills')}>Skills</li>
                        <li onClick={() => scrollToSection('projects')}>Projects</li>
                        <li onClick={() => scrollToSection('mindset')}>Mindset</li>
                        <li onClick={() => scrollToSection('experience')}>Experience</li>
                    </ul>

                    <div className='mt-6'>
                        <Button name="Let’s Work" style='glow-hover bg-blue-600/20 text-white border border-blue-500/50 backdrop-blur-sm px-6 py-3 w-full rounded-lg font-semibold hover:glow transition-all' />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
