import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 px-6 bg-[#0f0f0f] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] font-mono text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            ABOUT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-3xl p-6 md:p-10 text-center"
        >
          <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed">
            I'm <span className="text-white font-semibold">Abdelrahman S. Ahmed</span>, a Computer Engineering student at Ain Shams University, 
            specializing in <span className="text-[#3b82f6]">Distributed Computing</span> and <span className="text-[#3b82f6]">Software Product Lines</span>. 
            I'm passionate about building scalable software solutions and love tackling complex problems, 
            turning them into elegant, efficient applications. Currently seeking opportunities to grow as a Full Stack Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;