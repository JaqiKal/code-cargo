/**
 * About component
 *
 * This component provides a brief description of the author and showcases skills.
 *
 * Features:
 * - Bio section with a brief description.
 * - Call-to-action buttons for viewing work and hiring.
 * - Skills section with a list of technologies.
 * - Responsive design for mobile and desktop views.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from "react";
import logo from "../assets/logo.webp";
import MetallicButton from "../components/MetallicButton";
import styles from "../styles/MetallicButton.module.css";
import aboutStyles from "../styles/About.module.css";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 60 },
      { name: "JavaScript", level: 50 },
      { name: "HTML5", level: 80 },
      { name: "CSS3", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Django", level: 60 },
      { name: "jQuery", level: 20 },
      { name: "Bootstrap", level: 65 },
      { name: "Tailwind CSS", level: 60 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQLite", level: 35 },
      { name: "MySQL", level: 20 },
      { name: "MongoDB", level: 20 },
      { name: "PostgreSQL", level: 40 },
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      { name: "Manual Testing", level: 80 },
      { name: "Jest", level: 30 },
      { name: "Pytest", level: 35 },
      { name: "Balsamiq", level: 80 },
      { name: "Lucidcharts", level: 70 },
    ],
  },
];

// SkillBar Component with Metallic Effect
const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-skillTextcolor">{name}</span>
        <span className="text-sm font-medium text-skillTextcolor">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
        <div className="h-4 rounded-full bg-gradient-to-r from-indigo-200 to-indigo-900 shadow-md" style={{ width: `${level}%` }}></div>
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <section id="about" className="pt-10 py-8 w-full bg-fuchsia-200">
      <div className="container mx-auto max-w-full px-8">
        <h2 className="hidden text-4xl font-bold text-center text-skillTextcolor">About Me</h2>

        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Bio Section */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="md:mx-24">
              <div className="flex items-center mb-8 flex-col md:flex-row">
                <a href="#hero-section" aria-label="Back to Hero Section">
                  <img src={logo} alt="Profile Logo" className={`h-28 w-28 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${aboutStyles["hover-tilt"]}`} />
                </a>
                <h2 className="text-3xl font-bold text-gray-800 ml-6">Who am I?</h2>
              </div>

              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
                As a junior full-stack developer, I tackle challenges with a clear plan and a practical mindset. I value being on time, communicating clearly, and keeping thorough documentation. This helps me keep projects organized and on track.
              </p>

              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">I work well with others, breaking down complex tasks into simple steps. I focus on creating solutions that are reliable and improve workflow efficiency.</p>

              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
                Coming from a different career background, I bring adaptability and a diligent work ethic. My curiosity goes beyond coding - I am deeply fascinated by logistics and Supply Chain Management (SCM). I enjoy finding ways to optimize
                systems for smoother operations.
              </p>

              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
                When I'm not coding or spending time with my family, you’ll find me diving into books, dabbling in herbology, or attempting to conquer board games and video games—attempting being the key word. I'm spectacularly bad at them, but I
                have an absolute blast losing! 😊 I'm also a sci-fi fan, always ready to binge movies and TV series. I love picking up new hobbies and interests, even if they don’t always go according to plan.
              </p>

              <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
                I am currently seeking opportunities to grow my skills and contribute to projects that make a positive impact. I am open to learning new technologies and collaborating with teams to create innovative solutions.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="border-t border-aboutDividercolor pt-6">
                <h3 className="text-xl font-semibold text-skillTextcolor mb-2">Currently Practicing</h3>
                <p className="text-lg mb-4">React, Tailwind, REST APIs, and Figma.</p>

                <h3 className="text-xl font-semibold text-skillTextcolor mb-2">Current Fascination</h3>
                <p className="text-lg">UX/UI design, SEO, JavaScript, big data analysis, and exploring the intricacies of Supply Chain Management.</p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-8 w-full">
                <MetallicButton label="View My Work" link="#portfolio" gradientClass="bg-purple-gradient" customClass={`text-skillTextcolor ${styles["cta-btn"]}`} />
                <MetallicButton label="Hire Me" link="#contact" gradientClass="bg-green-gradient" customClass={`text-skillTextcolor ${styles["cta-btn"]}`} />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {skills.map((skillCategory, index) => (
                <div key={index}>
                  <h4 className="text-2xl font-semibold text-skillTextcolor mb-4">{skillCategory.category}</h4>
                  {skillCategory.items.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
