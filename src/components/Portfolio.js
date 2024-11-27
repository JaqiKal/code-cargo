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
import pixavibeLogo from "../assets/logo-pixavibe.webp"; // Import the logo

const Portfolio = () => {
  // Array of projects
  const projects = [
  
    {
      title: "Pixavibe",
      description:
        "Pixavibe is a dynamic full-stack web application designed for seamless content sharing, inspired by platforms like Instagram. Built with Django Rest Framework on the back-end and React on the front-end, it provides an intuitive user experience for browsing, posting, and engaging with content. This project was the final milestone of my journey in completing the Code Institute diploma in full-stack software development, showcasing the skills I acquired throughout the program.",
      logo: pixavibeLogo, // Use logo instead of title
      links: {
        frontend: "https://github.com/JaqiKal/pixavibe-frontend",
        backend: "https://github.com/JaqiKal/pixavibe-api",
        liveSite: "https://pixavibe-frontend-e53fa907f215.herokuapp.com/",
      },
    },
    { title: "PP4", description: "A short description of the project.", link: "#" },
    { title: "PP3", description: "A short description of the project.", link: "#" },
    { title: "PP1", description: "A short description of the project.", link: "#" },
    { title: "PP1", description: "A short description of the project.", link: "#" },
    { title: "Hackathon 1", description: "A short description of the project.", link: "#" },
    { title: "Hackathon 2", description: "A short description of the project.", link: "#" },
    { title: "Hackathon 3", description: "A short description of the project.", link: "#" },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`max-w-sm mx-auto border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                project.title === "Pixavibe" ? "border-transparent" : "border-gray-200"
              }`}
            >
              {/* Title/Logo Section */}
              <div
                className={`p-4 ${
                  project.title === "Pixavibe" ? "bg-[rgb(232,247,229)]" : "bg-gray-100"
                }`}
              >
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="mx-auto max-h-16"
                  />
                ) : (
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                )}
              </div>
              {/* Content Section */}
              <div
                className={`p-6 ${
                  project.title === "Pixavibe" ? "bg-[rgb(231,213,230)] text-[rgb(109,57,138)]" : "bg-white text-gray-600"
                }`}
              >
                <p className="mb-4">{project.description}</p>
                {project.links ? (
                  <div className="space-y-2">
                    <a
                      href={project.links.frontend}
                      className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Frontend Repo
                    </a>
                    <a
                      href={project.links.backend}
                      className="inline-block px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Backend Repo
                    </a>
                    <a
                      href={project.links.liveSite}
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
