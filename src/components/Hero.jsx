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
              <div className="text-center lg:text-left order-2 lg:order-1">
                {/* Greeting */}
                <p className="text-[#FE7F2D] font-mono text-lg md:text-xl mb-4">
                  Hi, I'm
                </p>

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                  Abdelrahman Mahalawy
                </h1>

                {/* Typing Animation */}
                <div className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--text-secondary)] mb-8 h-12">
                  <TypeAnimation
                    sequence={[
                      'Software engineer',
                      2000,
                      'Full Stack Engineer',
                      2000,
                      'Computer Engineering Graduate',
                      2000,
                      'Problem Solver',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-[#FE7F2D]"
                  />
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-6 mb-10">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-[var(--text-secondary)] hover:text-[#FE7F2D] transition-colors duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FE7F2D] text-white text-base font-semibold rounded-xl hover:bg-[#1A4A4D] transition-all duration-200 shadow-lg shadow-[#215E61]/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View My Work
                    <span className="text-lg">→</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FE7F2D]/50 text-[var(--text-primary)] text-base font-semibold rounded-xl hover:bg-[#FE7F2D]/10 hover:border-[#FE7F2D] transition-all duration-200  "
                  >
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* Right Column - Profile Image */}
             <div className="flex justify-center lg:justify-end order-1 lg:order-2 pt-20 lg:pt-0">
                <div className="relative"> 
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FE7F2D] via-[#215E61] to-[#233D4D] rounded-full blur-3xl opacity-20 animate-pulse will-change-opacity"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#FE7F2D]/30 shadow-2xl shadow-[#FE7F2D]/20 ">
                    <img
                      src="/img/profile.png"
                      alt="Abdelrahman Mahalawy"
                      className="w-full h-full object-cover object-center scale-110"
                      style={{ objectPosition: '50% 35%' }}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default React.memo(Hero);