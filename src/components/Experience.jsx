// components/Experience.jsx - Updated with new colors
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaArrowRight } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Full Stack Development Track',
      company: 'Information Technology Institute (ITI)',
      location: 'Intensive Training',
      date: '09/2024 – 06/2025',
      type: '9-Month Program',
      description: [
        'Completed intensive 9-month open-source training program covering full-stack web development.',
        'Gained hands-on experience with modern frameworks, databases, and cloud technologies.',
        'Built multiple real-world projects applying agile methodologies and best practices.',
        'Collaborated with peers on team projects, enhancing communication and problem-solving skills.',
      ],
      skills: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      title: 'Software Developer Intern',
      company: "I'SUPPLY",
      location: 'Onsite',
      date: '07/2023 – 10/2023',
      type: 'Internship',
      description: [
        'Tested and maintained software systems based on the Laravel framework using Postman and Selenium.',
        'Collaborated with development teams to identify and resolve bugs, enhancing system reliability.',
        'Implemented automated testing pipelines reducing manual testing time by 40%.',
      ],
      skills: ['Laravel', 'Postman', 'Selenium', 'PHP', 'API Testing'],
    },
    {
      title: 'Full Stack Training',
      company: 'Sprints',
      location: 'Training Program',
      date: '06/2022 – 08/2022',
      type: 'Training',
      description: [
        'Developed both front-end and back-end components of web platforms, including database integration.',
        'Gained hands-on experience with modern web development technologies and best practices.',
        'Built 5+ full-stack projects demonstrating proficiency in the MERN stack.',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section 
      id="experience" 
      className="py-16 md:py-20 px-6 bg-[var(--bg-primary)] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#215E61]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#FE7F2D]/12 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#215E61]/10 border border-[#215E61]/20 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#FE7F2D] animate-pulse" />
            <span className="text-[#FE7F2D] font-mono text-sm tracking-wider">EXPERIENCE</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
           Where I've <span className="text-[#FE7F2D]">Worked</span>
          </h2>
         
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto relative"
        >
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FE7F2D]/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative mb-10 last:mb-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div 
                className="hidden md:flex absolute top-6 items-center justify-center w-4 h-4 rounded-full bg-[#215E61] border-4 border-[var(--bg-primary)] shadow-lg shadow-[#215E61]/50 z-10"
                style={{ [index % 2 === 0 ? 'right' : 'left']: '-34px' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FE7F2D] animate-pulse" />
              </div>

              {/* Card */}
              <div className="glass-strong rounded-2xl p-6 md:p-8 card-hover group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#215E61]/10 text-[#FE7F2D] border border-[#215E61]/20 mb-3">
                      {exp.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#FE7F2D] transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[#215E61] dark:text-[#FE7F2D]">
                    <FaBriefcase className="text-lg" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] dark:bg-[#233D4D] text-[var(--text-secondary)] text-sm">
                    <FaCalendar className="text-[#FE7F2D] text-xs" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] dark:bg-[#233D4D] text-[var(--text-secondary)] text-sm">
                    <FaMapMarkerAlt className="text-[#FE7F2D] text-xs" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-5">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3 text-[var(--text-secondary)] text-sm"
                    >
                      <FaArrowRight className="text-[#FE7F2D] mt-1 flex-shrink-0 text-xs" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gradient-to-r from-[#215E61]/10 to-[#FE7F2D]/10 text-[#215E61] dark:text-[#FE7F2D] border border-[#215E61]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;