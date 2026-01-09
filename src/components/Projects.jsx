import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      title: 'EduAi',
      subtitle: 'Microservices-Based E-Learning Platform',
      description: 'Developed an e-learning platform using a microservices architecture, delivering core services for payments, user management, webhooks, and frontend interfaces. Implemented real-time collaboration features and AI-powered learning recommendations.',
      tags: ['Microservices', 'Node.js', 'React', 'Docker', 'Kubernetes', 'Redis'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#3b82f6',
    },
    {
      title: 'Distributed Image Processing',
      subtitle: 'Scalable AWS-Based System',
      description: 'Built a scalable image processing system on AWS, leveraging Python, OpenCV, and MPI/OpenCL for parallel, fault-tolerant image operations, including filtering and edge detection. Achieved 10x performance improvement over sequential processing.',
      tags: ['Python', 'AWS', 'OpenCV', 'MPI', 'OpenCL', 'Lambda'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#8b5cf6',
    },
    {
      title: 'Wassalnii',
      subtitle: 'Cross-Platform Mobile App',
      description: 'Developed a real-time, offline-capable app with Flutter, Firebase, and SQLite, featuring a responsive UI and seamless data synchronization. Implemented push notifications and location-based services.',
      tags: ['Flutter', 'Firebase', 'SQLite', 'Dart', 'Google Maps'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#06b6d4',
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
    {
      title: 'Task Manager API',
      subtitle: 'RESTful Backend Service',
      description: 'Built a scalable task management API with authentication, rate limiting, and comprehensive documentation.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/mahallawy1',
    },
    {
      title: 'Weather Dashboard',
      subtitle: 'Real-time Weather App',
      description: 'Created a responsive weather dashboard with location detection, forecasts, and beautiful data visualizations.',
      tags: ['React', 'TypeScript', 'Chart.js', 'API'],
      github: 'https://github.com/mahallawy1',
    },
    {
      title: 'Portfolio v1',
      subtitle: 'Personal Website',
      description: 'My first portfolio website built with vanilla JavaScript and CSS animations.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/mahallawy1',
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-16 md:py-20 px-6 bg-[#0f0f0f] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#3b82f6]/5 to-transparent rounded-full blur-3xl" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-4"
          >
            <FaStar className="text-[#3b82f6] text-sm" />
            <span className="text-[#3b82f6] font-mono text-sm tracking-wider">PROJECTS</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            A showcase of my favorite projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div 
                  className="absolute inset-0 rounded-2xl opacity-50 blur-3xl transition-all duration-500 group-hover:opacity-70"
                  style={{ backgroundColor: project.color }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
                  <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                    <div className="text-center p-6">
                      <div 
                        className="w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <FaCodeBranch className="text-2xl" style={{ color: project.color }} />
                      </div>
                      <p className="text-[#a1a1aa] font-mono text-sm">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center gap-2 text-sm"
                      >
                        <FaGithub /> Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg text-white transition-all flex items-center gap-2 text-sm"
                        style={{ backgroundColor: project.color }}
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-4' : 'lg:pr-4'}`}>
                <span 
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-mono mb-3 border"
                  style={{ 
                    backgroundColor: `${project.color}10`,
                    borderColor: `${project.color}30`,
                    color: project.color,
                  }}
                >
                  Featured Project
                </span>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 hover:text-[#3b82f6] transition-colors cursor-default">
                  {project.title}
                </h3>
                
                <p className="text-[#60a5fa] font-medium mb-4">{project.subtitle}</p>
                
                <div className="glass-strong rounded-xl p-5 mb-5">
                  <p className="text-[#a1a1aa] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/5 text-[#a1a1aa] border border-white/10 hover:border-[#3b82f6]/50 hover:text-[#3b82f6] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors group text-sm"
                  >
                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                    <span>View Source</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors group text-sm"
                  >
                    <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-bold text-center text-white mb-3"
          >
            Other Noteworthy Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-[#a1a1aa] text-center mb-10 text-sm"
          >
            Click to view source code on GitHub
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="glass rounded-xl p-6 card-hover group cursor-pointer block"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3b82f6]/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaFolder className="text-xl text-[#3b82f6]" />
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: hoveredProject === index ? 45 : 0,
                      scale: hoveredProject === index ? 1.2 : 1,
                    }}
                    className="text-[#a1a1aa] group-hover:text-[#3b82f6] transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#3b82f6] transition-colors">
                  {project.title}
                </h4>
                <p className="text-[#60a5fa] text-xs font-medium mb-3">{project.subtitle}</p>
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono text-[#a1a1aa]/70 px-2 py-1 bg-white/5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          {/* View More Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-10"
          >
            <a
              href="https://github.com/mahallawy1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-sm px-6 py-3"
            >
              <FaGithub className="text-lg" />
              View More on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;