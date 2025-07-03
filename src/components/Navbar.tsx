import React, { useState, useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false); // Close mobile menu after click
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={handleNavClick}
              className="text-white font-bold text-lg md:text-xl hover:text-purple-400 transition-colors duration-300"
            >
              Piyush Yadav
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                About
              </a>
              <a
                href="#work"
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Work
              </a>
              <a
                href="#career"
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Career
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Email (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="mailto:piyushkrishnadutt@gmail.com"
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 border border-purple-500/30 hover:border-purple-400 px-4 py-2 rounded-full"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 p-2 rounded-md transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : ""
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2 border border-purple-500/20">
            <a
              href="#home"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              About
            </a>
            <a
              href="#work"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Work
            </a>
            <a
              href="#career"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Career
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="mailto:piyushkrishnadutt@gmail.com"
              className="text-purple-400 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-400 mt-3"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
