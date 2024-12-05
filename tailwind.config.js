/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use class' for manual toggling or 'media' for automatic dark mode detection eg. according to system preferences

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React components
    "./public/**/*.html"          // HTML files in the public folder
    
  ],
  theme: {
    extend: {
      colors: {
        heroTextcolor: '#10011d', // Dark purple for hero paragraph
      },
      backgroundImage: {
        'bg-gradient-hero':'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      },
      animation: {
        'tilt': 'tilt 0.5s ease-in-out infinite', // Custom animation for tilting
      },
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(-5deg)' }, // Start and end with slight left tilt
          '50%': { transform: 'rotate(5deg)' }, // Middle of the animation tilts right
        },
      },
    },
  },
  plugins: [],
};