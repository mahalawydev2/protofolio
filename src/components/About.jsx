import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: <FaGraduationCap />, label: 'B.Sc. Computer Engineering', color: '#3b82f6' },
    { icon: <FaCode />, label: 'Distributed Computing', color: '#8b5cf6' },
    { icon: <FaRocket />, label: 'Full Stack Developer', color: '#06b6d4' },
    { icon: <FaMapMarkerAlt />, label: 'Cairo, Egypt', color: '#10b981' },
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-6 bg-[#0f0f0f] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] font-mono text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            ABOUT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-purple-500 flex items-center justify-center relative">
                <span className="text-4xl font-bold text-white">A</span>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-3 border-[#0f0f0f]" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Abdelrahman S. Ahmed
              </h3>
              <p className="text-[#3b82f6] font-medium mb-4">
                Computer Engineering Student @ Ain Shams University
              </p>
              <p className="text-[#a1a1aa] leading-relaxed">
                Passionate about building scalable software solutions. Specializing in 
                <span className="text-white"> Distributed Computing</span> and 
                <span className="text-white"> Software Product Lines</span>. 
                I love tackling complex problems and turning them into elegant, efficient solutions.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
              >
                <span className="text-xl" style={{ color: item.color }}>{item.icon}</span>
                <span className="text-sm text-[#a1a1aa]">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Education Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <span className="px-4 py-2 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] text-sm border border-[#3b82f6]/20">
              Expected Graduation: June 2025
            </span>
            <span className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20">
              Major: Distributed Computing
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;