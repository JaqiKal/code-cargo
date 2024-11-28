/**
 * Hero Component
 * 
 * This component serves as the introductory section of the portfolio.
 * 
 * Features:
 * - Large text for tagline
 * - CTA button linking to the portfolio section
 * - Centered layout for both mobile and desktop view
 * 
 * Author: JaqiKal
 * Date Nov 2024
 */

import React from 'react'

const Hero = () => {
  return (
    // Full height section with a dark background
    <section
  id="hero" className="h-screen bg-gradient-hero bg-no-repeat bg-cover text-white flex flex-col items-center justify-center"
>
      <div className="text-center">
        {/* Main tagline */}
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to my Portfolio</h1>
        {/* Brief description */}
        <p className="mt-6 text-lg md:text-xl">
          I'm a junior web developer building solutions with precision and passion.
        </p>
        {/* CTA button */}
        <div className="flex-grow"></div>
        <a href="#portfolio"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transform transition-transform" >
          View my work
          </a>
      </div>
    </section>
    );
};

export default Hero

