
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Problems We Solve', path: '/#problems' },
    { name: 'Services & Agents', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary-900/90 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            {/* Image 1: The Icon */}
            <img 
              src="https://raw.githubusercontent.com/shakhboziddin/Zenvia/main/src/images/logo/Frame%20white.png" 
              alt="Zenvia Icon" 
              className="h-8 w-auto object-contain" 
            />
            {/* Image 2: The Text Logo - Increased size and removed margin for centering */}
            <img 
              src="https://raw.githubusercontent.com/shakhboziddin/Zenvia/main/src/images/logo/Group%20white.png" 
              alt="Zenvia Text" 
              className="h-6 w-auto object-contain" 
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-primary-400 ${isActive && link.path !== '/#problems' ? 'text-primary-500' : 'text-slate-300'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/book"
              className="relative px-5 py-2.5 rounded-full text-sm font-bold text-white bg-primary-600 hover:bg-primary-500 transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] flex items-center gap-2 overflow-hidden group"
            >
              {/* HIGH INTENSITY SHIMMER LOOP */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  className="text-slate-300 hover:text-primary-400 py-2 text-lg font-medium"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/book"
                className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white w-full py-3 rounded-lg text-center font-semibold mt-4"
              >
                Book a Strategy Call
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <img 
                src="https://raw.githubusercontent.com/shakhboziddin/Zenvia/main/src/images/logo/Frame%20white.png" 
                alt="Zenvia Icon" 
                className="h-10 w-auto object-contain" 
              />
               <img 
                src="https://raw.githubusercontent.com/shakhboziddin/Zenvia/main/src/images/logo/Group%20white.png" 
                alt="Zenvia Text" 
                className="h-7 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building intelligent AI Agents and automations that scale your business operations without increasing headcount.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/services" className="hover:text-primary-400 transition-colors">AI Support Agents</a></li>
              <li><a href="/services" className="hover:text-primary-400 transition-colors">Sales Agents</a></li>
              <li><a href="/services" className="hover:text-primary-400 transition-colors">Voice AI</a></li>
              <li><a href="/services" className="hover:text-primary-400 transition-colors">Custom Workflows</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="/case-studies" className="hover:text-primary-400 transition-colors">Case Studies</a></li>
              <li><a href="/about" className="hover:text-primary-400 transition-colors">Security</a></li>
              <li><a href="/book" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Subscribe</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest updates on AI Agents.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-primary-500" />
              <button className="bg-primary-600 p-2 rounded hover:bg-primary-500 text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Zenvia. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
