import React from 'react';
import { Calendar, MapPin, Building, Code, Database, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2022-2024',
      title: 'DSR (Daily Status Report)',
      role: 'Full Stack Developer',
      company: 'Enterprise Solutions',
      location: 'Remote',
      description: 'I developed and enhanced a system for managing daily status reports, including features for tracking work updates, leave management, and storing employee details. I implemented modules for daily submissions, admin views, and report generation. Focused on creating a responsive UI and ensuring data accuracy with integrated validations. This streamlined employee reporting and improved overall system efficiency.',
      technologies: ['ABAP', 'SAP Fiori', 'HANA DB', 'OData', 'UI5'],
      icon: <Database size={24} />
    },
    {
      year: '2023-2024',
      title: 'Kaitongo',
      role: 'Frontend Developer',
      company: 'Digital Innovation Hub',
      location: 'Hybrid',
      description: 'At Kaitongo, I enhanced advanced search functionality, implemented role-based interfaces, and optimized the mobile experience. I improved newsletter rendering using Jinja, added custom templates, and advanced report filtering and scheduling. I worked on optimizing API performance, implementing prompt updates, and enhancing news accuracy through AI retries. I also contributed to performance tuning in Weaviate and OpenSearch, and collaborated with cross-functional teams to refine UI, newsletters, and system tracking features.',
      technologies: ['JavaScript', 'React', 'Node.js', 'API Integration', 'UI/UX'],
      icon: <Code size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in SAP development and enterprise solutions over the past 3 years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 hidden lg:block"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full items-center justify-center text-white z-10">
                  {exp.icon}
                </div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                    {/* Year Badge */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4"
                    >
                      <Calendar size={16} className="mr-2" />
                      {exp.year}
                    </motion.div>

                    {/* Title and Role */}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {exp.role}
                    </h4>

                    {/* Company and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;