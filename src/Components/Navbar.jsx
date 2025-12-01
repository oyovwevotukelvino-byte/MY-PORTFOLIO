import { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center px-8 py-4 text-white border-b border-white relative'>
            <a href="#" className='font-bold text-xl'>Oyovwevotu </a>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-6 font-medium cursor-pointer'>
                <li>Home</li>
                <li>Services</li>
                <li>Experiences</li>
                <li>Projects</li>
                <li>About</li>
                <li>FAQ's</li>
            </ul>

            <div className='hidden md:block'>
                <Button name='Contact Me' style='bg-gray-100 text-black px-4 py-1' />
            </div>

            {/* Hamburger Icon */}
            <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                {open ? <X size={28}/> : <Menu size={28}/>}
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className='absolute top-16 left-0 w-full bg-black border-t border-white md:hidden p-6'>
                    <ul className='flex flex-col gap-4 text-lg'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experiences</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>FAQ's</li>
                    </ul>

                    <div className='mt-6'>
                        <Button name='Contact Me' style='bg-gray-100 text-black px-4 py-2 w-full'/>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;