import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-purple-500 flex items-center justify-center">
                <FaCode className="text-white text-lg" />
              </div>
              <span className="text-white font-bold text-xl">ASA</span>
            </motion.div>
            <p className="text-[#a1a1aa] text-sm max-w-xs mx-auto md:mx-0">
              Software Developer passionate about building impactful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#a1a1aa] hover:text-[#3b82f6] transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#a1a1aa] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all border border-white/5 hover:border-[#3b82f6]/30"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#a1a1aa] text-sm mb-1">
              Designed & Built by{' '}
              <a
                href="https://github.com/mahallawy1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b82f6] hover:underline font-medium"
              >
                Abdelrahman S. Ahmed
              </a>
            </p>
            <p className="text-[#a1a1aa]/50 text-xs flex items-center justify-center md:justify-start gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in Cairo, Egypt
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-[#a1a1aa]/40 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all border border-[#3b82f6]/20 hover:border-transparent"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-[#3b82f6] via-purple-500 to-[#3b82f6]" />
    </footer>
  );
};

export default Footer;