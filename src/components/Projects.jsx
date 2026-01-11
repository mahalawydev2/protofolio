// components/Projects.jsx - Fixed for Mobile
import React, { useRef, useState, useMemo, useCallback } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaStar, 
  FaCodeBranch,
  FaFilm,
  FaCode,
  FaServer,
  FaDatabase,
  FaBook,
  FaComments
} from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.05 });
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
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
      image: '/img/eduai-preview.png', // Add your image path
    },
    {
      title: 'Distributed Image Processing',
      subtitle: 'Scalable AWS-Based System',
      description: 'Built a scalable image processing system on AWS, leveraging Python, OpenCV, and MPI/OpenCL for parallel, fault-tolerant image operations, including filtering and edge detection. Achieved 10x performance improvement over sequential processing.',
      tags: ['Python', 'AWS', 'OpenCV', 'MPI', 'OpenCL', 'Lambda'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#215E61',
      image: '/img/distributed-img-preview.png', // Add your image path
    },
    {
      title: 'Wassalnii',
      subtitle: 'Cross-Platform Mobile App',
      description: 'Developed a real-time, offline-capable app with Flutter, Firebase, and SQLite, featuring a responsive UI and seamless data synchronization. Implemented push notifications and location-based services.',
      tags: ['Flutter', 'Firebase', 'SQLite', 'Dart', 'Google Maps'],
      github: 'https://github.com/mahallawy1',
      live: '#',
      color: '#233D4D',
      image: '/img/wassalnii-preview.png', // Add your image path
    },
  ], []);

  const otherProjects = useMemo(() => [
    {
      title: 'Cinema Desktop App',
      subtitle: 'Java/JavaFX Application',
      description: 'Designed and implemented a Java/JavaFX application connected to MySQL for comprehensive movie data management.',
      tags: ['Java', 'JavaFX', 'MySQL'],
      github: 'https://github.com/mahallawy1',
      icon: FaFilm,
      iconColor: '#E50914',
    },
    {
      title: 'Mini-Fortran Compiler',
      subtitle: 'Python Compiler Implementation',
      description: 'Developed a FORTRAN grammar and implemented a mini-compiler in Python supporting lexical analysis, parse trees, error detection, and recovery.',
      tags: ['Python', 'Compiler Design', 'Parsing'],
      github: 'https://github.com/mahallawy1',
      icon: FaCode,
      iconColor: '#3776AB',
    },
    {
      title: 'Modified Minix3 OS',
      subtitle: 'Kernel Enhancement',
      description: 'Enhanced and recompiled the kernel for Minix3 OS using C, with deployment and testing via WinSCP and Teraterm.',
      tags: ['C', 'Operating Systems', 'Kernel'],
      github: 'https://github.com/mahallawy1',
      icon: FaServer,
      iconColor: '#A8B9CC',
    },
    {
      title: 'Bash DBMS',
      subtitle: 'Database Management in Bash',
      description: 'A database management system written entirely in bash. Supports creating/dropping databases and tables, CRUD operations, primary keys, and data types using flat files and metadata.',
      tags: ['Bash', 'Shell', 'File System'],
      github: 'https://github.com/mahallawy1',
      icon: FaDatabase,
      iconColor: '#4EAA25',
    },
    {
      title: 'Library Management System',
      subtitle: 'Design Patterns Implementation',
      description: 'Built a library management system implementing decorator, factory, and singleton design patterns with layered architecture, DAO pattern, MySQL database, and JUnit testing.',
      tags: ['Java', 'MySQL', 'Design Patterns', 'JUnit'],
      github: 'https://github.com/mahallawy1',
      icon: FaBook,
      iconColor: '#B07219',
    },
    {
      title: 'P2P Chat',
      subtitle: 'Peer-to-Peer Chat Application',
      description: 'A peer-to-peer chat application with Python supporting direct messaging, chat rooms, user authentication, and real-time online status tracking via UDP heartbeat messages with MongoDB persistence.',
      tags: ['Python', 'MongoDB', 'Sockets', 'UDP'],
      github: 'https://github.com/mahallawy1',
      icon: FaComments,
      iconColor: '#47A248',
    },
  ], []);

  return (
    <section 
      id="projects" 
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background - Made responsive and less resource intensive */}
      <div className="absolute inset-0 bg-dots opacity-20 md:opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[40vh] md:h-[60vh] max-h-[800px] bg-gradient-to-b from-[#215E61]/5 to-transparent rounded-full blur-2xl md:blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#215E61]/10 border border-[#215E61]/20 mb-3 md:mb-4"
          >
            <FaStar className="text-[#FE7F2D] text-xs md:text-sm" />
            <span className="text-[#FE7F2D] font-mono text-xs md:text-sm tracking-wider">PROJECTS</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 md:mb-4">
            Projects I've <span className="text-[#FE7F2D]">Built</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            A showcase of my favorite projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="space-y-10 md:space-y-16 mb-12 md:mb-16"
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
            className="text-lg sm:text-xl md:text-2xl font-bold text-center text-[var(--text-primary)] mb-2 md:mb-3"
          >
            Other Noteworthy Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-[var(--text-secondary)] text-center mb-6 md:mb-10 text-xs md:text-sm"
          >
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
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
            className="text-center mt-8 md:mt-10"
          >
            <a
              href="https://github.com/mahallawy1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3"
            >
              <FaGithub className="text-base md:text-lg" />
              View More on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Featured Project Card Component - Fixed for Mobile with Image Support
