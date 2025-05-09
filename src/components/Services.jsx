// components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Our Services
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          We offer a wide range of ICT solutions to help your business scale,
          innovate, and operate more efficiently.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Consulting
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We provide expert consulting services to help your business align
              technology with your goals for maximum impact.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              System Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our system integration services ensure your software, hardware,
              and networks work together seamlessly for optimal performance.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Support & Maintenance
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We offer comprehensive support and maintenance services to ensure
              your ICT systems remain efficient, secure, and up-to-date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
