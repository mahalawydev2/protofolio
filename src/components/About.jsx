import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: 'B.Sc. in Computer Engineering from Ain Shams University',
    },
    {
      icon: <FaCode />,
      title: 'Specialization',
      description: 'Distributed Computing & Software Product Lines',
    },
    {
      icon: <FaRocket />,
      title: 'Focus',
      description: 'Full Stack Development & Cloud Architecture',
    },
  ];

  return (
    <section id="about" className="section-padding bg-[#171717]" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title - Centered */}
          <div className="text-center mb-20">
            <p className="text-[#3b82f6] font-mono mb-5 text-lg">01. About Me</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Who I Am</h2>
          </div>

          {/* Content Grid - Centered */}
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8">
              <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed">
                I'm a <span className="text-white font-semibold">Computer Engineering student</span> at 
                Ain Shams University, passionate about building scalable and efficient software solutions. 
                My journey in tech started with curiosity about how things work, and evolved into a 
                deep passion for creating impactful digital experiences.
              </p>
              <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed">
                With a major in <span className="text-white font-semibold">Distributed Computing</span> and 
                a minor in <span className="text-white font-semibold">Software Product Lines</span>, I specialize 
                in designing systems that scale. From microservices architectures to cloud deployments, 
                I enjoy tackling complex problems and turning them into elegant solutions.
              </p>
              <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in cloud computing and DevOps.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass rounded-2xl p-8 card-hover"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-3xl text-[#3b82f6] p-5 bg-[#3b82f6]/10 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#a1a1aa] text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass rounded-2xl p-8 border border-[#3b82f6]/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-xl md:text-2xl">Ain Shams University</h3>
                  <span className="text-[#3b82f6] font-mono px-5 py-2 bg-[#3b82f6]/10 rounded-full">
                    06/2025
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-lg">Faculty of Engineering (CESS)</p>
                <p className="text-[#60a5fa] text-lg mt-2">Expected Graduation</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;