import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const phoneNumber = 6304953635;  // Replace with your actual phone number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;

  return (
    <section id="contact-us" className="relative py-20 bg-black overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 blur-[2px]"
        style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
        <motion.h2 
          className="text-5xl font-extrabold mb-4 tracking-wide font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Reach Out to <span className="text-green-400 font-[Dancing Script]">Me!</span>
        </motion.h2>

        <motion.p 
          className="text-lg mb-8 font-[Montserrat] text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Have any questions or want to start a project? Let’s talk! Click below to start a WhatsApp chat.
        </motion.p>
        
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xl font-semibold rounded-xl shadow-2xl transition-all transform hover:scale-110 hover:rotate-3 hover:shadow-green-500/50"
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-3xl mr-3 animate-pulse text-green-300" />
          <span className="font-[Raleway]">Chat with me on WhatsApp</span>
        </motion.a>
        
        {/* Optional description */}
        <motion.p
          className="mt-6 text-lg opacity-0 font-[Crimson Pro] text-gray-400"
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I'm always ready to assist you with your needs. Whether it's a project or just a question, feel free to reach out.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactUs;