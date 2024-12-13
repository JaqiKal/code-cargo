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
import "./../index.css";

const Header = ({ onLogoClick }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

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

  // Handle link click to fade out the menu
  const handleLinkClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setMenuOpen(false);
      setFadeOut(false); // Reset fade-out state after closing
    }, 500); // 500ms to match the CSS transition duration
  };

  return (
    <header
      className={`${showNav ? "translate-y-0" : "-translate-y-full"} sticky top-0 z-50 bg-transparent p-4 text-white shadow-md backdrop-blur-2xl transition-transform duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero-section" aria-label="Back to Hero Section">
          <p className="text-heroTextColor block px-1 py-2 text-xl font-semibold transition-transform duration-300 ease-in-out hover:text-slate-950 md:text-2xl">
            Jacqueline Kalmár
          </p>
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-fuchsia-800 focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute right-0 top-full w-full md:static md:w-auto ${
            menuOpen
              ? `block bg-fuchsia-300 bg-opacity-95 shadow-lg backdrop-blur-lg ${fadeOut ? "fade-out" : ""}`
              : "hidden md:flex"
          } z-40 transition-all duration-300 ease-in-out md:rounded-none md:border-none md:bg-transparent md:shadow-none`}
        >
          <ul
            className="nav-links flex flex-row items-center justify-center gap-6 p-4 md:p-0"
            onClick={handleLinkClick}
          >
            <li>
              <a
                href="#about"
                className="text-heroTextColor block px-1 py-2 text-xl font-semibold transition-transform duration-300 ease-in-out hover:text-fuchsia-800 md:text-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-heroTextColor block px-1 py-2 text-xl font-semibold transition-transform duration-300 ease-in-out hover:text-fuchsia-800 md:text-2xl"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-heroTextColor block px-1 py-2 text-xl font-semibold transition-transform duration-300 ease-in-out hover:text-fuchsia-800 md:text-2xl"
              >
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
