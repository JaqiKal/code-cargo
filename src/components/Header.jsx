/**
 * Header  Component
 *
 * This component displays the navigation bar, including my name and
 * links to different sections of the portfolio.
 *
 * Features:
 * - Fixed at the top of the page (sticky).
 * - Disappears on scroll down and reappears on scroll up for better visibility.
 * - Responsive navigation with links to different sections of the portfolio.
 * - Hidden name for screen readers.
 * - Utilizes React state and scroll events to manage visibility dynamically.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";

const Header = ({ onLogoClick }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false); // Hide navbar when scrolling down
      } else {
        setShowNav(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-transparent text-white p-4 sticky top-0 z-50 shadow-custom-colored backdrop-blur-sm transition-transform duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link action
              onLogoClick(); // Disable animation
              document.getElementById("hero-section").scrollIntoView({ behavior: "smooth" }); // Scroll to hero
            }}
            aria-label="Go to homepage"
            className="group"
          >
            <img
              src={logo}
              alt="Logo"
              className="rounded-full h-14 w-14 transform transition-transform duration-300 ease-in-out group-hover:animate-tilt"
            />
          </a>
          <h1 className="sr-only">Jaqi</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="font-semibold text-fuchsia-800 hover:text-purple-300">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="font-semibold text-fuchsia-800 hover:text-purple-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="font-semibold text-fuchsia-800 hover:text-purple-300">
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
