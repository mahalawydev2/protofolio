import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import FloatingPaths from './FloatingPaths';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/mahallawy1', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/abdelrahman-mahalawy-04a30b229', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:abdelrahmanmahalawy@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Background - Full width, cropped slightly on left */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 w-full">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#3b82f6] font-mono text-lg md:text-xl mb-6"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Abdelrahman S. Ahmed
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-[#a1a1aa] mb-10 h-12"
            >
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Full Stack Engineer',
                  2000,
                  'Computer Engineering Student',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#3b82f6]"
              />
            </motion.div>

            {/* Location & Contact */}
         

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center gap-8 mb-14"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-[#a1a1aa] hover:text-[#3b82f6] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#3b82f6] text-white text-lg font-semibold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <span className="text-xl">→</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-12 py-5 border-2 border-white/25 text-white text-lg font-semibold rounded-2xl hover:bg-white/5 hover:border-[#3b82f6] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
   
      </motion.div>
    </section>
  );
};

export default Hero;