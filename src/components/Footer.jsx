import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-black/30">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="flex flex-col items-center gap-6 mb-8">
                    {/* Logo and Branding */}
                    <div className="flex items-center gap-3">
                        <img src="/KKF/logo_1.png" alt="KKF Pulse Logo" className="h-12 w-12 rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                                KKF Pulse
                            </span>
                            <span className="text-sm text-gray-400 font-medium">by Klinkara Foundation</span>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-300 text-center max-w-md flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        Saving lives, one donation at a time
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm border-t border-white/5 pt-6">
                    <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-gray-300">Klinkara Foundation</span>. All rights reserved.</p>
                    <p className="mt-2 text-xs">A non-profit initiative to revolutionize blood donation</p>
                </div>
            </div>
        </footer>
    );
}
