/**
 * App Component
 *
 * The main entry point of the portfolio application.
 *
 * Features:
 * - Manages global state to control animation in the `Hero` component.
 * - Passes the `onLogoClick` function to the `Header` component to stop 
 *   animations when the user navigates back to the home section.
 * - Renders all major sections of the portfolio: `Header`, `Hero`, `About`, 
 *   `Portfolio`, and `Contact`.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */


import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Door from "./components/Door";  

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(true);

  // Disable animation after it plays once or on logo click
  const stopAnimation = () => setPlayAnimation(false);

  return (
    <div>
      <Header onLogoClick={stopAnimation} />
      <Hero playAnimation={playAnimation} />
      <About />
      <Portfolio />
      <Contact />
      <Door />
    </div>
  );
};

export default App;
