import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiDocker, SiKubernetes, SiTerraform, SiGit,
  SiPostman, SiFirebase, SiFlutter
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  ];

  const otherSkills = [
    'Bootstrap', 'FreeRTOS', 'IAR Embedded Workbench', 'Keil 5',
    'VS Code', 'Jira', 'Eclipse', 'Lua', 'AWS', 'MySQL'
  ];

  return (
    <section id="skills" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title - Centered */}
          <div className="text-center mb-20">
            <p className="text-[#3b82f6] font-mono mb-5 text-lg">04. Skills</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Technologies I Work With</h2>
          </div>

          {/* Skills Grid - Centered */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-20">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-5 card-hover group cursor-pointer aspect-square"
                >
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-[#a1a1aa] group-hover:text-white transition-colors text-center font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Other Skills - Centered */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Other Technologies</h3>
              <div className="flex flex-wrap justify-center gap-5">
                {otherSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="px-8 py-4 glass rounded-full text-base md:text-lg text-[#a1a1aa] hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;