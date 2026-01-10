// components/Projects.jsx - Updated with new colors
import React, { useRef, useState, useMemo, useCallback } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px', amount: 0.1 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 }
    }
  }), [prefersReducedMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }), [prefersReducedMotion]);

  const handleMouseEnter = useCallback((index) => {
    setHoveredProject(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  const featuredProjects = useMemo(() => [
    {
      title: 'EduAi',
      subtitle: 'Microservices-Based E-Learning Platform',
      description: 'Developed an e-learning platform using a microservices architecture, delivering core services for payments, user management, webhooks, and frontend interfaces. Implemented real-time collaboration features and AI-powered learning recommendations.',
      tags: ['Microservices', 'Node.js', 'React', 'Docker', 'Kubernetes', 'Redis'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#FE7F2D',
    },
    {
      title: 'Distributed Image Processing',
      subtitle: 'Scalable AWS-Based System',
      description: 'Built a scalable image processing system on AWS, leveraging Python, OpenCV, and MPI/OpenCL for parallel, fault-tolerant image operations, including filtering and edge detection. Achieved 10x performance improvement over sequential processing.',
      tags: ['Python', 'AWS', 'OpenCV', 'MPI', 'OpenCL', 'Lambda'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#215E61',
    },
    {
      title: 'Wassalnii',
      subtitle: 'Cross-Platform Mobile App',
      description: 'Developed a real-time, offline-capable app with Flutter, Firebase, and SQLite, featuring a responsive UI and seamless data synchronization. Implemented push notifications and location-based services.',
      tags: ['Flutter', 'Firebase', 'SQLite', 'Dart', 'Google Maps'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#233D4D',
    },
  ], []);

  const otherProjects = useMemo(() => [
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
  ], []);

  return (
    <section 
      id="projects" 
      className="py-16 md:py-20 px-6 bg-[var(--bg-primary)] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30 will-change-auto" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#215E61]/5 to-transparent rounded-full blur-3xl will-change-auto" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#215E61]/10 border border-[#215E61]/20 mb-4"
          >
            <FaStar className="text-[#FE7F2D] text-sm" />
            <span className="text-[#FE7F2D] font-mono text-sm tracking-wider">PROJECTS</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
           Projects I've <span className="text-[#FE7F2D]">Built</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A showcase of my favorite projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="space-y-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard 
              key={project.title}
              project={project}
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Other Projects */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-xl md:text-2xl font-bold text-center text-[var(--text-primary)] mb-3"
          >
            Other Noteworthy Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-[var(--text-secondary)] text-center mb-10 text-sm"
          >
          </motion.p>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {otherProjects.map((project, index) => (
              <OtherProjectCard
                key={project.title}
                project={project}
                index={index}
                isHovered={hoveredProject === index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                variants={itemVariants}
              />
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.3 }}
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

// Featured Project Card Component
const FeaturedProjectCard = React.memo(({ project, index, variants }) => (
  <motion.div
    variants={variants}
    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
  >
    {/* Project Image */}
    <div className="w-full lg:w-1/2 relative group">
      <div 
        className="absolute inset-0 rounded-2xl opacity-50 blur-3xl transition-opacity duration-300 group-hover:opacity-70 will-change-opacity"
        style={{ backgroundColor: project.color }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-card)]">
        <div className="aspect-video bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] flex items-center justify-center">
          <div className="text-center p-6">
            <div 
              className="w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: `${project.color}20` }}
            >
              <FaCodeBranch className="text-2xl" style={{ color: project.color }} />
            </div>
            <p className="text-[var(--text-muted)] font-mono text-sm">Project Preview</p>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <FaGithub /> Code
            </a>
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-white transition-colors duration-200 flex items-center gap-2 text-sm"
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
      
      
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-2 hover:text-[#FE7F2D] transition-colors duration-200 cursor-default">
        {project.title}
      </h3>
      
      <p className="text-[#215E61] dark:text-[#FE7F2D] font-medium mb-4">{project.subtitle}</p>
      
      <div className="glass-strong rounded-xl p-5 mb-5">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--glass-border)] hover:border-[#FE7F2D]/50 hover:text-[#FE7F2D] transition-colors duration-200 cursor-default"
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
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group text-sm"
        >
          <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-200" />
          <span>View Source</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group text-sm"
        >
          <FaExternalLinkAlt className="group-hover:scale-110 transition-transform duration-200" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
));

FeaturedProjectCard.displayName = 'FeaturedProjectCard';

// Other Project Card Component
const OtherProjectCard = React.memo(({ project, index, isHovered, onMouseEnter, onMouseLeave, variants }) => (
  <motion.a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    variants={variants}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="glass rounded-xl p-6 card-hover group cursor-pointer block"
  >
    {/* Header */}
    <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#215E61]/20 to-[#FE7F2D]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        <FaFolder className="text-xl text-[#FE7F2D]" />
      </div>
      <div 
        className={`text-[var(--text-secondary)] group-hover:text-[#FE7F2D] transition-all duration-200 ${isHovered ? 'rotate-45 scale-110' : ''}`}
      >
        <FaExternalLinkAlt className="text-sm" />
      </div>
    </div>

    {/* Content */}
    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1 group-hover:text-[#FE7F2D] transition-colors duration-200">
      {project.title}
    </h4>
    <p className="text-[#215E61] dark:text-[#FE7F2D] text-xs font-medium mb-3">{project.subtitle}</p>
    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
      {project.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag) => (
        <span 
          key={tag} 
          className="text-xs font-mono text-[var(--text-muted)] px-2 py-1 bg-[var(--bg-secondary)] dark:bg-[#233D4D] rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.a>
));

OtherProjectCard.displayName = 'OtherProjectCard';

export default Projects;