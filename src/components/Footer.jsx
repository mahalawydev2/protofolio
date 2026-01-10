import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/mahallawy1', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/abdelrahman-mahalawy-04a30b229', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:abdelrahmanmahalawy@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
           
          </div>

          {/* Copyright */}
          <p className="text-[#a1a1aa]/50 text-sm">
            © 2026 Abdelrahman S. Ahmed. All Rights Reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-[#B83B5E]/10 flex items-center justify-center text-[#F08A5D] hover:bg-[#B83B5E] hover:text-white transition-all border border-[#B83B5E]/20 hover:border-transparent"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-0.5 bg-gradient-to-r from-[#F9ED69] via-[#F08A5D] to-[#B83B5E]" />
    </footer>
  );
};

export default Footer;