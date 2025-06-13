import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SAP Fiori Launchpad',
      category: 'sap',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom SAP Fiori launchpad with role-based tiles and responsive design',
      technologies: ['SAP Fiori', 'UI5', 'OData', 'ABAP']
    },
    {
      id: 2,
      title: 'ABAP Report Generator',
      category: 'abap',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Automated report generation system with dynamic selection screens',
      technologies: ['ABAP', 'ALV', 'Smart Forms', 'SAP Script']
    },
    {
      id: 3,
      title: 'Employee Management App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mobile application for employee data management and reporting',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'REST API']
    },
    {
      id: 4,
      title: 'SAP Integration Hub',
      category: 'integration',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Middleware solution for SAP system integrations and data exchange',
      technologies: ['SAP PI/PO', 'REST', 'SOAP', 'JSON']
    },
    {
      id: 5,
      title: 'HANA Analytics Dashboard',
      category: 'analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time analytics dashboard using SAP HANA and CDS views',
      technologies: ['SAP HANA', 'CDS Views', 'AMDP', 'Analytics Cloud']
    },
    {
      id: 6,
      title: 'Workflow Automation',
      category: 'workflow',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Business process automation with approval workflows',
      technologies: ['SAP Workflow', 'Business Rules', 'Forms', 'Notifications']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Code size={16} /> },
    { id: 'sap', label: 'SAP Fiori', icon: <Smartphone size={16} /> },
    { id: 'abap', label: 'ABAP', icon: <Code size={16} /> },
    { id: 'integration', label: 'Integration', icon: <Database size={16} /> },
    { id: 'analytics', label: 'Analytics', icon: <Database size={16} /> },
    { id: 'workflow', label: 'Workflow', icon: <Code size={16} /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore my SAP development projects showcasing enterprise solutions and technical expertise.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
                }`}
              >
                {filter.icon}
                <span className="ml-2">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;