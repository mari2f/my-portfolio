import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/mari2f', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/marimuthu-%E2%80%8E-2b90b5201/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:marimuthuchidambaram006@email.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-blue-400 mb-4">SAP BTP Consultant</div>
            <p className="text-gray-400 leading-relaxed">
              Experienced SAP Developer specializing in SAP Fiori and BTP CAPM solutions and modern SAP technologies. Building the future of business applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Experience', 'Portfolio', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>marimuthuchidambaram006@gmail.com</p>
              <p>+91 99943 25334</p>
              <p>Remote / Global</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target='_blank'
                rel='noopener noreferrer'
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} />
            </motion.div>
            <span>by SAP Developer</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          <p>&copy; 2025 SAP Developer Portfolio. All rights reserved. @Marimuthu</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;