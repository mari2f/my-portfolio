import React from 'react';
import { Award, Users, Coffee, Clock, Code2, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, number: '3+', label: 'Years Experience' },
    { icon: <Users size={32} />, number: '25+', label: 'Projects Completed' },
    { icon: <Coffee size={32} />, number: '500+', label: 'Hours Coding' },
    { icon: <Clock size={32} />, number: '24/7', label: 'Support' }
  ];

  const skills = [
    { name: 'ABAP Programming', percentage: 90 },
    { name: 'SAP Fiori/UI5', percentage: 85 },
    { name: 'SAP HANA', percentage: 80 },
    { name: 'Integration Technologies', percentage: 75 }
  ];

  const technologies = [
    { icon: <Code2 size={24} />, name: 'ABAP', color: 'text-blue-600' },
    { icon: <Database size={24} />, name: 'HANA', color: 'text-green-600' },
    { icon: <Layers size={24} />, name: 'Fiori', color: 'text-purple-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                ABOUT ME
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hello! I'm a dedicated SAP Developer with 3+ years of experience in enterprise application development. I specialize in ABAP programming, SAP Fiori applications, and system integrations that drive business efficiency.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in SAP development has equipped me with deep knowledge of SAP modules, custom development, and modern SAP technologies. I'm passionate about creating scalable solutions that transform business processes.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex space-x-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${tech.color} mb-2`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SD</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">SAP Developer</h3>
                      <p className="text-gray-600 dark:text-gray-300">Enterprise Solutions Expert</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Passionate about building robust SAP solutions that drive digital transformation and business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-gray-800 dark:text-white mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;