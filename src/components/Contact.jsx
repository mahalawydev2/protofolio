import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'abdelrahmanmahalawy@gmail.com',
      href: 'mailto:abdelrahmanmahalawy@gmail.com',
      color: '#3b82f6',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+(20) 1142294950',
      href: 'tel:+201142294950',
      color: '#10b981',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#',
      color: '#f59e0b',
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/mahallawy1', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/abdelrahman-mahalawy-04a30b229', label: 'LinkedIn' },
  ];

  return (
    <section 
      id="contact" 
      className="section-padding bg-[#0a0a0a] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#3b82f6]/5 to-transparent rounded-full" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#3b82f6]/20 to-transparent blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-xl"
      />

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-8"
            >
              <FaPaperPlane className="text-[#3b82f6] text-sm" />
              <span className="text-[#3b82f6] font-mono text-sm tracking-wider">CONTACT</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-[#a1a1aa] text-lg md:text-xl max-w-2xl mx-auto mb-8">
              I'm currently open to internships and junior roles. Whether you have a question or want to collaborate, my inbox is always open.
            </p>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-medium">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-strong rounded-3xl p-8 text-center group cursor-pointer border border-transparent hover:border-white/10 transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <span className="text-3xl" style={{ color: method.color }}>
                    {method.icon}
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-sm uppercase tracking-wider mb-2">{method.label}</p>
                <p className="text-white font-medium text-lg group-hover:text-[#3b82f6] transition-colors">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 via-transparent to-purple-500/10" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to start a project?
              </h3>
              <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto mb-10">
                I'm excited to bring your ideas to life. Let's create something amazing together!
              </p>

              {/* Main CTA Button */}
              <motion.a
                href="mailto:abdelrahmanmahalawy@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-3 text-lg mb-10"
              >
                <FaEnvelope />
                <span>Say Hello</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <p className="text-[#a1a1aa] mr-4">Or find me on:</p>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#a1a1aa] hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-center"
          >
            {[
              { label: 'Response Time', value: '< 24 hours' },
              { label: 'Timezone', value: 'GMT+2' },
              { label: 'Languages', value: 'Arabic, English' },
            ].map((fact) => (
              <div key={fact.label} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#3b82f6]" />
                <span className="text-[#a1a1aa]">{fact.label}:</span>
                <span className="text-white font-medium">{fact.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;