import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaFolder } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = [
    {
      title: 'EduAi',
      subtitle: 'Microservices-Based E-Learning Platform',
      description: 'Developed an e-learning platform using a microservices architecture, delivering core services for payments, user management, webhooks, and frontend interfaces.',
      tags: ['Microservices', 'Node.js', 'React', 'Docker', 'Kubernetes'],
      github: 'https://github.com/mahallawy1',
    },
    {
      title: 'Distributed Image Processing',
      subtitle: 'Scalable AWS-Based System',
      description: 'Built a scalable image processing system on AWS, leveraging Python, OpenCV, and MPI/OpenCL for parallel, fault-tolerant image operations, including filtering and edge detection.',
      tags: ['Python', 'AWS', 'OpenCV', 'MPI', 'OpenCL'],
      github: 'https://github.com/mahallawy1',
    },
    {
      title: 'Wassalnii',
      subtitle: 'Cross-Platform Mobile App',
      description: 'Developed a real-time, offline-capable app with Flutter, Firebase, and SQLite, featuring a responsive UI and seamless data synchronization.',
      tags: ['Flutter', 'Firebase', 'SQLite', 'Dart'],
      github: 'https://github.com/mahallawy1',
    },
  ];

  const otherProjects = [
    {
      title: 'Cinema Desktop App',
      subtitle: 'Java/JavaFX Application',
      description: 'Designed and implemented a Java/JavaFX application connected to MySQL for comprehensive movie data management.',
      tags: ['Java', 'JavaFX', 'MySQL'],
      github: 'https://github.com/mahallawy1',
    },
    {
      title: 'Mini-Fortran Compiler',
      subtitle: 'Python Compiler Implementation',
      description: 'Developed a FORTRAN grammar and implemented a mini-compiler in Python supporting lexical analysis, parse trees, error detection, and recovery.',
      tags: ['Python', 'Compiler Design', 'Parsing'],
      github: 'https://github.com/mahallawy1',
    },
    {
      title: 'Modified Minix3 OS',
      subtitle: 'Kernel Enhancement',
      description: 'Enhanced and recompiled the kernel for Minix3 OS using C, with deployment and testing via WinSCP and Teraterm.',
      tags: ['C', 'Operating Systems', 'Kernel'],
      github: 'https://github.com/mahallawy1',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-[#171717]" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title - Centered */}
          <div className="text-center mb-20">
            <p className="text-[#3b82f6] font-mono mb-5 text-lg">03. Projects</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Things I've Built</h2>
          </div>

          {/* Featured Projects - Centered */}
          <div className="max-w-4xl mx-auto space-y-12 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass rounded-3xl p-10 md:p-12 card-hover"
              >
                <div className="flex flex-col lg:flex-row p-3! lg:items-start lg:justify-between gap-8">
                  <div className="flex-1">
                    <span className="inline-block text-[#3b82f6] font-mono text-sm mb-4 px-5 py-2 bg-[#3b82f6]/10 rounded-full">
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[#60a5fa] font-medium text-lg md:text-xl mb-6">{project.subtitle}</p>
                    <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed mb-10">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-4 mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-6 py-3 bg-[#3b82f6]/10 text-[#3b82f6] text-base font-mono rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-[#a1a1aa] hover:text-[#3b82f6] transition-colors px-6 py-3 bg-white/5 rounded-xl text-lg"
                    >
                      <FaGithub className="text-2xl" />
                      <span>View Code</span>
                    </a>
                  </div>

                  {/* Project Number */}
                  <div className="hidden lg:block text-9xl font-bold text-white/5">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Centered */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-14">
              Other Noteworthy Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-2xl p-8 md:p-10 card-hover group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <FaFolder className="text-5xl text-[#3b82f6]" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a1a1aa] hover:text-[#3b82f6] transition-colors p-3"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[#60a5fa] text-base mb-4">{project.subtitle}</p>
                  <p className="text-[#a1a1aa] text-base md:text-lg mb-8 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm font-mono text-[#a1a1aa] px-4 py-2 bg-white/5 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;