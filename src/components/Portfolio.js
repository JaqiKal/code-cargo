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
    {
      title: "PP4",
      description:
        "Cat ipsum dolor sit amet, love yet toy mouse squeak roll over, sit as close as possible to warm fire without sitting on cold floor for scratch me now! stop scratching me!. Catty ipsum purr purr purr until owner pets why owner not pet me hiss scratch meow.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "PP3",
      description:
        "Meowwww. Cough hairball on conveniently placed pants suddenly go on wild-eyed crazy rampage lick human with sandpaper tongue but kitty kitty pussy cat doll or meow loudly just to annoy owners. Meow meow pee in shoe i can haz. It's 3am, time to create some chaos mew mew mrow.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "PP2",
      description:
        "Stare at imaginary bug jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Chase red laser dot cats are a queer kind of folk. Cats woo.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "PP1",
      description:
        "Walk on car leaving trail of paw prints on hood and windshield. Murf pratt ungow ungow my left donut is missing, as is my right and don't nosh on the birds for eats owners hair then claws head cats are fats i like to pets them they like to meow back yet attack curtains yet cat cat moo moo lick ears lick paws.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "Classical Music Month Hackathon - Music Non Stop",
      description:
        "Music Non Stop is a classical music-themed memory card game. Designed to enhance your memory while appreciating classical music.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "World Happiness Day Hackathon - Gratidudes",
      description:
        "This online platform invites users to anonymously express thanks, uplifting stories, and moments of joy.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-transparent"
            >
              {/* Top Section */}
              <div
                className={`p-4 ${
                  project.title === "PP4"
                    ? "bg-gradient-to-b from-[#F6E84B] via-[#ff9102] to-[#800000] flex items-center justify-center"
                    : project.title === "PP3"
                    ? "bg-[#0C0C0C] text-white flex items-center justify-center"
                    : project.title === "PP2"
                    ? "bg-[rgba(243,206,250,0.9)] text-[#1b0125] font-[Mochiy Pop P One] flex items-center justify-center"
                    : "bg-[rgb(232,247,229)] flex items-center justify-center"
                }`}
                style={{ height: "64px", maxHeight: "64px" }}
              >
                {project.title === "PP4" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Courgette', cursive",
                      color: "#800000",
                    }}
                  >
                    ScrollStack
                  </h3>
                ) : project.title === "PP3" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    Task Master
                  </h3>
                ) : project.title === "PP2" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Mochiy Pop P One', sans-serif",
                    }}
                  >
                    Tic Tac Toe
                  </h3>
                ) : (
                  <img
                    src={pixavibeLogo}
                    alt={`${project.title} Logo`}
                    className="max-h-16"
                  />
                )}
              </div>

              {/* Card Body Section */}
              <div
                className={`p-4 ${
                  project.title === "PP4"
                    ? "bg-[#ff9102] text-white"
                    : project.title === "PP3"
                    ? "bg-[#0C0C0C] text-gray-400"
                    : project.title === "PP2"
                    ? "bg-[rgba(243,206,250,0.9)] text-black"
                    : "bg-[rgb(231,213,230)] text-[rgb(109,57,138)]"
                }`}
              >
                <div className="bg-stone-100 rounded-lg shadow-inner p-4 max-h-40 overflow-y-auto">
                  <p className="text-gray-800">{project.description}</p>
                </div>
              </div>

              {/* Buttons Section */}
              <div
                className={`p-4 ${
                  project.title === "PP4"
                    ? "bg-[#ff9102] text-white"
                    : project.title === "PP3"
                    ? "bg-[#0C0C0C] text-gray-400"
                    : project.title === "PP2"
                    ? "bg-gradient-to-b from-[#f3cefa] to-[#6f3ff59d] text-black"
                    : "bg-[rgb(231,213,230)] text-[rgb(109,57,138)]"
                }`}
              >
                <div className="backdrop-blur-md bg-white/30 border border-white/20 p-4 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {project.links.backend && (
                    <MetallicButton
                      label="Backend"
                      gradientClass="bg-silver-gradient"
                      link={project.links.backend}
                      customClass="w-full h-12"
                    />
                  )}
                  {project.links.frontend && (
                    <MetallicButton
                      label="Frontend"
                      gradientClass="bg-steelgreen-gradient"
                      link={project.links.frontend}
                      customClass="w-full h-12"
                    />
                  )}
                  {project.links.liveSite && (
                    <MetallicButton
                      label="Live Site"
                      gradientClass="bg-mauve-gradient"
                      link={project.links.liveSite}
                      customClass="w-full h-12"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;