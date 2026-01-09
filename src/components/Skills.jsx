import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGit,
  SiPostman,
  SiFirebase,
  SiFlutter,
  SiReact,
  SiMongodb,
  SiMysql,
  SiLinux,
  SiTypescript,
} from 'react-icons/si';
import { FaJava, FaAws, FaCode } from 'react-icons/fa';
import LogoLoop from './LogoLoop';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const primarySkills = [
    { node: <SiPython style={{ color: '#3776AB' }} />, title: 'Python' },
    { node: <SiJavascript style={{ color: '#F7DF1E' }} />, title: 'JavaScript' },
    { node: <SiReact style={{ color: '#61DAFB' }} />, title: 'React' },
    { node: <SiNodedotjs style={{ color: '#339933' }} />, title: 'Node.js' },
    { node: <SiTypescript style={{ color: '#3178C6' }} />, title: 'TypeScript' },
    { node: <SiDocker style={{ color: '#2496ED' }} />, title: 'Docker' },
    { node: <SiKubernetes style={{ color: '#326CE5' }} />, title: 'Kubernetes' },
    { node: <FaAws style={{ color: '#FF9900' }} />, title: 'AWS' },
    { node: <SiMongodb style={{ color: '#47A248' }} />, title: 'MongoDB' },
    { node: <SiGit style={{ color: '#F05032' }} />, title: 'Git' },
  ];

  const secondarySkills = [
    { node: <SiCplusplus style={{ color: '#00599C' }} />, title: 'C/C++' },
    { node: <FaJava style={{ color: '#ED8B00' }} />, title: 'Java' },
    { node: <SiFlutter style={{ color: '#02569B' }} />, title: 'Flutter' },
    { node: <SiFirebase style={{ color: '#FFCA28' }} />, title: 'Firebase' },
    { node: <SiMysql style={{ color: '#4479A1' }} />, title: 'MySQL' },
    { node: <SiTerraform style={{ color: '#7B42BC' }} />, title: 'Terraform' },
    { node: <SiLinux style={{ color: '#FCC624' }} />, title: 'Linux' },
    { node: <SiPostman style={{ color: '#FF6C37' }} />, title: 'Postman' },
    { node: <SiHtml5 style={{ color: '#E34F26' }} />, title: 'HTML5' },
    { node: <SiCss3 style={{ color: '#1572B6' }} />, title: 'CSS3' },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-6 bg-[#0a0a0a] relative overflow-hidden"
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] font-mono text-sm mb-4">
            <FaCode className="text-sm" />
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
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
            fadeOutColor="#0a0a0a"
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
            fadeOutColor="#0a0a0a"
            scaleOnHover={true}
            className="py-4"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;