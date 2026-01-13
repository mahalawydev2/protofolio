import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiNestjs, SiAngular, SiVuedotjs,
  SiTailwindcss, SiRuby, SiDocker, SiGit,
  SiMongodb, SiPostgresql, SiRedis, SiSupabase,
  SiFirebase, SiLinux, SiNginx, SiApache,
  SiFlutter, SiJest, SiPostman, SiPrisma, SiJira,
} from 'react-icons/si';
import { FaJava, FaAws, FaRedhat, FaCode } from 'react-icons/fa';
import LogoLoop from './LogoLoop';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const primarySkills = [
    { node: <SiTypescript style={{ color: '#3178C6' }} />, title: 'TypeScript' },
    { node: <SiJavascript style={{ color: '#F7DF1E' }} />, title: 'JavaScript' },
    { node: <SiReact style={{ color: '#61DAFB' }} />, title: 'React' },
    { node: <SiNextdotjs style={{ color: '#ffff' }} />, title: 'Next.js' },
    { node: <SiNodedotjs style={{ color: '#339933' }} />, title: 'Node.js' },
    { node: <SiNestjs style={{ color: '#E0234E' }} />, title: 'NestJS' },
    { node: <SiAngular style={{ color: '#DD0031' }} />, title: 'Angular' },
    { node: <SiDocker style={{ color: '#2496ED' }} />, title: 'Docker' },
    { node: <SiGit style={{ color: '#F05032' }} />, title: 'Git' },
    { node: <SiMongodb style={{ color: '#47A248' }} />, title: 'MongoDB' },
    { node: <SiPostgresql style={{ color: '#4169E1' }} />, title: 'PostgreSQL' },
    { node: <FaAws style={{ color: '#FF9900' }} />, title: 'AWS' },
  ];

  const secondarySkills = [
    { node: <SiVuedotjs style={{ color: '#4FC08D' }} />, title: 'Vue.js' },
    { node: <SiTailwindcss style={{ color: '#06B6D4' }} />, title: 'Tailwind CSS' },
    { node: <FaJava style={{ color: '#ED8B00' }} />, title: 'Java' },
    { node: <SiRuby style={{ color: '#CC342D' }} />, title: 'Ruby' },
    { node: <SiRedis style={{ color: '#DC382D' }} />, title: 'Redis' },
    { node: <SiSupabase style={{ color: '#3ECF8E' }} />, title: 'Supabase' },
    { node: <SiFirebase style={{ color: '#FFCA28' }} />, title: 'Firebase' },
    { node: <SiLinux style={{ color: '#FCC624' }} />, title: 'Linux' },
   // { node: <FaRedhat style={{ color: '#EE0000' }} />, title: 'Red Hat' },
    { node: <SiNginx style={{ color: '#009639' }} />, title: 'Nginx' },
    { node: <SiApache style={{ color: '#D22128' }} />, title: 'Apache' },
    { node: <SiFlutter style={{ color: '#02569B' }} />, title: 'Flutter' },
    { node: <SiJest style={{ color: '#C21325' }} />, title: 'Jest' },
    { node: <SiPostman style={{ color: '#FF6C37' }} />, title: 'Postman' },
    { node: <SiPrisma style={{ color: '#ffffff' }} />, title: 'Prisma' },
    { node: <SiJira style={{ color: '#0052CC' }} />, title: 'Jira' },
  ];


  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-6 bg-[var(--bg-secondary)] dark:bg-[#1A252E] relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#215E61]/10 border border-[#215E61]/20 text-[#FE7F2D] font-mono text-sm mb-4">
            <FaCode className="text-sm text-[#FE7F2D]" />
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3">
            Tech <span className="text-[#FE7F2D]">Stack</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Primary Skills Loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 overflow-hidden"
        >
         <LogoLoop
  logos={primarySkills}
  speed={80}
  direction="left"
  logoHeight={48}
  gap={64}
  hoverSpeed={20}
  fadeOut={true}
  fadeOutColor="var(--bg-secondary)"  // <-- Add this line
  scaleOnHover={true}
  className="py-4"
/>
        </motion.div>

        {/* Secondary Skills Loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="overflow-hidden"
        >
          <LogoLoop
  logos={secondarySkills}
  speed={60}
  direction="right"
  logoHeight={40}
  gap={56}
  hoverSpeed={15}
  fadeOut={true}
  fadeOutColor="var(--bg-secondary)"  // <-- Add this line
  scaleOnHover={true}
  className="py-4"
/>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;