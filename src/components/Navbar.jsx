import { React, useState, useEffect } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          {" "}
          <a href="#hero" className="hover:text-blue-300">
            ICT Solutions
          </a>
        </h1>
        <nav className="space-x-6 hidden md:flex">
          <ul className="md:flex space-x-6 text-yellow-950">
            <li>
              <a href="#about" className="hover:text-blue-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 text-sm border px-3 py-1 rounded dark:border-white border-black hover:bg-gray-200 dark:hover:bg-gray-800 text-yellow-950"
          >
            {isDark ? "☀ Light" : "🌙 Dark"}
          </button>
        </nav>
        <button className="md:hidden text-blue-700">☰</button>
      </div>
    </header>
  );
};

export default Navbar;
