import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Full width container - edge to edge */}
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left edge */}
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/img/logo2.png"
              alt="Mahalawy Logo"
              className="h-12 md:h-8 w-auto"
            />
          </motion.a>

          {/* Desktop Menu - Right aligned */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[#a1a1aa] hover:text-white transition-colors duration-300 whitespace-nowrap text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              className="px-8 py-3 bg-[#3b82f6] text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 whitespace-nowrap text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl p-2"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass rounded-2xl mt-2 p-6 mb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-4 text-lg text-[#a1a1aa] hover:text-white transition-colors border-b border-white/10 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="block mt-6 px-8 py-4 bg-[#3b82f6] text-white rounded-xl text-center font-semibold text-lg"
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;