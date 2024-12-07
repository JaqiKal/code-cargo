/**
 * About Component
 *
 * This component provides a brief bio and list of key skills.
 *
 * Features:
 * - Section header
 * - Paragraph describing the author
 * - Skills displayed as styled tags
 *
 * Author: JaqiKal
 * Date: Nov 2024
 *
 */

import React from "react";

const skills = {
  Languages: ["JavaScript (ES6+)", "Python", "HTML & CSS", "SQL"],
  Frontend: ["React.js", "TailwindCSS", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "Django", "RESTful APIs"],
  Tools: ["Git & GitHub", "PostgreSQL", "Agile Methodologies", "Testing & Debugging"],
};

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h2>
        <p className="text-lg text-center mb-8 leading-relaxed text-gray-700">
          Hello! I'm Jacqueline Kalmár, a passionate full-stack developer specializing in advanced frontend development. I honed my skills at <strong>Code Institute</strong>, where I gained a solid foundation in modern web technologies and best
          practices.
        </p>

        <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">Skills</h3>

        {/* Skill Categories */}
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index}>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4 text-center">{category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((skill, idx) => (
                  <div key={idx} className="group relative bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg shadow-md p-3 text-center cursor-pointer transform transition-transform hover:scale-105">
                    <span className="font-medium">{skill}</span>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
