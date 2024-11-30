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
import MetallicButton from "./MetallicBtn"; // Import the MetallicButton

const Portfolio = () => {
  const projects = [
    {
      title: "Pixavibe",
      description:
        "Pixavibe is a dynamic full-stack web application designed for seamless content sharing, inspired by platforms like Instagram. Built with Django Rest Framework on the back-end and React on the front-end, it provides an intuitive user experience for browsing, posting, and engaging with content. This project was the final milestone of my journey in completing the Code Institute diploma in full-stack software development, showcasing the skills I acquired throughout the program.",
      logo: pixavibeLogo,
      links: {
        backend: "https://github.com/JaqiKal/pixavibe-api",
        frontend: "https://github.com/JaqiKal/pixavibe-frontend",        
        liveSite: "https://pixavibe-frontend-e53fa907f215.herokuapp.com/",
      },
    },
    { title: "PP4", description: "A short description of the project.", link: "#" },
    { title: "PP3", description: "A short description of the project.", link: "#" },
    { title: "PP2", description: "A short description of the project.", link: "#" },
    { title: "PP1", description: "A short description of the project.", link: "#" },
    { title: "Classical Music Month Hackathon - Music Non Stop", description: "Music Non Stop is a classical music-themed memory card game. Designed to enhance your memory while appreciating classical music.", link: "#" },
    { title: "World Happiness Day Hackathon - Gratidudes", description: "This online platform invites users to anonymously express thanks, uplifting stories, and moments of joy.", link: "#" },

  ];

    return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`max-w-sm mx-auto border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                project.title === "Pixavibe" ? "border-transparent" : "border-gray-200"
              }`}
            >
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
              <div
                className={`p-6 ${
                  project.title === "Pixavibe" ? "bg-[rgb(231,213,230)] text-[rgb(109,57,138)]" : "bg-white text-gray-600"
                }`}
              >
                <p className="mb-4">{project.description}</p>
                {project.links ? (
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                    <MetallicButton
                      label="Backend"
                      gradientClass="bg-silver-gradient"
                      link={project.links.backend}
                      customClass="w-full h-12"
                    />
                    <MetallicButton
                      label="Frontend"
                      gradientClass="bg-green-gradient"
                      link={project.links.frontend}
                      customClass="w-full h-12"
                    />
                    <MetallicButton
                      label="Live Site"
                      gradientClass="bg-purple-gradient"
                      link={project.links.liveSite}
                      customClass="w-full h-12"
                    />
                  </div>
                ) : (
                    
                  <MetallicButton
                    label="View Project"
                    gradientClass="bg-blue-gradient"
                    customClass="w-full h-12"
                  />
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