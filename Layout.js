import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', page: 'Home' },
  { label: 'Tienda', page: 'Home' },
  { 
    label: 'Explorar', 
    page: 'Home',
    submenu: ['Residencial', 'Comercial', 'Barrios Cerrados']
  },
  { label: 'Contactanos', page: 'Home' },
];

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a14]">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#0a0a14]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d7bfad27b13c53e363711/f18488d23_transparenteletrasblancas.png"
                alt="GD-TEC Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={createPageUrl(link.page)}
                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {link.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-2 min-w-[180px] border border-white/10">
                        {link.submenu.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center transition-colors">
                <Search className="w-5 h-5 text-white/70" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <ShoppingBag className="w-5 h-5 text-white/70" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white/70" />
                ) : (
                  <Menu className="w-5 h-5 text-white/70" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a0a14]/98 backdrop-blur-xl border-t border-white/10"
            >
              <nav className="px-6 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="block text-white/80 hover:text-white transition-colors py-2 text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block text-white/50 hover:text-white/80 text-sm py-1"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}
