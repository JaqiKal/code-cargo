/**
 * Portfolio Component
 *
 * This component showcases projects in a responsive grid layout.
 *
 * Features:
 * - Section header.
 * - Dynamically renders project cards.
 * - Includes links to view project details.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from "react";


const Portfolio = () => {
  // Array of projects
  const projects = [
    { title: "PP1", description: "A short description of the project.", link: "#" },
    { title: "PP2", description: "A short description of the project.", link: "#" },
    { title: "PP3", description: "A short description of the project.", link: "#" },
    { title: "PP4", description: "A short description of the project.", link: "#" },
    { title: "PP5", description: "A short description of the project.", link: "#" },
    { title: "Hackathon 1", description: "A short description of the project.", link: "#" },
    { title: "Hackathon 2", description: "A short description of the project.", link: "#" },
    { title: "Hackathon 3", description: "A short description of the project.", link: "#" },
  ];

  return (
    // Responsive grid layout
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Project cards */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
