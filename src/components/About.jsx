/**
 * About Component
 *
 * This component displays an "About Me" section, providing a brief bio of the author
 * along with a showcase of their technical skills and a call-to-action for viewing
 * their work or hiring them.
 *
 * Features:
 * - Bio Section describing the author.
 * - Skills Section displaying technical skills, each skill represented
 *   with an icon and label.
 * - Call-to-Action Buttons
 *
 * Styling:
 * - Tailwind CSS is used for layout, spacing, and responsiveness.
 * - Custom styles in `About.module.css` for specific effects like tilt animations and circular skill cards.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from "react";
import logo from "../assets/logo.webp";
import MetallicButton from "../components/MetallicButton";
import styles from "../styles/MetallicButton.module.css";
import aboutStyles from "../styles/About.module.css";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <i className="devicon-python-plain text-yellow-500 text-4xl"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain text-yellow-300 text-4xl"></i> },
      { name: "HTML5", icon: <i className="devicon-html5-plain text-orange-500 text-4xl"></i> },
      { name: "CSS3", icon: <i className="devicon-css3-plain text-blue-500 text-4xl"></i> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: <i className="devicon-django-plain text-green-700 text-4xl"></i> },
      { name: "jQuery", icon: <i className="devicon-jquery-plain text-blue-600 text-4xl"></i> },
      { name: "Bootstrap", icon: <i className="devicon-bootstrap-plain text-purple-600 text-4xl"></i> },
      { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain text-blue-400 text-4xl"></i> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQLite", icon: <i className="devicon-sqlite-plain text-gray-500 text-4xl"></i> },
      { name: "MySQL", icon: <i className="devicon-mysql-plain text-blue-600 text-4xl"></i> },
      { name: "MongoDB", icon: <i className="devicon-mongodb-plain text-green-600 text-4xl"></i> },
      { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain text-indigo-600 text-4xl"></i> },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Git", icon: <i className="devicon-git-plain text-red-500 text-4xl"></i> },
      { name: "Jest", icon: <i className="devicon-jest-plain text-pink-500 text-4xl"></i> },
      { name: "Pytest", icon: <i className="devicon-python-plain text-green-500 text-4xl"></i> },
      { name: "Balsamiq", icon: <i className="devicon-balsamiq-plain text-gray-700 text-4xl"></i> },
      { name: "Lucidcharts", icon: <i className="devicon-lucidchart-plain text-orange-400 text-4xl"></i> },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="pt-10 py-8 w-full bg-fuchsia-200">
      <div className="container mx-auto max-w-1/2 px-8 flex flex-col gap-12">
        {/* Bio Section */}
        <div className="w-full">
          <div className="md:mx-24">
            <div className="flex items-center mb-8 flex-col md:flex-row">
              <a href="#hero-section" aria-label="Back to Hero Section">
                <img src={logo} alt="Profile Logo" className={`h-28 w-28 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${aboutStyles["hover-tilt"]}`} />
              </a>
              <h2 className="text-3xl font-bold text-gray-800 ml-6 mt-4 md:mt-0">Who am I?</h2>
            </div>

            <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
              As a junior full-stack developer, I tackle challenges with a clear plan and a practical mindset. I value being on time, communicating clearly, and keeping thorough documentation. This helps me keep projects organized and on track.
            </p>

            <p className="text-lg leading-relaxed text-center lg:text-left mb-6">I work well with others, breaking down complex tasks into simple steps. I focus on creating solutions that are reliable and improve workflow efficiency.</p>

            <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
              Coming from a different career background, I bring adaptability and a diligent work ethic. My curiosity goes beyond coding - I am deeply fascinated by logistics and Supply Chain Management (SCM). I enjoy finding ways to optimize systems
              for smoother operations.
            </p>

            <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
              When I'm not coding or spending time with my family, you’ll find me diving into books, dabbling in herbology, or attempting to conquer board games and video games—attempting being the key word. I'm spectacularly bad at them, but I have
              an absolute blast losing! 😊 I'm also a sci-fi fan, always ready to binge movies and TV series. I love picking up new hobbies and interests, even if they don’t always go according to plan.
            </p>

            <p className="text-lg leading-relaxed text-center lg:text-left mb-6">
              I am currently seeking opportunities to grow my skills and contribute to projects that make a positive impact. I am open to learning new technologies and collaborating with teams to create innovative solutions.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-20 w-full">
              <MetallicButton label="View My Work" link="#portfolio" gradientClass="bg-purple-gradient" customClass={`text-skillTextcolor ${styles["cta-btn"]}`} />
              <MetallicButton label="Hire Me" link="#contact" gradientClass="bg-green-gradient" customClass={`text-skillTextcolor ${styles["cta-btn"]}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full md:mt-20">
        <h3 className="hidden">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.flatMap((category) =>
            category.skills.map((skill, idx) => (
              <div key={idx} className={aboutStyles["skill-circle"]}>
                {skill.icon}
                <span className="text-sm font-medium text-center mt-2 text-skillaTextcolor">{skill.name}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
