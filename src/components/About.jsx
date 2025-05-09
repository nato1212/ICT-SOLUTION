import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          At ICT Solutions, we are committed to empowering businesses through
          innovative technology. Our expertise spans across Networking, IoT,
          Cloud Infrastructure, and Automation systems. We deliver secure,
          scalable, and future-ready ICT services tailored to your needs.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide cutting-edge ICT solutions that drive digital
              transformation and efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted global leader in smart infrastructure and
              digital innovation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, Innovation, Excellence, and Customer Satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
