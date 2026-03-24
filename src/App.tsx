/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  UserCheck, 
  Menu, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass shadow-ambient">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-primary font-headline">
            JTCOOP
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Services', 'AI Solutions', 'About Us'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-primary-container transition-all active:scale-95">
              Book Consultation
            </button>
          </div>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 text-secondary font-bold tracking-wider uppercase text-xs"
            >
              <Shield size={14} className="fill-secondary/20" />
              <span>Established 2005</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight"
            >
              Elevate Your Enterprise
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-on-surface-variant leading-relaxed max-w-lg"
            >
              This is not a sales call. It is a high-level dialogue between your vision and our technological expertise. We respect the legacy of your business and the privacy of your data.
            </motion.p>

            <div className="space-y-8 pt-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">The Human Touch</h3>
                  <p className="text-on-surface-variant leading-snug">Every request is reviewed by a principal consultant, not an automated system.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">Absolute Privacy</h3>
                  <p className="text-on-surface-variant leading-snug">Your business strategy and challenges remain strictly confidential under our non-disclosure standards.</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block pt-8"
            >
              <div className="h-px w-32 bg-outline-variant/30 mb-8"></div>
              <div className="rounded-xl overflow-hidden shadow-ambient group">
                <img 
                  alt="Professional Consultation Office" 
                  className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient relative overflow-hidden"
            >
              <div className="ai-glow"></div>
              
              <form className="relative space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-primary tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Arthur Sterling"
                      className="w-full bg-surface-container-low border-0 rounded-md px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all outline-none placeholder:text-outline-variant/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-primary tracking-wide">Business Name</label>
                    <input 
                      type="text" 
                      placeholder="Sterling & Sons Holdings"
                      className="w-full bg-surface-container-low border-0 rounded-md px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all outline-none placeholder:text-outline-variant/60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-primary tracking-wide">Current Operational Challenges</label>
                  <textarea 
                    rows={3}
                    placeholder="Describe the friction points in your current enterprise workflow..."
                    className="w-full bg-surface-container-low border-0 rounded-md px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all outline-none placeholder:text-outline-variant/60 resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-primary tracking-wide">Where do you want to see AI work for you?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Operational Efficiency',
                      'Executive Support',
                      'Client Experience',
                      'Knowledge Management'
                    ].map((option) => (
                      <label 
                        key={option}
                        className="group relative flex items-center p-4 cursor-pointer rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
                      >
                        <input type="checkbox" className="h-4 w-4 text-secondary border-outline-variant rounded focus:ring-secondary" />
                        <span className="ml-3 text-sm font-medium text-on-surface-variant group-hover:text-primary">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-end gap-6 border-t border-outline-variant/10">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request Strategic Review</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full pt-20 pb-12 border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xl font-black text-primary tracking-widest uppercase mb-6 font-headline">
                JTCOOP
              </div>
              <p className="text-on-surface-variant leading-relaxed max-w-xs">
                Providing digital intelligence and AI services for the modern enterprise leaders.
              </p>
            </div>
            
            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                <h4 className="font-bold text-primary uppercase tracking-wider text-xs">Company</h4>
                {['About Us', 'Contact Us', 'LinkedIn'].map((link) => (
                  <a key={link} href="#" className="text-on-surface-variant hover:text-primary transition-colors flex items-center group">
                    <ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="font-bold text-primary uppercase tracking-wider text-xs">Legal</h4>
                {['Privacy Policy', 'Terms of Service', 'Legal Mentions'].map((link) => (
                  <a key={link} href="#" className="text-on-surface-variant hover:text-primary transition-colors flex items-center group">
                    <ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-surface-container p-8 rounded-xl ghost-border">
                <h4 className="font-bold text-primary mb-3 flex items-center">
                  <Mail size={18} className="mr-2" />
                  Direct Inquiry
                </h4>
                <p className="text-sm text-on-surface-variant mb-6">
                  Prefer direct contact?
                </p>
                <a 
                  href="mailto:Jason@JTCOOP.com" 
                  className="text-secondary font-bold hover:text-primary transition-colors flex items-center group"
                >
                  Jason@JTCOOP.com
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/10 gap-4">
            <div className="text-on-surface-variant/60 text-xs">
              © 2026 JTCOOP. Technology for your Enterprise.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
