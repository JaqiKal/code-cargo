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
      customStyles: {
        headerBg: "bg-[rgb(232,247,229)]", 
        bodyBg: "bg-[rgb(231,213,230)] text-[rgb(109,57,138)]",
        buttonBg: "bg-[rgb(231,213,230)] text-[rgb(109,57,138)]",
      },
    },
    {
      title: "PP4",
      description:
        "Cat ipsum dolor sit amet, love yet toy mouse squeak roll over, sit as close as possible to warm fire without sitting on cold floor for scratch me now! stop scratching me!. Catty ipsum purr purr purr until owner pets why owner not pet me hiss scratch meow.",
      logo: null,
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
      customStyles: {
        headerBg: "bg-gradient-to-b from-[#F6E84B] via-[#ff9102] to-[#800000]",
        title: "ScrollStack",
        titleStyle: "text-[#800000] font-[Courgette] text-2xl",
        bodyBg: "bg-[#ff9102] text-white",
        buttonBg: "bg-[#ff9102] text-white",
      },
    },
    {
      title: "PP3",
      description:
        "Meowwww. Cough hairball on conveniently placed pants suddenly go on wild-eyed crazy rampage lick human with sandpaper tongue but kitty kitty pussy cat doll or meow loudly just to annoy owners. Meow meow pee in shoe i can haz. It's 3am, time to create some chaos mew mew mrow.",
      logo: null,
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
      customStyles: {
        headerBg: "bg-[#0C0C0C]",
        title: "Task Master",
        titleStyle: "text-white font-mono text-2xl",
        bodyBg: "bg-[#0C0C0C] text-gray-400",
        buttonBg: "bg-[#0C0C0C] text-gray-400",
      },
    },
    {
      title: "PP2",
      description:
        "Stare at imaginary bug jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Chase red laser dot cats are a queer kind of folk. Cats woo.",
      logo: null,
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
      customStyles: {
        headerBg: "bg-[rgba(243,206,250,0.9)]",
        title: "Tic Tac Toe",
        titleStyle: "text-[#1b0125] font-[Mochiy Pop P One] text-2xl",
        bodyBg: "bg-[rgba(243,206,250,0.9)] text-black",
        buttonBg: "bg-gradient-to-b from-[#f3cefa] to-[#6f3ff59d] text-black",
      },
    },
    {
      title: "PP1",
      description:
        "Explore the world of herbal medicine, therapeutic lymphatic drainage, and zone therapy. We offer holistic therapies to nurture your well-being. Experience ultimate relaxation with our lymphatic massage sessions. Treat yourself to a rejuvenating escape that enhances well-being. Our skilled therapists use gentle strokes to promote lymphatic flow, offering a soothing and stress-relieving experience.",
      logo: null,
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
      customStyles: {
        headerBg: "bg-[#b7a8a2]",
        title: "Manus Herba",
        titleStyle: "text-[#231005] font-serif text-2xl",
        bodyBg: "bg-[#b7a8a2] text-black",
        buttonBg: "bg-[#b7a8a2] text-black",
      },
    },
    {
      title: "Music Non Stop",
      description:
        "Music Non Stop is a card game that trains your brain to improve your memory while bringing the beauty of classical music to your ears. Designed for music lovers of all ages, this game challenges players to match pairs of cards that play the same classical tune.",
      logo: null,
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
      customStyles: {
        headerBg: "bg-[#e8e4f9]",
        title: "Music Non Stop",
        titleStyle: "text-black font-serif text-2xl",
        bodyBg: "bg-[#e8e4f9] text-black",
        buttonBg: "bg-gradient-to-b from-[#e8e4f9] to-[#f3d1f3]",
      },
    },
    {
      title: "Gratidudes",
      description:
        "The Gratitude Wall celebrates World Happiness Day by creating a space for sharing gratitude. This online platform invites users to anonymously express thanks, uplifting stories, and moments of joy.",
      logo: null,
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
      customStyles: {
        headerBg: "bg-[#fcf4e6]",
        title: "Gratidudes",
        titleStyle: "text-[#664a00] font-serif text-2xl",
        bodyBg: "bg-[#fcf4e6] text-black",
        buttonBg: "bg-gradient-to-b from-[#fcf4e6] to-[#ffe0ba]",
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
                className={`${project.customStyles?.headerBg || "bg-gray-100"} flex items-center justify-center p-4`}
                style={{ height: "64px", maxHeight: "64px" }}
              >
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="max-h-16"
                  />
                ) : (
                  <h3 className={project.customStyles?.titleStyle || "text-xl"}>{project.customStyles?.title || project.title}</h3>
                )}
              </div>

              {/* Card Body Section */}
              <div className={`p-4 ${project.customStyles?.bodyBg || "bg-white text-gray-600"}`}>
                <div className="bg-stone-100 rounded-lg shadow-inner p-4 max-h-40 overflow-y-auto">
                  <p className="text-gray-800">{project.description}</p>
                </div>
              </div>

              {/* Buttons Section */}
              <div className={`p-4 ${project.customStyles?.buttonBg || "bg-gray-100"}`}>
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
                      gradientClass="bg-mauve-gradient" // Explicitly set the mauve gradient style
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