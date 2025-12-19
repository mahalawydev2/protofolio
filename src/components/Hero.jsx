import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout - Text on Left, Image on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center lg:text-left order-2 lg:order-1"
              >
                {/* Greeting */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#3b82f6] font-mono text-lg md:text-xl mb-4"
                >
                  Hi, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  Abdelrahman Mahalawy
                </motion.h1>

                {/* Typing Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-[#a1a1aa] mb-8 h-12"
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

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center lg:justify-start gap-6 mb-10"
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
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#3b82f6] text-white text-lg font-semibold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View My Work
                    <span className="text-xl">→</span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/25 text-white text-lg font-semibold rounded-2xl hover:bg-white/5 hover:border-[#3b82f6] transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get In Touch
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column - Profile Image */}
             {/* Right Column - Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="flex justify-center lg:justify-end order-1 lg:order-2"
>
  <div className="relative"> 
    
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-3xl opacity-20 animate-pulse"></div>
    
    {/* Profile Image Container */}
    <motion.div
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#3b82f6]/30 shadow-2xl shadow-blue-500/20"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/img/profile.png"
        alt="Abdelrahman Mahalawy"
        className="w-full h-full object-cover object-center scale-110"
        style={{ objectPosition: '50% 35%' }}
      />
    </motion.div>
    
    {/* Decorative Ring */}
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-[#3b82f6]/20 pointer-events-none"
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
</motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        {/* Add your scroll indicator here if needed */}
      </motion.div>
    </section>
  );
};  

export default Hero;