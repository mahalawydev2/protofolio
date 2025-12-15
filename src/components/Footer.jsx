import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/mahallawy1' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/abdelrahman-mahalawy-04a30b229' },
    { icon: <FaEnvelope />, href: 'mailto:abdelrahmanmahalawy@gmail.com' },
  ];

  return (
    <footer className="py-14 px-6 border-t border-white/10 bg-[#0a1a1a]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-[#3b82f6] transition-all duration-300 text-2xl hover:-translate-y-2"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-[#a1a1aa] text-base mb-3">
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
        <p className="text-[#a1a1aa]/60 text-sm flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-500" /> in Cairo, Egypt
        </p>
        <p className="text-[#a1a1aa]/40 text-sm mt-3">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;