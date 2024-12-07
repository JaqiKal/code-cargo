/**
 * Header Component
 *
 * This component displays the navigation bar, including the user's logo
 * and links to different sections of the portfolio.
 *
 * Features:
 * - Fixed at the top of the page (sticky behavior).
 * - Disappears on scroll down and reappears on scroll up for better visibility.
 * - Responsive navigation with links to portfolio sections.
 * - Mobile-friendly hamburger menu for smaller screens.
 * - Hidden name for screen readers (accessibility-friendly).
 * - Calls the `onLogoClick` prop when the logo or "home" link is clicked,
 *   allowing parent components to control state (e.g., disable animations).
 * - Smooth transitions and accessibility features using ARIA attributes.
 *
 * Inspired by:
 * - Material Design Guidelines for navigation patterns.
 * - TailwindCSS responsive design practices.
 *
 * Amended from:
 * - [MDN SVG `<path>` Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
 * - [MDN SVG `<svg>` Documentation]https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)
 * - [TailwindCSS Navigation Examples](https://tailwindcss.com/docs/navigation)
 * - [React Documentation on Event Handling](https://reactjs.org/docs/handling-events.html)
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import styles from "./../styles/Header.module.css";

const Header = ({ onLogoClick }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${showNav ? "translate-y-0" : "-translate-y-full"} bg-transparent text-white p-4 sticky top-0 z-50 shadow-custom-colored backdrop-blur-sm transition-transform duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onLogoClick();
              document.getElementById("hero-section").scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Go to homepage"
            className="group"
          >
            <img src={logo} alt="Logo" className="rounded-full h-14 w-14 transform transition-transform duration-300 ease-in-out group-hover:animate-tilt" />
          </a>
          <h1 className="sr-only">Jaqi</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="block md:hidden text-fuchsia-800 focus:outline-none" aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${menuOpen ? "block opacity-100" : "hidden opacity-0"} md:block absolute md:relative top-full right-0 w-3/4 md:w-auto ${
            styles["bg-nav-mobile"]
          } md:bg-transparent transition-all duration-300 ease-in-out z-40 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a href="#about" className="block py-2 px-4 font-concert p-2 text-fuchsia-800 hover:text-slate-950">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="block py-2 px-4 font-concert p-2 text-fuchsia-800 hover:text-slate-950">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4 font-concert p-2 text-fuchsia-800 hover:text-slate-950">
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
