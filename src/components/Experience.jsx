import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: "I'SUPPLY",
      location: 'Onsite',
      date: '07/2023 – 10/2023',
      description: [
        'Tested and maintained software systems based on the Laravel framework using Postman and Selenium.',
        'Collaborated with development teams to identify and resolve bugs, enhancing system reliability.',
      ],
    },
    {
      title: 'Full Stack Training',
      company: 'Sprints',
      location: 'Training Program',
      date: '06/2022 – 08/2022',
      description: [
        'Developed both front-end and back-end components of web platforms, including database integration.',
        'Gained hands-on experience with modern web development technologies and best practices.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title - Centered */}
          <div className="text-center mb-20">
            <p className="text-[#3b82f6] font-mono mb-5 text-lg">02. Experience</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Where I've Worked</h2>
          </div>

          {/* Experience Cards - Centered */}
          <div className="max-w-4xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass rounded-3xl p-10 md:p-12 card-hover"
              >
                {/* Company Badge */}
                <div className="flex items-center gap-3 text-[#3b82f6] mb-5">
                  <FaBriefcase className="text-xl" />
                  <span className="font-mono text-lg font-medium">{exp.company}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  {exp.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-5 text-base md:text-lg text-[#a1a1aa] mb-8">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl">
                    <FaCalendar className="text-[#3b82f6]" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl">
                    <FaMapMarkerAlt className="text-[#3b82f6]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#a1a1aa] text-lg md:text-xl">
                      <span className="text-[#3b82f6] mt-1 text-2xl">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;