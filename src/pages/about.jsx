import React, { useEffect } from 'react';
import { Heart, Users, Target, Award, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.75;
                if (isVisible) {
                    section.classList.add('is-visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white overflow-hidden">
            <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ef4444, #f97316, #22c55e, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden pt-32">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
                        About <span className="gradient-text animate-gradient">KKF Pulse</span>
                    </h1>
                    <p className="text-sm text-gray-400 mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
                        A Klinkara Foundation Initiative
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Connecting lives through the power of blood donation. We're on a mission to make blood donation accessible, efficient, and impactful.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="fade-in-section">
                            <div className="glass p-8 rounded-3xl">
                                <Target className="w-16 h-16 text-red-500 mb-4" />
                                <h2 className="text-4xl font-bold mb-6">
                                    Our <span className="gradient-text">Mission</span>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    At KKF Pulse, a proud initiative of <span className="font-semibold text-gray-100">Klinkara Foundation</span>, we believe that saving lives should be simple and accessible. Our mission is to bridge the gap between blood donors and those in need through innovative technology.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    We're committed to creating a world where no one loses their life due to lack of blood availability. Every donation matters, and every donor is a hero.
                                </p>
                            </div>
                        </div>

                        <div className="fade-in-section">
                            <div className="glass p-8 rounded-3xl">
                                <Heart className="w-16 h-16 text-orange-500 mb-4" />
                                <h2 className="text-4xl font-bold mb-6">
                                    Our <span className="gradient-text">Vision</span>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    We envision a future where blood donation is seamlessly integrated into communities worldwide, powered by technology that connects donors instantly.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Through KKF Pulse, we're building a sustainable ecosystem where altruism meets innovation, ensuring that life-saving blood is always just a tap away.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in-section">
                        Our <span className="gradient-text">Core Values</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: 'Compassion',
                                description: 'We believe in the power of human kindness and the impact of every single donation.',
                                color: 'text-red-500'
                            },
                            {
                                icon: Users,
                                title: 'Community',
                                description: 'Building a strong network of donors and recipients who support each other.',
                                color: 'text-orange-500'
                            },
                            {
                                icon: Award,
                                title: 'Excellence',
                                description: 'Committed to providing the best experience through innovation and reliability.',
                                color: 'text-green-500'
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="fade-in-section glass p-8 rounded-3xl hover:bg-white/10 transition-all transform hover:scale-105">
                                <value.icon className={`w-12 h-12 ${value.color} mb-4`} />
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in-section">
                        Our <span className="gradient-text">Impact</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { number: '50,000+', label: 'Active Donors', color: 'from-red-600 to-orange-600' },
                            { number: '10,000+', label: 'Lives Saved', color: 'from-orange-600 to-green-600' },
                            { number: '100+', label: 'Cities Covered', color: 'from-green-600 to-blue-600' },
                            { number: '24/7', label: 'Support Available', color: 'from-blue-600 to-red-600' }
                        ].map((stat, idx) => (
                            <div key={idx} className="fade-in-section glass p-8 rounded-3xl text-center hover:bg-white/10 transition-all transform hover:scale-105">
                                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 fade-in-section">
                        Meet <span className="gradient-text">The Team</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto fade-in-section">
                        Passionate individuals dedicated to saving lives through technology and innovation.
                    </p>

                    <div className="glass p-12 rounded-3xl fade-in-section text-center">
                        <Users className="w-20 h-20 text-red-500 mx-auto mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Built with ❤️ by Klinkara Foundation</h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            Our diverse team of developers, healthcare professionals, and community organizers at <span className="font-semibold text-gray-100">Klinkara Foundation</span> work tirelessly to ensure KKF Pulse remains the most reliable blood donation platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="glass p-12 md:p-16 rounded-3xl fade-in-section">
                        <img src="/assets/icon.png" alt="KKF Pulse" className="w-28 h-28 mx-auto mb-6 float rounded-full" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join the <span className="gradient-text">Movement</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Be part of a community that's saving lives every day. Download KKF Pulse and become a hero.
                        </p>
                        <button
                            onClick={() => { /* navigate('/'); setTimeout(() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }), 100); */ }}
                            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 pulse-glow inline-flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" /> Download Now
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
