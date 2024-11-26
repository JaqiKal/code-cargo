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
    { title: "Project A", description: "A short description of the project.", link: "#" },
    { title: "Project B", description: "A short description of the project.", link: "#" },
    { title: "Project C", description: "A short description of the project.", link: "#" },
  ];

  return (
    // Responsive grid layout
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
