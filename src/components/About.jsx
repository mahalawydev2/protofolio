// components/About.jsx - Simple & Clean with Logo
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [logoError, setLogoError] = useState(false);

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 px-4 sm:px-6 bg-[#1A252E] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#215E61]/10 border border-[#215E61]/20 text-[#FE7F2D] font-mono text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE7F2D] animate-pulse" />
            ABOUT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Who I <span className="text-[#FE7F2D]">Am</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-3xl p-6 md:p-10"
        >
          {/* Education Badge - Simple & Clean */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-[var(--bg-primary)] border border-[var(--glass-border)]">
              {/* Logo */}
          
<div className="w-21 h-21 rounded-full bg-white flex items-center justify-center overflow-hidden">
  {!logoError ? (
    <img 
      src="/logos/asu-logo.png"
      alt="Ain Shams University"
      className="w-20 h-20 object-contain"
      onError={() => setLogoError(true)}
    />
  ) : (
<FaGraduationCap className="text-[#FE7F2D] text-2xl" />  
)}
</div>

              {/* Text */}
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base font-bold text-[var(--text-primary)]">
                    B.Sc. Computer Engineering
                  </span>
                </div>
                <span className="text-xs md:text-sm text-[var(--text-muted)]">
                  Ain Shams University • Class of 2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Text */}
          <p className="text-[var(--text-secondary)] text-base md:text-lg lg:text-xl leading-relaxed text-center">
            I'm <span className="text-[var(--text-primary)] font-semibold">Abdelrahman S. Ahmed</span>, 
            a recent Computer Engineering graduate, specializing in <span className="text-[#FE7F2D]">Distributed Computing</span> and{' '}
            <span className="text-[#FE7F2D]">Software Product Lines</span>. 
            I'm passionate about building scalable software solutions and love tackling complex problems, 
            turning them into elegant, efficient applications. Currently seeking opportunities to grow as a{' '}
            <span className="text-[#FE7F2D] font-medium">Software Developer</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;