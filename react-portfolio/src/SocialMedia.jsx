import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/srilalitha-veeraboina",
    color: "bg-gradient-to-r from-blue-500 to-blue-800",
    shadow: "shadow-blue-500/50",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/SriLalitha2004",
    color: "bg-gradient-to-r from-gray-700 to-black",
    shadow: "shadow-gray-400/50",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/srilalitha_saidulu22",
    color: "bg-gradient-to-r from-pink-500 to-purple-600",
    shadow: "shadow-pink-500/50",
  },
];

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Enhanced Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-wide mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Let's Connect & <span className="font-[Dancing Script] text-yellow-400">Collaborate</span> 🚀
        </motion.h2>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {socialMedia.map((platform, index) => (
            <motion.div
              key={index}
              className={`relative group ${platform.color} rounded-xl p-6 shadow-lg ${platform.shadow} cursor-pointer transform transition-all hover:scale-110 hover:shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 rounded-xl"
              ></motion.div>

              {/* Social Icon */}
              <motion.div
                className="text-6xl text-white mb-4 group-hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
              >
                {platform.icon}
              </motion.div>

              {/* Platform Name */}
              <h3 className="text-white text-xl font-semibold font-[Poppins] tracking-wide">
                {platform.name}
              </h3>

              {/* Clickable Area */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              ></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;