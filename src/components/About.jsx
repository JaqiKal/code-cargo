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

import React from 'react'

const About = () => {
  return (
    // Light background with padding for the About section
    <section id="about" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        {/* Short bio */}
        <p className="text-lg text-center mb-4">
          Hi, I'm Jacqueline Kalmár, an enthusiastic junior developer with experience in:
        </p>
        {/* Skills list */}
        <ul className="flex flex-wrap justify-center space-x-4">
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">JavaScript</li>
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">React</li>
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">TailwindCSS</li>
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">HTML & CSS</li>
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">X</li>
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">Y</li>
          <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">Z</li>
        </ul>
      </div>
    </section>
  );
};

export default About