import React from 'react';
import { FaGithub, FaLinkedin,  FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Footer Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          {/* Logo or Brand */}
          <motion.div
            className="text-3xl font-bold text-blue-500"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h1></h1>
          </motion.div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 sm:mt-0">
            <motion.a
              href="#about"
              className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.3 }}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.3 }}
            >
              Projects 
            </motion.a>
            <motion.a
              href="#skills"
              className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.3 }}
            >
              Skills
            </motion.a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex gap-6 mb-6 sm:mb-0">
            <motion.a
              href="https://github.com/SriLalitha2004"
              target="_blank"
              rel="noopener noreferrer"


              className="text-3xl hover:text-gray-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/srilalitha-veeraboina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://instagram.com/srilalitha_saidulu22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Copyright Text */}
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sri Lalitha Veeraboina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;