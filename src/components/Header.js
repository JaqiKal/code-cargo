/**
 * Header  Component
 *
 * This component displays the navigation bar, including my name and
 * links to different sections of the portfolio.
 *
 * Features:
 * - Fixed at the top of the page (sticky).
 * - Responsive navigation with links to different sections of the portfolio.
 * - Hidden name for screen readers.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from "react";
// Import the logo from the assets folder
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    // Fixed header with background and padding
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <a
            href="/code-cargo/"
            aria-label="Go to homepage"
            className="group" // Group for hover effects
          >
            <img
              src={logo} // Use the imported logo
              alt="Logo"
              className="rounded-full h-14 w-14 transform transition-transform duration-300 ease-in-out group-hover:animate-tilt" // Custom animation on hover
            />
          </a>
          {/* Visually hidden name */}
          <h1 className="sr-only">Jaqi</h1>
        </div>
        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
