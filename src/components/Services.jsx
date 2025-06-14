import React from 'react';
import { Code, Database, Settings, Cloud, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import fiori from '../images/fiori.png';
import capm from '../images/CAPM.png';
import Build from '../images/Build.png';

const Services = () => {
  const services = [
    {
      icon: <img src={fiori} width={30} height={30}/>,
      title: 'SAP UI5',
      description: 'SAP UI5 development, custom Fiori applications, and responsive design for modern user interfaces.'
    },
    {
      icon: <img src={capm} width={30} height={30}/>,
      title: 'SAP CAPM',
      description: 'SAP Cloud Application Programming Model (CAPM) for building enterprise-grade applications with Node.js.'      
    },
    {
      icon:<img src={Build} width={30} height={30}/>,
      title: 'SAP BUILD CODE',
      description: 'SAP Build Code for rapid application development, prototyping, and low-code solutions.'
    },
    {
      icon: <Cloud size={40} />,
      title: 'SAP INTEGRATION',
      description: 'SAP system integration, API development, middleware solutions, and data migration services.'
    },
    {
      icon: <Zap size={40} />,
      title: 'WORKFLOW AUTOMATION',
      description: 'SAP workflow design, business process automation, and approval mechanisms for streamlined operations.'
    },
    {
      icon: <Shield size={40} />,
      title: 'SAP SECURITY',
      description: 'SAP authorization concepts, role design, security audits, and compliance implementation.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            SAP Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive SAP development services with 3+ years of hands-on experience in enterprise solutions.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;