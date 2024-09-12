// src/components/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 transition-transform transform-gpu ease-in-out duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-extrabold text-gray-800 flex items-center space-x-2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    <Link to="/" className="text-2xl">BelBit</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navbar Links */}
                <div className={`lg:flex flex-grow items-center justify-center space-x-8 transition-transform transform-gpu ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}>
                    <Link to="/" className="text-gray-800 hover:text-blue-600 transition-transform transform-gpu hover:scale-105">Home</Link>
                    <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-transform transform-gpu hover:scale-105">About</Link>
                    <Link to="/services" className="text-gray-800 hover:text-blue-600 transition-transform transform-gpu hover:scale-105">Services</Link>
                    <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-transform transform-gpu hover:scale-105">Contact</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`flex flex-col items-center justify-center h-full space-y-6 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    <Link to="/" className="text-white text-2xl font-semibold" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="text-white text-2xl font-semibold" onClick={toggleMenu}>About</Link>
                    <Link to="/services" className="text-white text-2xl font-semibold" onClick={toggleMenu}>Services</Link>
                    <Link to="/contact" className="text-white text-2xl font-semibold" onClick={toggleMenu}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
