// components/Experience.jsx - With Floating Logos
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaArrowRight } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {

title: 'Open-Source Applications Development',
      company: 'Information Technology Institute (ITI)',
      location: 'Professional Training Program ',
      date: '09/2025 – 06/2026',
      type: '9-Month Program',
      // Add logo URL or import
      logo: '/logos/iti-logo.png', // Replace with your actual logo path
      logoBg: '#1a365d', // Optional: background color for logo container
   description: [
    'Completed 1,110 hours of rigorous training in full-stack development, spanning frontend frameworks, backend systems, and DevOps practices.',
    'Built production-ready applications using React, Angular, Vue.js, and Node.js with proper testing, version control, and deployment workflows.',
    'Worked extensively with Linux environments, containerization with Docker, and database design using both SQL and NoSQL solutions.',
    'Trained on integrating Generative AI into software products—including RAG pipelines and agentic architectures.',
  ],
  skills: [
    'Linux',
    'React',
    'Angular',
    'Vue.js',
    'Node.js',
    'PHP',
    'Python',
    'MongoDB',
    'MySQL',
    'Docker',
  ],
},
    {
      title: 'Software Developer Intern',
      company: "I'SUPPLY",
      location: 'Onsite',
      date: '07/2023 – 10/2023',
      type: 'Internship',
      logo: '/logos/isupply-logo.png',
      logoBg: '#215E61',
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
      logo: '/logos/sprints-logo.png',
      logoBg: '#FE7F2D',
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
              {/* Timeline Dot with Logo */}
              <div 
                className="hidden md:flex absolute top-6 items-center justify-center w-16 h-16  bg-[var(--bg-card)] border-2 border-[#215E61]/30 shadow-lg shadow-[#215E61]/20 z-10 overflow-hidden"
                style={{ [index % 2 === 0 ? 'right' : 'left']: '-30px' }}
              >
                {exp.logo ? (
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-15 h-15 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback: First letter of company */}
                <div 
                  className={`w-full h-full items-center justify-center text-white font-bold text-lg ${exp.logo ? 'hidden' : 'flex'}`}
                  style={{ backgroundColor: exp.logoBg || '#215E61' }}
                >
                  {exp.company.charAt(0)}
                </div>
              </div>

              {/* Card */}
              <div className="glass-strong rounded-2xl p-6 md:p-8 card-hover group relative">
                {/* Mobile Logo - Shows inside card on mobile */}
                <div className="md:hidden absolute -top-5 right-6 w-12 h-12 rounded-xl bg-[var(--bg-card)] border-2 border-[#215E61]/30 shadow-lg overflow-hidden flex items-center justify-center">
                  {exp.logo ? (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-full h-full items-center justify-center text-white font-bold text-lg ${exp.logo ? 'hidden' : 'flex'}`}
                    style={{ backgroundColor: exp.logoBg || '#215E61' }}
                  >
                    {exp.company.charAt(0)}
                  </div>
                </div>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4 mt-4 md:mt-0">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#215E61]/10 text-[#FE7F2D] border border-[#215E61]/20 mb-3">
                      {exp.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#FE7F2D] transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[#FE7F2D]">
                    <FaBriefcase className="text-lg" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#233D4D] text-[var(--text-secondary)] text-sm">
                    <FaCalendar className="text-[#FE7F2D] text-xs" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#233D4D] text-[var(--text-secondary)] text-sm">
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
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gradient-to-r from-[#215E61]/10 to-[#FE7F2D]/10 text-[#FE7F2D] border border-[#FE7F2D]/20"
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