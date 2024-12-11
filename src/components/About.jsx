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
import lucidchartLogo from "../assets/lucidchart-logomark-transp.png";
import balsamiqLogo from "../assets/balsamiq-logo.png";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        icon: (
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-python-plain text-4xl text-yellow-500"></i>
          </a>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-javascript-plain text-4xl text-yellow-300"></i>
          </a>
        ),
      },
      {
        name: "HTML5",
        icon: (
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-html5-plain text-4xl text-orange-500"></i>
          </a>
        ),
      },
      {
        name: "CSS",
        icon: (
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-css text-4xl text-rebecca-purple"></i>
          </a>
        ),
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "Django",
        icon: (
          <a
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-django-plain text-4xl text-green-700"></i>
          </a>
        ),
      },
      {
        name: "jQuery",
        icon: (
          <a
            href="https://jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-jquery-plain text-4xl text-blue-600"></i>
          </a>
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-bootstrap-plain text-4xl text-purple-600"></i>
          </a>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-tailwindcss-plain text-4xl text-blue-400"></i>
          </a>
        ),
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "SQLite",
        icon: (
          <a
            href="https://sqlite.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-sqlite-plain text-4xl text-gray-500"></i>
          </a>
        ),
      },
      {
        name: "MySQL",
        icon: (
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-mysql-plain text-4xl text-blue-600"></i>
          </a>
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-mongodb-plain text-4xl text-green-600"></i>
          </a>
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-postgresql-plain text-4xl text-indigo-600"></i>
          </a>
        ),
      },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      {
        name: "Git",
        icon: (
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-git-plain text-4xl text-red-500"></i>
          </a>
        ),
      },
      {
        name: "Jest",
        icon: (
          <a
            href="https://jestjs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-jest-plain text-4xl text-pink-500"></i>
          </a>
        ),
      },
      {
        name: "Pytest",
        icon: (
          <a
            href="https://docs.pytest.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-python-plain text-4xl text-green-500"></i>
          </a>
        ),
      },
      {
        name: "Balsamiq",
        icon: (
          <a
            href="https://balsamiq.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={balsamiqLogo} alt="Balsamiq Logo" className="h-8 w-8" />
          </a>
        ),
      },
      {
        name: "Lucidcharts",
        icon: (
          <a
            href="https://www.lucidchart.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lucidchartLogo}
              alt="Lucidcharts Logo"
              className="h-8 w-8"
            />
          </a>
        ),
      },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-fuchsia-200 py-8 pt-10">
      <div className="container mx-auto flex flex-col gap-12 px-8">
        {/* Title and Logo Row */}
        <div className="mb-8 flex flex-col items-center md:flex-row md:items-end md:gap-6">
          <a href="#hero-section" aria-label="Back to Hero Section">
            <img
              src={logo}
              alt="Profile Logo"
              className={`h-28 w-28 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${aboutStyles["hover-tilt"]}`}
            />
          </a>
          <h2 className="mt-4 text-4xl font-bold text-gray-800">Who am I?</h2>
        </div>

        {/* Two-Column Layout for Bio/CTA and Skills */}
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left:  Bio Section + CTA */}
          <div className="lg:w-1/2">
            <p className="mb-6 text-center text-lg leading-relaxed lg:text-left">
              As a junior full-stack developer, I tackle challenges with a clear
              plan and a practical mindset. I value being on time, communicating
              clearly, and keeping thorough documentation. This helps me keep
              projects organized and on track.
            </p>

            <p className="mb-6 text-center text-lg leading-relaxed lg:text-left">
              I work well with others, breaking down complex tasks into simple
              steps. I focus on creating solutions that are reliable and improve
              workflow efficiency.
            </p>

            <p className="mb-6 text-center text-lg leading-relaxed lg:text-left">
              Coming from a different career background, I bring adaptability
              and a diligent work ethic. My curiosity goes beyond coding - I am
              deeply fascinated by logistics and Supply Chain Management (SCM).
              I enjoy finding ways to optimize systems for smoother operations.
            </p>

            <p className="mb-6 text-center text-lg leading-relaxed lg:text-left">
              When I'm not coding or spending time with my family, you’ll find
              me diving into books, dabbling in herbology, or attempting to
              conquer board games and video games—attempting being the key word.
              I'm spectacularly bad at them, but I have an absolute blast
              losing! 😊 I'm also a sci-fi fan, always ready to binge movies and
              TV series. I love picking up new hobbies and interests, even if
              they don’t always go according to plan.
            </p>

            <p className="mb-6 text-center text-lg leading-relaxed lg:text-left">
              I am currently seeking opportunities to grow my skills and
              contribute to projects that make a positive impact. I am open to
              learning new technologies and collaborating with teams to create
              innovative solutions.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              I work well with others, breaking down complex tasks into simple
              steps. I focus on creating solutions that are reliable and improve
              workflow efficiency.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
              <MetallicButton
                label="View My Work"
                link="#portfolio"
                gradientClass="bg-purple-gradient"
                customClass={`text-skillTextcolor ${styles["cta-btn"]}`}
              />
              <MetallicButton
                label="Hire Me"
                link="#contact"
                gradientClass="bg-green-gradient"
                customClass={`text-skillTextcolor ${styles["cta-btn"]}`}
              />
            </div>
          </div>

          {/* Skills Section */}

          <div className="skills-grid mx-auto grid grid-cols-2 justify-items-center gap-2 sm:grid-cols-3 md:grid-cols-4 lg:w-1/2 lg:grid-cols-5">
            {skillCategories.flatMap((category) =>
              category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`${aboutStyles["skill-circle"]} flex flex-col items-center justify-center`}
                >
                  {skill.icon}
                  <span className="mt-2 text-center text-xs font-medium text-skillbTextcolor">
                    {skill.name}
                  </span>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
