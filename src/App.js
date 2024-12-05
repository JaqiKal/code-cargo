import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

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
    </div>
  );
};

export default App;
