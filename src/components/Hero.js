/**
 * Hero Component
 * 
 * This component serves as the introductory section of the portfolio.
 * 
 * Features:
 * - Animated particle effect scoped to this section. 
 *   Amended from https://codepen.io/matteobruni/pen/qBPxjQY
 * - Large text for tagline.
 * - CTA button linking to the portfolio section.
 * - Centered layout optimized for both mobile and desktop view.
 * 
 * Author: JaqiKal
 * Date: Dec 2024
 */

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  // Initialize the particles engine. This ensures all plugins are loaded.
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Dynamically loads the full tsParticles engine with plugins
  }, []);

  // Configuration for the particle effect
  const particlesOptions = {
    fpsLimit: 60, // Limits the frame rate for performance
    fullScreen: { enable: false }, // Disables fullscreen to confine particles to the Hero section
    particles: {
      number: {
        value: 50, // Total number of particles on the screen
      },
      shape: {
        type: "circle", 
      },
      opacity: {
        value: 0.5, // Base opacity of particles
      },
      size: {
        value: 400, // Base size of particles
        random: {
          enable: true, // Enables random sizing
          minimumValue: 200, // Sets a minimum size for randomness
        },
      },
      move: {
        enable: true, 
        speed: 2, 
        direction: "top", 
        outModes: {
          default: "out", // Particles disappear when they leave the canvas
          top: "destroy", // Particles are removed as they reach the top
          bottom: "none", // No particles are created at the bottom
        },
      },
    },
    interactivity: {
      detectsOn: "canvas", // Interaction events are detected on the canvas
      events: {
        resize: true, // Resizes the particles canvas when the window is resized
      },
    },
    style: {
      filter: "blur(50px)", // Adds a blur effect to the entire canvas
    },
    detectRetina: true, // Optimizes for retina screens
    themes: [
      // Two themes: light and dark
      {
        name: "light",
        default: {
          value: true,
          mode: "light",
        },
        options: {
          background: {
            color: "#f7f8ef", // Background for light mode
          },
          particles: {
            color: {
              value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#9FE2BF", "#FFF0F5"], // Pastel palette for particles
            },
          },
        },
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark",
        },
        options: {
          background: {
            color: "#080710", // Background for dark mode
          },
          particles: {
            color: {
              value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#9FE2BF", "#FFF0F5"], // Same palette, ensuring consistent design
            },
          },
        },
      },
    ],
    emitters: {
      direction: "diagonal", // Emitter shoots particles in set direction
      position: {
        x: 50, // Position on the X-axis (slightly off-center)
        y: 150, // Position on the Y-axis
      },
      rate: {
        delay: 0.1, // Delay between emissions
        quantity: 7 // Number of particles emitted at once
      },
      size: {
        width: 100, // Emitter width
        height: 0, // Flat emitter (no height)
      },
    },
  };

  return (
    <section className="h-screen relative bg-gradient-hero flex items-center justify-center">
      {/* Particles Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit} // Initializes the particles engine
        options={particlesOptions} // Passes the configuration for the particles
      />
      {/* Hero Content */}
      <div className="relative text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-fuchsia-800">Welcome to my Portfolio</h1>
        <p className="mt-6 text-lg md:text-xl  text-fuchsia-800">
          I'm a junior web developer building solutions with precision and passion.
        </p>
        <a
          href="#portfolio" // Links to the portfolio section
          className="mt-6 inline-block px-6 py-3 bg-purple-gradient text-purple-950 rounded-md hover:bg-fuchsia-800 hover:scale-105 transform transition-transform"
        >
          View my work
        </a>
      </div>
    </section>
  );
};

export default Hero;
