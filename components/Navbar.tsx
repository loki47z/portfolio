'use client';

import Link from "next/link"
import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    
    const links = [
        {name: "About", href: '/about'},
        {name: "Academics", href: '/academics'},
        {name: "Contact", href: '/contact'},
        {name: 'Hobbies', href: '/hobbies'},
        {name: "Project", href: '/projects'},
        {name: 'Skills', href: '/skills'},
    ]
    
    return(
       <header className="sticky top-0 z-50 bg-white shadow-lg">
         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href={'/'} className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">Thom&apos;s Portfolio </Link>
            
            {/* Desktop Menu */}
            <div className="space-x-4 hidden md:flex">
                {links.map((link)=>(
                    <Link
                        key={link.href}
                        href={link.href}
                        className='text-gray-600 hover:text-blue-600 transition duration-300 font-medium'>{link.name}</Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col space-y-1"
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
         </nav>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="md:hidden bg-gray-50 border-t">
                <div className="px-4 py-3 space-y-2">
                    {links.map((link)=>(
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className='block text-gray-600 hover:text-blue-600 transition duration-300 font-medium py-2'>{link.name}</Link>
                    ))}
                </div>
            </div>
         )}
       </header>
    )
}