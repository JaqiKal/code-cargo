/**
 * About component
 *
 * This component provides a brief description of the author and showcases skills.
 *
 * Features:
 * - Section header with brief introduction.
 * - Professional bio highlighting skills.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from "react";
import logo from "../assets/logo.webp";
//import MetallicButton from "../components/MetallicButton";
//import styles from "./../styles/MetallicButton.module.css";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 w-full bg-blue-200">
      <div className="container mx-auto max-w-full px-8">
        <h2 className="hidden text-4xl font-bold text-center text-heroTextcolor">About Me</h2>

        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left Side - Bio */}
          <div className="lg:w1/2 mb-12 lg:mb-0">
            <div className="md_mx-24">
              <div className="flex items-center mb-8">
                <img src={logo} alt="Profile" className="h-28 w-28 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
                <h2 className="text-3xl font-bold text-gray-800 ml-6">Who am I?</h2>
              </div>
              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">AAA</p>
              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">BBB</p>
              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">CCC</p>

              {/* Bio */}

              {/* Skills */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
