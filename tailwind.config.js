/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use class' for manual toggling or 'media' for automatic dark mode detection eg. according to system preferences

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React components
    "./public/**/*.html"          // HTML files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

