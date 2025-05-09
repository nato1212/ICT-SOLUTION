import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 px-6 dark:bg-blue-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">ICT Solutions</h3>
          <p className="text-sm">
            Empowering businesses through reliable ICT infrastructure,
            innovation, and smart technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Networking</li>
            <li>Cloud Computing</li>
            <li>IoT & Automation</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/natanan-amsalu-melese-5879ba204/"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-blue-700 pt-4">
        &copy; {new Date().getFullYear()} ICT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
