import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">
          Nitesh Kumar Sharma
        </h1>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 md:inline hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 md:inline hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 md:inline hover:text-blue-400 transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 md:inline hover:text-blue-400 transition"
          >
            Contact
          </Link>
          <Link
            to="/admin/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 md:inline hover:text-blue-400 transition"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
