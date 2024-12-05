/**
 * Hero Component
 *
 * This component serves as the introductory section of the portfolio.
 *
 * Features:
 * - Animated particle effect scoped to this section.
 *   Amended from https://codepen.io/matteobruni/pen/qBPxjQY
 *   for properties and config.: https://particles.js.org/docs/index.html
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
import styles from "./../styles/Hero.module.css";


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
        value: 200, // Total number of particles on the screen
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        random: true, // Enables random opacity
        value: { min: 0.1, max: 0.5 }, // Opacity range for particles
      },
      size: {
        value: { min: 10, max: 150 }, // Base size of particles
        random: {
          enable: true, // Enables random sizing
        },
      },
      move: {
        enable: true,
        speed: 2, // Speed of particles
        direction: "none", // Direction of movement
        outModes: {
          default: "out", // Particles disappear when they leave the canvas
          top: "bounce", // Particles are removed as they reach the top
          bottom: "none", // Particles are removed as they reach the bottom
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
      filter: "blur(60px)", // Adds a blur effect to the entire canvas
    },
    emitters: {
      direction: "top-right", // Emitter shoots particles in set direction
      position: {
        x: 30, // Position on the X-axis (slightly off-center)
        y: 150,
      },
      rate: {
        delay: 0.6, // Delay between emissions
        quantity: 6, // Number of particles emitted at once
      },
      size: {
        width: 25, // Emitter width
        height: 0, // Flat emitter (no height)
      },
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
              value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#10011d", "#FFF0F5", "#9FE2BF"], // , Palette for particles
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
              value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#10011d", "#FFF0F5", "#9FE2BF"], // Palette for particles
            },
          },
        },
      },
    ],
  };

  return (
    <section className="h-screen relative bg-gradient-hero flex items-center justify-center">
      {/* Particles Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit} // Initializes the particles engine
        options={particlesOptions} // Passes the configuration for the particles
      />

      {/* Hero content with glass pane */}
      <div className="relative text-center z-10">
        <div className={styles.glassPane}>
          <h1 className="text-3xl md:text-5xl font-bold text-heroTextcolor">Welcome to my Portfolio</h1>
          <p className="mt-6 text-lg md:text-xl text-heroTextcolor">I'm a junior web developer building solutions with precision and passion.</p>
          <a href="#portfolio" className="mt-6 inline-block px-6 py-3 bg-purple-gradient font-semibold text-heroTextcolor rounded-md hover:scale-105 transform transition-transform hover:bg-fuchsia-800">
            View my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
