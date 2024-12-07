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
import "./../index.css";

const Header = ({ onLogoClick }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${showNav ? "translate-y-0" : "-translate-y-full"} bg-transparent text-white p-4 sticky top-0 z-50 transition-transform duration-300 backdrop-blur-sm shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLogoClick();
            document.getElementById("hero-section").scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="Logo" className="h-14 w-14 rounded-full" />
        </a>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-fuchsia-800 focus:outline-none" aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-full right-0 w-full md:w-auto md:static ${
            menuOpen ? "block bg-fuchsia-200 bg-opacity-80 backdrop-blur-lg shadow-lg" : "hidden"
          } md:bg-transparent md:border-none md:shadow-none md:rounded-none transition-all duration-300 ease-in-out z-40`}
        >
          <ul className="nav-links flex flex-row items-center justify-center gap-6 p-4 md:p-0">
            <li>
              <a href="#about" className="block py-2 px-4 font-concert text-fuchsia-800 hover:text-slate-950 transition-transform duration-300 ease-in-out">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="block py-2 px-4 font-concert text-fuchsia-800 hover:text-slate-950 transition-transform duration-300 ease-in-out">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4 font-concert text-fuchsia-800 hover:text-slate-950 transition-transform duration-300 ease-in-out">
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
