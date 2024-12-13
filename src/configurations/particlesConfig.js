/**
 *  src/config/particlesConfig.js
 *  Customized effects specific to the Portfolio project 
 * 
 */


export const particlesConfig = {
  fpsLimit: 60,
  fullScreen: { enable: false },
  particles: {
    number: { value: 100 },
    shape: { type: "circle" },
    opacity: {
      random: true,
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 10, max: 150 },
      random: { enable: true },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: {
        default: "out",
        top: "bounce",
        bottom: "none",
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: { resize: true },
  },
  style: { filter: "blur(60px)" },
  emitters: {
    direction: "top-right",
    position: { x: 30, y: 150 },
    rate: { delay: 0.6, quantity: 6 },
    size: { width: 25, height: 0 },
  },
  detectRetina: true,
  themes: [
    {
      name: "light",
      default: { value: true, mode: "light" },
      options: {
        background: { color: "#f7f8ef" },
        particles: {
          color: { value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#10011d"] },
        },
      },
    },
    {
      name: "dark",
      default: { value: true, mode: "dark" },
      options: {
        background: { color: "#080710" },
        particles: {
          color: { value: ["#C8A2C8", "#98FB98", "#CCCCFF", "#10011d"] },
        },
      },
    },
  ],
};

export default particlesConfig;
