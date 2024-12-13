/**
 * Hero Component
 *
 * This component serves as the introductory section of the portfolio,
 * providing a welcoming message and call-to-action (CTA) buttons.
 *
 * Features:
 * - Animated particle effect scoped to this section using `react-tsparticles`.
 * - Displays the user's name prominently.
 * - Two customizable CTA buttons linking to specified sections.
 * - Animated entry for the glass-pane container, controlled via the `playAnimation` prop.
 * - Optimized for both desktop and mobile views.
 *
 * Props:
 * - playAnimation (boolean): Controls the entry animation of the glass-pane container.
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
import particlesConfig from "../configurations/particlesConfig";

const Hero = ({ playAnimation }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      className="bg-gradient-hero flex h-screen items-center justify-center"
      id="hero-section"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig} // Corrected variable name
      />
      <div
        className={`relative z-10 text-center ${playAnimation ? heroStyles["hero-flip-animation"] : ""}`}
      >
        <div className={heroStyles.glassPane}>
          <h1 className="text-3xl font-medium tracking-wide text-fuchsia-700 md:mx-10 md:my-5 md:text-7xl">
            Jacqueline
          </h1>

          {/* Button Container */}
          <div className="my-4 flex w-full flex-col items-center justify-center gap-4 md:my-8 md:flex-row">
            <MetallicButton
              label="View My Work"
              link="#portfolio"
              gradientClass="bg-purple-gradient"
              customClass={`text-heroTextColor ${buttonStyles["cta-btn"]}`}
            />

            <MetallicButton
              label="Hire Me"
              link="#contact"
              gradientClass="bg-green-gradient"
              customClass={`text-heroTextColor ${buttonStyles["cta-btn"]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
