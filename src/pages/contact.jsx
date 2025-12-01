import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'; // Keep useNavigate as it's used in CTA

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Keep navigate as it's used in CTA

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    // scrollToTop is removed as it was only used by the local Navbar which is now a component.
    // The CTA section's scroll logic needs to be updated if it was relying on this.
    // For now, assuming the Navbar component handles its own scroll-to-top if needed.
    // The CTA section's scrollIntoView will work without a separate scrollToTop function.

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white overflow-hidden">
            <Helmet>
                <title>Contact Us - KKF Pulse</title>
                <meta name="description" content="Get in touch with Klin Kaara Foundation. We are here to help you with any queries regarding blood donation and our platform." />
            </Helmet>
            <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes PULSE-glow {
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
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        .PULSE-glow {
          animation: PULSE-glow 2s ease-in-out infinite;
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
        
        .slide-in {
          animation: slideIn 0.6s ease forwards;
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

        .success-message {
          animation: slideIn 0.5s ease forwards;
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

                <div className="max-w-7xl mx-auto text-center z-10 px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 fade-in-up">
                        Get in <span className="gradient-text animate-gradient">Touch</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Contact Klin Kaara Foundation
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
                        Have questions or need support? We're here to help you 24/7. Reach out to us and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-10 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                        {[
                            {
                                icon: Phone,
                                title: 'Call Us',
                                info: '+91 9354676869',
                                subInfo: 'Mon-Sun 9AM-9PM',
                                color: 'text-red-500'
                            },
                            {
                                icon: Mail,
                                title: 'Email Us',
                                info: 'kkfpulse@gmail.com',
                                subInfo: 'We reply within 24 hours',
                                color: 'text-orange-500'
                            },
                            {
                                icon: MapPin,
                                title: 'Visit Us',
                                info: '11, Vekanuru, Avanigadda, Krishna District, Andhra Pradesh - 521121, India',
                                subInfo: 'India',
                                color: 'text-green-500'
                            }
                        ].map((contact, idx) => (
                            <div key={idx} className="fade-in-section glass p-8 rounded-3xl text-center hover:bg-white/10 transition-all transform hover:scale-105">
                                <contact.icon className={`w-12 h-12 ${contact.color} mx-auto mb-4`} />
                                <h3 className="text-2xl font-bold mb-3">{contact.title}</h3>
                                <p className="text-gray-300 text-lg mb-1">{contact.info}</p>
                                <p className="text-gray-400 text-sm">{contact.subInfo}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Form */}
                        <div className="fade-in-section">
                            <h2 className="text-4xl font-bold mb-6">
                                Send us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-gray-300 mb-8">
                                Fill out the form below and our team will get back to you shortly.
                            </p>

                            {submitted && (
                                <div className="success-message glass p-4 rounded-2xl mb-6 border-2 border-green-500/50">
                                    <div className="flex items-center gap-3">
                                        <MessageCircle className="w-6 h-6 text-green-500" />
                                        <p className="text-green-400 font-semibold">Thank you! Your message has been sent successfully.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 PULSE-glow"
                                >
                                    <Send className="w-5 h-5" /> Send Message
                                </button>
                            </form>
                        </div>

                        {/* FAQ / Info */}
                        <div className="fade-in-section space-y-6">
                            <h2 className="text-4xl font-bold mb-8">
                                Quick <span className="gradient-text">Help</span>
                            </h2>

                            <div className="glass p-6 rounded-3xl hover:bg-white/10 transition-all">
                                <Clock className="w-10 h-10 text-red-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Support Hours</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Our support team is available 24/7 to assist you with any queries or concerns. We typically respond within 2-4 hours during business hours.
                                </p>
                            </div>

                            <div className="glass p-6 rounded-3xl hover:bg-white/10 transition-all">
                                <MessageCircle className="w-10 h-10 text-orange-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Common Inquiries</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>How do I register as a donor?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400 mt-1">•</span>
                                        <span>How can I search for blood donors?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Is my information secure?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>How do I update my profile?</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass p-6 rounded-3xl hover:bg-white/10 transition-all">
                                <Mail className="w-10 h-10 text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Business Inquiries</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    For partnerships, collaborations, or media inquiries, please reach out to:
                                </p>
                                <a href="mailto:kkfpulse@gmail.com" className="text-green-400 hover:text-green-300 transition-colors font-semibold">
                                    kkfpulse@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="glass p-12 md:p-16 rounded-3xl fade-in-section">
                        <img src="/KKF/Picsart_25-11-14_16-53-13-078.png" alt="KKF PULSE" className="w-28 h-28 mx-auto mb-6 float rounded-full" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Download <span className="gradient-text">KKF PULSE</span>
                        </h2>
                        <p className="text-sm text-gray-400 mb-4">by Klin Kaara Foundation</p>
                        <p className="text-xl text-gray-300 mb-8">
                            Start saving lives today. Join our community of heroes making a difference.
                        </p>
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 PULSE-glow inline-flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" /> Get the App
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
