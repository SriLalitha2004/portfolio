import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "from-blue-400 to-blue-600", level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-green-700", level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-green-400 to-green-600", level: "Advanced" },
  { name: "Express.js", icon: <SiExpress />, color: "from-gray-700 to-gray-900", level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-teal-600", level: "Advanced" },
  { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-400 to-yellow-600", level: "Advanced" },
  { name: "Python", icon: <FaPython />, color: "from-blue-500 to-yellow-500", level: "Advanced" },
  { name: "SQL", icon: <FaDatabase />, color: "from-orange-500 to-orange-700", level: "Advanced" },
  { name: "GitHub", icon: <FaGithub />, color: "from-gray-600 to-black", level: "Intermediate" },
  { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-red-600", level: "Advanced" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-700", level: "Advanced" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-wide mb-12 font-[Poppins]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Technical <span className="font-[Dancing Script] text-yellow-400">Skills</span> 💻
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative group bg-gradient-to-r ${skill.color} rounded-xl p-6 shadow-lg shadow-gray-900 cursor-pointer transform transition-all hover:scale-110 hover:shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 rounded-xl"
              ></motion.div>

              {/* Skill Icon */}
              <motion.div
                className="text-6xl text-white mb-4 group-hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-white text-2xl font-bold font-[Poppins] tracking-wide">{skill.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;