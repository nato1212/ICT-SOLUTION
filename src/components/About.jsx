import founder from "../assets/my_photo.jpg";

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          About Us
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          We are a leading ICT solutions provider, specializing in innovative
          and efficient digital solutions. Our team is passionate about
          leveraging technology to drive business success and streamline
          processes.
        </p>

        {/* Founder Section */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
            Meet the Founder
          </h3>

          <div className="flex justify-center mb-6">
            <img
              src={founder}
              alt="Founder Image"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our founder, Natanan, is a visionary in the ICT industry. With a
            passion for technology and a deep commitment to solving real-world
            problems, Natanan started this company with the goal of providing
            innovative solutions that drive efficiency and growth for businesses
            across various sectors.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With years of experience and a keen understanding of business needs,
            Natanan continues to lead the company with a focus on integrity,
            customer satisfaction, and sustainable innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-blue-50 dark:bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to empower businesses through cutting-edge ICT
              solutions that enhance productivity, security, and efficiency.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our vision is to be a global leader in the ICT industry,
              transforming the way organizations harness technology for growth
              and innovation.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Our Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We value integrity, innovation, and customer satisfaction. We are
              committed to delivering high-quality solutions with a focus on
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
