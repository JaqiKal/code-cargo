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
        skillaTextcolor: 'rgba(16, 1, 29, 1);', // Dark purple for skills
        skillbTextcolor: 'rgba(16, 1, 29, 0.7);',
        aboutDividercolor: 'rgba(16, 1, 29, 0.3);'

      },
      backgroundImage: {
        'bg-gradient-hero':'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
     
      },
    },
  },
  plugins: [],
};