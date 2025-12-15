import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="section-padding bg-[#171717]" ref={ref}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-[#3b82f6] font-mono mb-4">05. Contact</p>
          <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>

          <p className="text-[#a1a1aa] max-w-2xl mx-auto mb-6">
            I'm currently open to internships and junior roles.  
            Whether you have a question or want to collaborate, my inbox is open.
          </p>

          <p className="text-green-400 font-mono mb-16">
            ● Available for opportunities
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
            <div className="glass p-10 rounded-2xl">
              <FaEnvelope className="text-4xl text-[#3b82f6] mb-4 mx-auto" />
              <p>Email</p>
            </div>
            <div className="glass p-10 rounded-2xl">
              <FaPhone className="text-4xl text-[#3b82f6] mb-4 mx-auto" />
              <p>+(20) 1142294950</p>
            </div>
            <div className="glass p-10 rounded-2xl">
              <FaMapMarkerAlt className="text-4xl text-[#3b82f6] mb-4 mx-auto" />
              <p>Cairo, Egypt</p>
            </div>
          </div>

          <a
            href="mailto:abdelrahmanmahalawy@gmail.com"
            className="inline-block px-14 py-6 bg-[#3b82f6] rounded-2xl font-semibold text-xl shadow-lg"
          >
            Say Hello — Let’s Build Something 
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;