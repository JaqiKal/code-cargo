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
        "Explore the world of herbal medicine, therapeutic lymphatic drainage, and zone therapy. We offer holistic therapies to nurture your well-being.Experience ultimate relaxation with our lymphatic massage sessions. Treat yourself to a rejuvenating escape that enhances well-being. Our skilled therapists use gentle strokes to promote lymphatic flow, offering a soothing and stress-relieving experience",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "Music Non Stop",
      description:
        "Music Non Stop is a card game that trains your brain to improve your memory while bringing the beauty of classical music to your ears. Designed for music lovers of all ages, this game challenges players to match pairs of cards that play the same classical tune. There are 12 cards featuring 6 unique pairs. For each successful match, a bonus trivia question will pop up with multiple answer options. You can choose to answer the question for bonus points, or skip it and continue with the memory card game. The game is over when all pairs are matched. The player with the highest score wins. Music Non Stop is a fun and educational way to enjoy classical music while sharpening your memory skills. Play now and let the music take you on a journey of discovery and delight.",
      logo: "#", 
      links: {
        backend: "#",
        frontend: "#",
        liveSite: "#",
      },
    },
    {
      title: "Gratidudes",
      description:
        "The Gratitude Wall celebrates World Happiness Day by creating a space for sharing gratitude. This online platform invites users to anonymously express thanks, uplifting stories, and moments of joy. Our mission is to build a community rooted in gratitude, transforming individual moments of appreciation into a global movement of collective joy. Central to our mission are user-centric designs that facilitate an intuitive and rewarding experience, making every visit a step towards spreading positivity. 'Gratitude Wall' isn't just a site; it's a movement towards acknowledging the beauty in life's small moments and the transformative power of gratitude in building a happier world. Join us in embracing the power of gratitude. Together, we can make a difference, one thank-you at a time.",
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
                ) : project.title === "PP2" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Mochiy Pop P One', sans-serif",
                    }}
                  >
                    Tic Tac Toe
                  </h3>
                ) : project.title === "PP1" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Roboto', open-sans",
                      color: "#231005",
                    }}
                  >
                    Manus Herba
                  </h3>
                ) : project.title === "Music Non Stop" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Mochiy Pop P One', sans-serif",
                    }}
                  >
                    Classical Music Month Hackathon"
                  </h3>
                ) : project.title === "Gratidudes" ? (
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Mochiy Pop P One', sans-serif",
                    }}
                  >
                    World Happiness Day Hackathon
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