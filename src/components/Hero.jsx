// components/Hero.jsx - Updated with new colors
import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FloatingPaths from './FloatingPaths';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const socialLinks = useMemo(() => [
    { icon: <FaGithub />, href: 'https://github.com/mahallawy1', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/abdelrahman-mahalawy-04a30b229', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:abdelrahmanmahalawy@gmail.com', label: 'Email' },
  ], []);

  const animationProps = useMemo(() => ({
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6 }
  }), [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FE7F2D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#215E61]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text Content */}
              <motion.div
                {...animationProps}
                className="text-center lg:text-left order-2 lg:order-1"
              >
                {/* Greeting */}
                <motion.p
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#FE7F2D] font-mono text-lg md:text-xl mb-4"
                >
                  Hi, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-tight"
                >
                  Abdelrahman Mahalawy
                </motion.h1>

                {/* Typing Animation */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--text-secondary)] mb-8 h-12"
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
                    className="text-[#215E61] dark:text-[#FE7F2D]"
                  />
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex justify-center lg:justify-start gap-6 mb-10"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-[var(--text-secondary)] hover:text-[#FE7F2D] transition-colors duration-200"
                     
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#FE7F2D] text-white text-lg font-semibold rounded-2xl hover:bg-[#1A4A4D] transition-all duration-200 shadow-lg shadow-[#215E61]/25"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View My Work
                    <span className="text-xl">→</span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center px-10 py-4 border-2 border-[#215E61]/50 dark:border-[#FE7F2D]/50 text-[var(--text-primary)] text-lg font-semibold rounded-2xl hover:bg-[#215E61]/10 dark:hover:bg-[#FE7F2D]/10 hover:border-[#215E61] dark:hover:border-[#FE7F2D] transition-all duration-200"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get In Touch
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column - Profile Image */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center lg:justify-end order-1 lg:order-2"
              >
                <div className="relative"> 
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FE7F2D] via-[#215E61] to-[#233D4D] rounded-full blur-3xl opacity-20 animate-pulse will-change-opacity"></div>
                  
                  {/* Profile Image Container */}
                  <motion.div
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#215E61]/30 dark:border-[#FE7F2D]/30 shadow-2xl shadow-[#215E61]/20 dark:shadow-[#FE7F2D]/20"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src="/img/profile.png"
                      alt="Abdelrahman Mahalawy"
                      className="w-full h-full object-cover object-center scale-110"
                      style={{ objectPosition: '50% 35%' }}
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                  
                  {/* Decorative Ring */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#FE7F2D]/20 pointer-events-none"
                      animate={{ 
                        scale: [1, 1.08, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default React.memo(Hero);