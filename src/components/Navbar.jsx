import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">ICT Solutions</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
        <button className="md:hidden text-blue-700">☰</button>
      </div>
    </header>
  );
};

export default Navbar;
