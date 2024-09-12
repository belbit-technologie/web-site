// src/components/Footer.js
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                
                <div className="flex flex-col items-center lg:items-start">
                    <Link to="/" className="text-2xl font-bold flex items-center space-x-2 mb-4">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                        <span>BelBit</span>
                    </Link>
                    <p className="text-gray-400 text-center lg:text-left">Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <Link to="/" className="text-gray-400 hover:text-blue-400 mb-1">Home</Link>
                        <Link to="/about" className="text-gray-400 hover:text-blue-400 mb-1">About</Link>
                        <Link to="/services" className="text-gray-400 hover:text-blue-400 mb-1">Services</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="text-gray-400 mb-1">123 Main St, Suite 100</p>
                        <p className="text-gray-400 mb-1">City, State, 12345</p>
                        <p className="text-gray-400 mb-1">Email: info@example.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 justify-center lg:justify-start">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                        <FaLinkedinIn className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 mt-8">
                <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
