import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-black/30">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Main Footer Content */}
                <div className="flex flex-col items-start gap-6">
                    {/* Logo and Branding */}
                    <div className="flex items-center gap-3">
                        <img src="/KKF/Picsart_25-11-14_16-53-13-078.png" alt="KKF PULSE Logo" className="h-12 w-12 rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                                KKF PULSE
                            </span>
                            <span className="text-sm text-gray-400 font-medium">by Klin Kaara Foundation</span>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-300 max-w-md flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500 animate-PULSE" />
                        Saving lives, one donation at a time
                        <Heart className="w-4 h-4 text-red-500 animate-PULSE" />
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-400">
                            <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                            <span>11, Vekanuru, Avanigadda, Krishna District, Andhra Pradesh - 521121, India</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <span>+91 9354676869</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>kkfpulse@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm border-t border-white/5 pt-6 mt-8">
                <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-gray-300">Klin Kaara Foundation</span>. All rights reserved.</p>
                <p className="mt-2 text-xs">A non-profit initiative to revolutionize blood donation</p>
                <a href='https://www.linkedin.com/in/mohitaggarwal551/' className="mt-2 text-md text-gray-500 hover:text-gray-300 transition-colors">Made with ❤️ by <span className="text-gray-400 font-semibold">Mohit Aggarwal</span></a>
            </div>
        </footer>
    );
}
