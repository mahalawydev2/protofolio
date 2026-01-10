// components/Footer.jsx - Updated with new colors
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--glass-border)]">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Spacer */}
          <div className="flex gap-3"></div>

          {/* Copyright */}
          <p className="text-[var(--text-muted)] text-sm">
            © 2026 Abdelrahman S. Ahmed. All Rights Reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-[#215E61]/10 flex items-center justify-center text-[#FE7F2D] hover:bg-[#215E61] hover:text-white transition-all border border-[#215E61]/20 hover:border-transparent"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-0.5 bg-gradient-to-r from-[#FE7F2D] via-[#215E61] to-[#233D4D]" />
    </footer>
  );
};

export default Footer;