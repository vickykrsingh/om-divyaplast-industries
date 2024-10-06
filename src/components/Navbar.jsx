import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For menu and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Links for larger screens */}
      <ul className="hidden md:flex space-x-6 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Icon for smaller screens */}
      <div className="md:hidden text-white" onClick={toggleMenu}>
        <FaBars size={28} />
      </div>

      {/* Slide-in Menu */}
      <div className={`fixed top-0 right-0 h-full bg-primary text-white w-1/2 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <FaTimes size={28} className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col space-y-6 p-8">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#products" onClick={toggleMenu}>Products</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
