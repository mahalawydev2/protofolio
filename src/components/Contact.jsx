import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/mahallawy1', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/abdelrahman-mahalawy-04a30b229', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:abdelrahmanmahalawy@gmail.com', label: 'Email' },
  ];

  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 px-6 bg-[#0a0a0a] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#3b82f6]/5 to-transparent rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-4"
          >
            <FaPaperPlane className="text-[#3b82f6] text-sm" />
            <span className="text-[#3b82f6] font-mono text-sm tracking-wider">CONTACT</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto mb-8">
            I'm currently open to internships and junior roles. Feel free to reach out!
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-5"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-[#a1a1aa] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all border border-white/10 hover:border-[#3b82f6]/30"
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;