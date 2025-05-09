import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-500 text-white relative">
      <div className="text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building the Future with ICT Solutions
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Networking, IoT, Automation, Cloud & More.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
