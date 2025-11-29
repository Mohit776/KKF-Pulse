import React, { useEffect } from 'react';
import { Search, Bell, MapPin, Users, Clock, Shield, Zap, Phone, Mail, CheckCircle, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
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
        
        .slide-in-left {
          animation: slideInLeft 0.8s ease forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s ease forwards;
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

        .image-placeholder {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
          border: 2px dashed rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 600;
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="float mb-8 md:hidden">
              <img src="/KKF/Picsart_25-11-14_16-53-13-078.png" alt="KKF Pulse Logo" className="w-32 h-32 mx-auto rounded-full" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in-left">
              Save Lives.<br />
              <span className="gradient-text animate-gradient">Donate Blood.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-4 slide-in-right" style={{ animationDelay: '0.2s' }}>
              Connect donors with those in need instantly. Find blood donors in your area with <span className="font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">KKF Pulse</span> by <span className="font-semibold text-gray-200">Klinkara Foundation</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button onClick={() => scrollToSection('download')} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 pulse-glow flex items-center justify-center gap-2">
                <Download className="w-5 h-5" /> Download Now
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="glass hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-bold text-red-500 mb-1">50K+</div>
                <div className="text-gray-400 text-sm">Active Donors</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-bold text-orange-500 mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Lives Saved</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-bold text-green-500 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Available</div>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="hidden md:block fade-in-up" style={{ animationDelay: '0.3s' }}>
            <img
              src="/kkf1.png"
              alt="KKF Pulse App Mockup"
              className="rounded-3xl h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover shadow-2xl border-4 border-gray-900/50"
            />
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section id="why-us" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in-section">
            Why <span className="gradient-text">KKF Pulse?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Image Placeholder */}
            <div className="fade-in-section order-2 md:order-1">
              <img 
                src='/KKF2.png' 
                alt="KKF Features"
                className="rounded-3xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover shadow-xl" 
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2 fade-in-section">
              <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                <Zap className="w-10 h-10 text-orange-500 mb-3" />
                <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Find blood donors in your area within seconds. Our advanced matching algorithm connects you instantly.</p>
              </div>

              <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                <MapPin className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-2xl font-bold mb-3">Location Based</h3>
                <p className="text-gray-300">Real-time location tracking ensures you find the nearest available donors. Every second counts.</p>
              </div>

              <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                <Shield className="w-10 h-10 text-green-500 mb-3" />
                <h3 className="text-2xl font-bold mb-3">Verified & Safe</h3>
                <p className="text-gray-300">All donors are verified with proper documentation. Your safety and trust are our top priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 fade-in-section">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto fade-in-section">
            Getting started with KKF Pulse is simple. Follow these easy steps to save lives.
          </p>

          {/* Image Placeholder for How It Works Diagram/Photo */}
          <div className="fade-in-section">
            <img 
              src="/kkf3.png" 
              alt="How it works"
              className="rounded-3xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full max-w-7xl mx-auto object-cover shadow-xl" 
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in-section">
            Powerful <span className="gradient-text">Features</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 fade-in-section">
              {[
                { icon: Search, title: 'Smart Search', color: 'text-red-500' },
                { icon: Users, title: 'Community', color: 'text-orange-500' },
                { icon: Bell, title: 'Instant Alerts', color: 'text-green-500' },
                { icon: Phone, title: 'Direct Call', color: 'text-blue-500' },
                { icon: Mail, title: 'Notifications', color: 'text-red-500' },
                { icon: CheckCircle, title: 'Verification', color: 'text-green-500' }
              ].map((feature, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                  <feature.icon className={`w-10 h-10 ${feature.color} mb-3`} />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
              ))}
            </div>

            {/* Image Placeholder */}
            <div className="fade-in-section">
              <img 
                src='/kkf4.png' 
                alt="App Features"
                className="rounded-3xl h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full object-cover shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="glass p-12 md:p-16 rounded-3xl fade-in-section">
            <div className="text-center mb-12">
              <img src="/KKF/Picsart_25-11-14_16-53-13-078.png" alt="KKF Pulse" className="w-28 h-28 mx-auto mb-6 float rounded-full" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Download <span className="gradient-text">KKF Pulse</span>
              </h2>
              <p className="text-sm text-gray-400 mb-4">by Klinkara Foundation</p>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of heroes saving lives every day with Klinkara Foundation's revolutionary blood donation platform.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              {/* Google Play Button */}
              <a href="https://play.google.com/store/apps/details?id=com.lakshmi_it.kkfpulse" className="group bg-black hover:bg-gray-900 px-8 py-4 rounded-2xl transition-all transform hover:scale-105 flex items-center gap-4 min-w-[240px]">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D7FF" />
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00" />
                  <path d="M3.84 2.15L6.05 2.66L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#00D863" />
                  <path d="M16.81 8.88L14.54 11.15L6.05 2.66L16.81 8.88Z" fill="#FF2E5A" />
                  <path d="M20.16 11.37C20.72 11.71 20.72 12.29 20.16 12.63L17.89 13.96L15.45 11.52L17.89 9.08L20.16 11.37Z" fill="#00D863" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </a>

              {/* App Store Button */}
              <a href="#" className="group bg-black hover:bg-gray-900 px-8 py-4 rounded-2xl transition-all transform hover:scale-105 flex items-center gap-4 min-w-[240px]">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">✓ 100% Free</span>
              <span className="flex items-center gap-2">✓ Secure & Private</span>
              <span className="flex items-center gap-2">✓ Easy to Use</span>
              <span className="flex items-center gap-2">✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}