import React from "react";
import {
  FaNetworkWired,
  FaCloud,
  FaMicrochip,
  FaTools,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    title: "Network Solutions",
    icon: <FaNetworkWired className="text-4xl text-blue-600 mb-4" />,
    description:
      "Design and implement reliable network infrastructure for business-critical applications.",
  },
  {
    title: "Cloud Services",
    icon: <FaCloud className="text-4xl text-blue-600 mb-4" />,
    description:
      "Deploy and manage scalable cloud solutions to accelerate your digital transformation.",
  },
  {
    title: "IoT & Automation",
    icon: <FaMicrochip className="text-4xl text-blue-600 mb-4" />,
    description:
      "Smart IoT systems for homes, agriculture, and industry—enhancing efficiency and control.",
  },
  {
    title: "IT Maintenance",
    icon: <FaTools className="text-4xl text-blue-600 mb-4" />,
    description:
      "Proactive support and preventive maintenance to keep your systems up and running.",
  },
  {
    title: "Cybersecurity",
    icon: <FaShieldAlt className="text-4xl text-blue-600 mb-4" />,
    description:
      "Secure your IT environment with firewalls, monitoring, and penetration testing.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    description:
      "Modern websites and web apps built to impress, perform, and grow your business.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Our Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          From planning to implementation, we offer complete ICT solutions that
          fuel innovation and optimize performance.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-start">
                {service.icon}
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
