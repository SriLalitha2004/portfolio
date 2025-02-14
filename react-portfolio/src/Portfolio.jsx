import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

const projects = [
  {
    title: "Jobby App",
    img: "https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png",
    github: "https://github.com/SriLalitha2004/jobbyApp",
    live_link : "https://sriproject1.ccbp.tech/",
    
  },
  {
    title: "Nxt Trendz",
    description: "",
    img: "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png",
    github: "https://github.com/SriLalitha2004/nxtApp.git",
    live_link : "https://sriproject2.ccbp.tech/",
  },


  {
    title: "Todos Application",
    description: "",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20230606125727/gfg.png",
    github: "https://github.com/SriLalitha2004/Simple-Todo",
    live_link : "https://todosp.ccbp.tech/",
  }
];

Modal.setAppElement("#root");

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

 
    <section id="projects" className="py-16 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
          Projects
        </h2>
      <div className="container mx-auto relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-blue-500 h-full"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center w-full max-w-4xl my-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                View Project
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      >
        {selectedProject && (
          <div className="bg-gray-900 p-6 rounded-lg text-center max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.github_Frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
            >
              View on GitHub
            </a>
            <a
              href={selectedProject.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-green-600 text-white rounded-lg mb-4"
            >
              View on Live
            </a>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;