const FeaturedProjectCard = React.memo(({ project, index, variants }) => (
  <motion.div
    variants={variants}
    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}
  >
    {/* Project Image */}
    <div className="w-full lg:w-1/2 relative group">
      {/* Background glow - reduced on mobile */}
      <div 
        className="absolute inset-0 rounded-xl md:rounded-2xl opacity-20 md:opacity-50 blur-xl md:blur-3xl transition-opacity duration-300 group-hover:opacity-70 pointer-events-none"
        style={{ backgroundColor: project.color }}
      />
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-card)]">
        <div className="aspect-video bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] flex items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[250px]">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : null}
          <div className={`text-center p-4 md:p-6 ${project.image ? 'hidden' : 'block'}`}>
            <div 
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl mx-auto mb-2 md:mb-3 flex items-center justify-center"
              style={{ backgroundColor: `${project.color}20` }}
            >
              <FaCodeBranch className="text-xl md:text-2xl" style={{ color: project.color }} />
            </div>
            <p className="text-[var(--text-muted)] font-mono text-xs md:text-sm">Project Preview</p>
          </div>
        </div>
        
        {/* Overlay - Hidden on touch devices, shown on hover for desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end justify-center pb-4 md:pb-6">
          <div className="flex gap-2 md:gap-3">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 md:px-5 py-2 md:py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-200 flex items-center gap-2 text-xs md:text-sm"
            >
              <FaGithub /> Code
            </a>
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-white transition-colors duration-200 flex items-center gap-2 text-xs md:text-sm"
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
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-1 md:mb-2 hover:text-[#FE7F2D] transition-colors duration-200 cursor-default">
        {project.title}
      </h3>
      
      <p className="text-[#215E61] dark:text-[#FE7F2D] font-medium mb-3 md:mb-4 text-sm md:text-base">{project.subtitle}</p>
      
      <div className="glass-strong rounded-lg md:rounded-xl p-4 md:p-5 mb-4 md:mb-5">
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-mono rounded-md md:rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--glass-border)] hover:border-[#FE7F2D]/50 hover:text-[#FE7F2D] transition-colors duration-200 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 md:gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 md:gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group text-xs md:text-sm"
        >
          <FaGithub className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-200" />
          <span>View Source</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 md:gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 group text-xs md:text-sm"
        >
          <FaExternalLinkAlt className="text-sm md:text-base group-hover:scale-110 transition-transform duration-200" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
));

FeaturedProjectCard.displayName = 'FeaturedProjectCard';

// Other Project Card Component - Fixed for Mobile with Custom Icons
const OtherProjectCard = React.memo(({ project, index, isHovered, onMouseEnter, onMouseLeave, variants }) => {
  const IconComponent = project.icon;
  
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="glass rounded-lg md:rounded-xl p-4 md:p-6 card-hover group cursor-pointer block min-h-[180px] md:min-h-[220px]"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div 
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: `${project.iconColor}20` }}
        >
          <IconComponent 
            className="text-lg md:text-xl" 
            style={{ color: project.iconColor }} 
          />
        </div>
        <div 
          className={`text-[var(--text-secondary)] group-hover:text-[#FE7F2D] transition-all duration-200 ${isHovered ? 'rotate-45 scale-110' : ''}`}
        >
          <FaExternalLinkAlt className="text-xs md:text-sm" />
        </div>
      </div>

      {/* Content */}
      <h4 className="text-base md:text-lg font-bold text-[var(--text-primary)] mb-0.5 md:mb-1 group-hover:text-[#FE7F2D] transition-colors duration-200 line-clamp-1">
        {project.title}
      </h4>
      <p className="text-[#215E61] dark:text-[#FE7F2D] text-[10px] md:text-xs font-medium mb-2 md:mb-3">{project.subtitle}</p>
      <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 md:gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] md:text-xs font-mono text-[var(--text-muted)] px-1.5 md:px-2 py-0.5 md:py-1 bg-[var(--bg-secondary)] dark:bg-[#233D4D] rounded"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-[10px] md:text-xs font-mono text-[var(--text-muted)] px-1.5 md:px-2 py-0.5 md:py-1">
            +{project.tags.length - 3}
          </span>
        )}
      </div>
    </motion.a>
  );
});

OtherProjectCard.displayName = 'OtherProjectCard';

export default Projects;