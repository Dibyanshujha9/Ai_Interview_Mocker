'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, GraduationCap, BarChart3 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
      <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
        Ready to transform your interview skills? Contact us today and start your journey to success.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Contact Us
        </button>
        <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 rounded-xl font-semibold transition-all duration-300">
          Schedule Demo
        </button>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white min-h-screen">
      <main>
        {/* Header */}
        <header className="w-full py-6 shadow-2xl bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Prepare
            </h1>
            <nav className="flex flex-wrap gap-6 items-center mt-4 md:mt-0">
              <a href="#features" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium">Features</a>
              <a href="#testimonials" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium">Testimonials</a>
              {/* <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium">Contact</a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dibyanshujha9"
                className="text-slate-400 hover:text-slate-200 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.8-.26.8-.57v-2.2c-3.34.72-4.03-1.42-4.03-1.42-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.2.7.8.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-32 px-6 relative overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Transform Your Interview Journey
            </h2>
            <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Practice with AI-driven mock interviews, get expert feedback, and land your dream job with Let's Prepare.
            </p>
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
             <Link href="/dashboard">
  <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/25">
    Get Started
  </button>
</Link>
              <a href="#features" className="px-10 py-4 border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-indigo-500 hover:text-indigo-400 rounded-xl text-lg font-semibold transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section id="features" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
      Why Choose Let's Prepare?
    </h2>
    <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
      Powerful features designed to help you master every interview.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
    {[
      {
        icon: <Target className="w-12 h-12 text-indigo-400 mx-auto mb-6" />,
        title: "Smart Practice",
        desc: "AI-curated questions from 500+ top companies with real-time feedback.",
        hover: "hover:border-indigo-500/50",
      },
      {
        icon: <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-6" />,
        title: "Expert Mentorship",
        desc: "Get personalized guidance from top professionals at FAANG companies.",
        hover: "hover:border-purple-500/50",
      },
      {
        icon: <BarChart3 className="w-12 h-12 text-emerald-400 mx-auto mb-6" />,
        title: "Success Analytics",
        desc: "Track your growth with detailed analytics and celebrate achievements.",
        hover: "hover:border-emerald-500/50",
      },
    ].map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl w-full md:w-80 text-center shadow-2xl border border-slate-700 ${feature.hover} transition-all duration-300 transform hover:scale-105`}
      >
        {feature.icon}
        <h3 className="text-2xl font-bold text-slate-100 mb-4">{feature.title}</h3>
        <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-950 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 to-purple-950/20"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                What Our Users Say
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl w-full md:w-96 shadow-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-indigo-400 text-6xl mb-4">"</div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  This AI mock interview platform made me so confident! I cracked my FAANG interview thanks to Let's Prepare.
                </p>
                <p className="text-indigo-400 font-bold text-lg">- Arjun Sharma</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl w-full md:w-96 shadow-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 text-6xl mb-4">"</div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Loved the instant feedback and analytics. Felt like a real interview experience.
                </p>
                <p className="text-purple-400 font-bold text-lg">- Priya Patel</p>
              </div>
            </div>
          </div>
        </section>

        
         {/* <section id="contact" className="py-20 px-6">
           <Contact />
         </section> */}
       </main>

      <footer className="text-center py-8 bg-slate-950 text-slate-500 border-t border-slate-800">
        <p className="text-lg">© 2025 Let's Prepare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;