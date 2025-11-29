import React, { useEffect } from 'react';
import { Heart, Zap, Shield, MapPin, Users, Clock, Bell, Award, CheckCircle, ArrowRight, Download, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhyUsPage() {
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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

        .spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center z-10 px-4">
          <div className="inline-block glass px-4 py-2 rounded-full mb-6 slide-in-left">
            <span className="text-red-400 font-semibold">🏆 #1 Blood Donation Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 slide-in-left" style={{ animationDelay: '0.1s' }}>
            Why Choose <br />
            <span className="gradient-text animate-gradient">KKF Pulse?</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4 slide-in-left" style={{ animationDelay: '0.15s' }}>
            by Klin Kaara Foundation
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 slide-in-left max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            We're not just an app – we're a life-saving community that connects heroes with those in need, instantly and efficiently.
          </p>

          <a href="#stats" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 pulse-glow inline-flex items-center gap-2 slide-in-left" style={{ animationDelay: '0.3s' }}>
            Explore Benefits <ArrowRight />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Users, number: '50,000+', label: 'Active Donors', color: 'text-red-500' },
              { icon: Heart, number: '10,000+', label: 'Lives Saved', color: 'text-orange-500' },
              { icon: MapPin, number: '100+', label: 'Cities Covered', color: 'text-green-500' },
              { icon: Award, number: '98%', label: 'Success Rate', color: 'text-blue-500' }
            ].map((stat, idx) => (
              <div key={idx} className="glass p-6 md:p-8 rounded-3xl text-center fade-in-section hover:bg-white/10 transition-all transform hover:scale-105">
                <stat.icon className={`w-10 h-10 md:w-12 md:h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 fade-in-section">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="text-center text-gray-400 text-base md:text-lg mb-16 max-w-3xl mx-auto fade-in-section px-4">
            <span className="font-semibold text-gray-300">Klin Kaara Foundation's</span> KKF Pulse combines cutting-edge technology with a compassionate community to revolutionize blood donation.
          </p>

          <div className="space-y-16 md:space-y-24">
            {/* Benefit 1 - Lightning Fast */}
            <div className="grid grid-cols-1 gap-8 items-center fade-in-section">
              <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-400">SPEED</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Lightning Fast Matching</h3>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  Our advanced AI-powered algorithm finds the perfect donor match in seconds, not hours. When every second counts, KKF Pulse delivers instant results.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Real-time donor availability',
                    'Smart proximity-based search',
                    'Instant notifications to donors',
                    'Blood type compatibility checker'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefit 2 - Verified & Trusted */}
            <div className="grid grid-cols-1 gap-8 items-center fade-in-section">
              <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-400">SAFETY</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Verified & Trusted</h3>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  Every donor on our platform is thoroughly verified with government-issued ID and blood type certificates. Your safety is our priority.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Multi-level identity verification',
                    'Medical history screening',
                    'Community ratings & reviews',
                    'Secure data encryption'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefit 3 - Community */}
            <div className="grid grid-cols-1 gap-8 items-center fade-in-section">
              <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-400">COMMUNITY</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Thriving Community</h3>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  Join thousands of life-savers across 100+ cities. Be part of a movement that's changing lives, one donation at a time.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Active donor community',
                    'Success story sharing',
                    'Donation milestone tracking',
                    'Impact visualization'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefit 4 - Smart Notifications */}
            <div className="grid grid-cols-1 gap-8 items-center fade-in-section">
              <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <Bell className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-red-400">ALERTS</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Smart Notifications</h3>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  Never miss an opportunity to save a life. Our intelligent notification system alerts you when someone nearby needs your blood type.
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Priority emergency alerts',
                    'Customizable notification settings',
                    'SMS and push notifications',
                    'Nearby request tracking'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in-section">
            KKF Pulse vs <span className="gradient-text">Traditional Methods</span>
          </h2>

          <div className="glass rounded-3xl overflow-hidden fade-in-section">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 md:p-6 text-left text-sm md:text-base">Feature</th>
                    <th className="p-4 md:p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <img src="/KKF/Picsart_25-11-14_16-53-13-078.png" alt="KKF" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                        <span className="gradient-text font-bold text-sm md:text-base">KKF Pulse</span>
                      </div>
                    </th>
                    <th className="p-4 md:p-6 text-center text-gray-400 text-sm md:text-base">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Search Time', 'Instant', '2-3 Days'],
                    ['Availability', '24/7', 'Limited Hours'],
                    ['Verification', 'Automated', 'Manual'],
                    ['Location Tracking', 'Real-time GPS', 'Phone Calls'],
                    ['Success Rate', '98%', '45%'],
                    ['Cost', 'Free', 'Paid']
                  ].map(([feature, kkf, traditional], idx) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-6 font-semibold text-sm md:text-base">{feature}</td>
                      <td className="p-4 md:p-6 text-center">
                        <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm md:text-base">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                          {kkf}
                        </span>
                      </td>
                      <td className="p-4 md:p-6 text-center text-gray-400 text-sm md:text-base">{traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 fade-in-section">
            What <span className="gradient-text">Heroes Say</span>
          </h2>
          <p className="text-center text-gray-400 text-base md:text-lg mb-16 max-w-3xl mx-auto fade-in-section px-4">
            Real stories from real people who've made a difference with KKF Pulse.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Donor',
                text: 'KKF Pulse helped me donate blood when someone urgently needed O+ in my area. The process was seamless and I felt like a real hero!',
                rating: 5
              },
              {
                name: 'Priya Sharma',
                role: 'Recipient',
                text: 'My father needed B- blood urgently. Within 15 minutes, KKF Pulse connected us with 3 donors nearby. Life-saving app!',
                rating: 5
              },
              {
                name: 'Amit Patel',
                role: 'Regular Donor',
                text: 'I\'ve donated 12 times through KKF Pulse. The verification process gives me confidence, and I love tracking my impact!',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="glass p-6 md:p-8 rounded-3xl fade-in-section hover:bg-white/10 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"></div>
                  <div>
                    <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="glass p-8 md:p-16 rounded-3xl fade-in-section">
            <img src="/KKF/Picsart_25-11-14_16-53-13-078.png" alt="KKF Pulse" className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 float rounded-full" />
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
              Ready to Be a <span className="gradient-text">Hero?</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mb-4">Join Klin Kaara Foundation's Mission</p>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Download KKF Pulse now and join the life-saving revolution. Your next donation could save three lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-6 md:mb-8">
              <a href="https://play.google.com/store/apps/details?id=com.lakshmi_it.kkfpulse" className="bg-black hover:bg-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all transform hover:scale-105 flex items-center gap-3 md:gap-4 w-full sm:w-auto sm:min-w-[240px]">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D7FF" />
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00" />
                  <path d="M3.84 2.15L6.05 2.66L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#00D863" />
                  <path d="M16.81 8.88L14.54 11.15L6.05 2.66L16.81 8.88Z" fill="#FF2E5A" />
                  <path d="M20.16 11.37C20.72 11.71 20.72 12.29 20.16 12.63L17.89 13.96L15.45 11.52L17.89 9.08L20.16 11.37Z" fill="#00D863" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-lg md:text-xl font-bold">Google Play</div>
                </div>
              </a>

              <a href="#" className="bg-black hover:bg-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all transform hover:scale-105 flex items-center gap-3 md:gap-4 w-full sm:w-auto sm:min-w-[240px]">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg md:text-xl font-bold">App Store</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400">
              <span>✓ 100% Free Forever</span>
              <span>✓ No Hidden Charges</span>
              <span>✓ Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}