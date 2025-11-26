import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'glass shadow-lg' : ''}`}>
            <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 cursor-pointer group">
                        <img src="/KKF/logo_1.png" alt="KKF Pulse Logo" className="h-16 rounded-l-full transition-transform group-hover:scale-105" />
                        <div className="hidden md:flex flex-col">
                            <span className="text-xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                                KKF Pulse
                            </span>
                            <span className="text-xs text-gray-400 font-medium">by Klinkara Foundation</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="hover:text-red-400 transition-colors font-medium">
                            Home
                        </a>
                        <a href="/why-us" className="hover:text-orange-400 transition-colors font-medium">
                            Why Us
                        </a>
                        <a href="/about" className="hover:text-blue-400 transition-colors font-medium">
                            About
                        </a>
                        <a href="/contact" className="hover:text-purple-400 transition-colors font-medium">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden glass rounded-2xl mt-2 mb-4 p-6 space-y-4">
                        <a href="/" className="block w-full text-left py-2 hover:text-red-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </a>
                        <a href="/why-us" className="block w-full text-left py-2 hover:text-orange-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Why Us
                        </a>
                        <a href="/about" className="block w-full text-left py-2 hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            About
                        </a>
                        <a href="/contact" className="block w-full text-left py-2 hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
