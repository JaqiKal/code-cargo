/**
 * Hero Component
 *
 * This component serves as the introductory section of the portfolio,
 * providing a welcoming message and call-to-action (CTA) button.
 *
 * Features:
 * - Animated particle effect scoped to this section using `react-tsparticles`.
 * - Large text for the main tagline.
 * - A customizable CTA button linking to the portfolio section.
 * - Animated entry for the glass-pane container (controlled via props).
 * - Animation state is controlled externally using the `playAnimation` prop.
 * - Optimized for both desktop and mobile views.
 *
 * Author: JaqiKal
 * Date: Dec 2024
 */

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import heroStyles from "../styles/Hero.module.css";
import buttonStyles from "./../styles/MetallicButton.module.css";
import MetallicButton from "../components/MetallicButton";

const Hero = ({ playAnimation }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Configuration for the particle effect
  const particlesOptions = {
    fpsLimit: 60, // Limits the frame rate for performance
    fullScreen: { enable: false }, // Disables fullscreen to confine particles to the Hero section
    particles: {
      number: {
        value: 100, // Total number of particles on the screen
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
          top: "bounce", // Particles bounce off the top
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
              value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#10011d"], //  Palette for particles
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
              value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#10011d"], // Palette for particles
            },
          },
        },
      },
    ],
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-hero" id="hero-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div className={`relative text-center z-10 ${playAnimation ? heroStyles["hero-flip-animation"] : ""}`}>
        <div className={heroStyles.glassPane}>
          <h1 className="text-3xl md:text-5xl md:my-6 font-medium text-heroTextcolor">Welcome to my Portfolio</h1>
          <p className="mt-6 text-lg md:text-xl text-heroTextcolor">As a growing full-stack developer, I’m passionate about building solutions that combine performance and aesthetics. My learning is fueled by listening, doing, and creating.</p>

          {/* Button Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4 md:my-8 w-full">
            <MetallicButton label="View My Work" link="#portfolio" gradientClass="bg-purple-gradient" customClass={`text-heroTextcolor ${buttonStyles["cta-btn"]}`} />

            <MetallicButton label="Hire Me" link="#contact" gradientClass="bg-green-gradient" customClass={`text-heroTextcolor ${buttonStyles["cta-btn"]}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
