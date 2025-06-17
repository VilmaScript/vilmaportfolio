"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu when any link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`sticky top-0 z-[999] flex justify-between items-center py-4 px-8 sm:px-16 text-white transition-colors duration-300 ${
        scrolled ? "bg-surface backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="sm:text-2xl text-lg font-bold text-yellow-300 z-10">
        VeeCodes.
      </div>

      <HiOutlineMenu
        onClick={() => setIsOpen(true)}
        className="sm:hidden block text-white text-3xl cursor-pointer"
        aria-label="Open menu"
      />

      <ul className="sm:flex space-x-4 z-10 hidden">
        <li>
          <a href="#home" className="hover:underline hover:text-yellow-300">
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:underline hover:text-yellow-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline hover:text-yellow-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline hover:text-yellow-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline hover:text-yellow-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile menu */}
<div
  className={`sm:hidden fixed top-0 left-0 w-full h-full bg-surface  z-50 transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } `}
  aria-hidden={!isOpen}
>
  {/* Close icon */}
  <div>
    <IoIosClose
    onClick={() => setIsOpen(false)}
    className="text-white text-4xl cursor-pointer mx-4 mt-4"
    aria-label="Close menu"
  />
  </div>
  {/* Centered links container */}
  <ul className="flex bg-surface flex-col space-y-8 text-white pb-5 items-center ">
    <li>
      <a
        href="#home"
        onClick={handleLinkClick}
        className="hover:underline hover:text-yellow-300"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#skills"
        onClick={handleLinkClick}
        className="hover:underline hover:text-yellow-300"
      >
        Skills
      </a>
    </li>
    <li>
      <a
        href="#projects"
        onClick={handleLinkClick}
        className="hover:underline hover:text-yellow-300"
      >
        Projects
      </a>
    </li>
    <li>
      <a
        href="#about"
        onClick={handleLinkClick}
        className="hover:underline hover:text-yellow-300"
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#contact"
        onClick={handleLinkClick}
        className="hover:underline hover:text-yellow-300"
      >
        Contact
      </a>
    </li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;

