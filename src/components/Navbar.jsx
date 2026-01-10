// components/Navbar.jsx - Updated with ThemeToggle
import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Throttled scroll handler
  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ], []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[var(--bg-primary)]/90 dark:bg-[#0F1419]/90 backdrop-blur-lg shadow-lg shadow-[var(--shadow-color)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/img/logo3.png"
              alt="Mahalawy Logo"
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[#FE7F2D] transition-colors duration-150 text-base font-medium"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
            
          
            <motion.a
              href="/resume.pdf"
              className="px-8 py-3 bg-[#215E61] text-white rounded-xl font-semibold hover:bg-[#1A4A4D] transition-all duration-200 text-base"
              whileTap={{ scale: 0.97 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-[var(--text-primary)] text-3xl p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden glass rounded-2xl mt-2 p-6 mb-4 overflow-hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-4 text-lg text-[var(--text-secondary)] hover:text-[#FE7F2D] transition-colors duration-150 border-b border-[var(--glass-border)] last:border-0"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="block mt-6 px-8 py-4 bg-gradient-to-r from-[#215E61] to-[#FE7F2D] text-white rounded-xl text-center font-semibold text-lg"
                onClick={closeMenu}
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default React.memo(Navbar);