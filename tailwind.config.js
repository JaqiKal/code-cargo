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
        heroTextColor: '#10011d', // Dark purple for hero paragraph
        skillaTextColor: 'rgba(16, 1, 29, 1)', // Dark purple for skills
        skillbTextColor: 'rgba(16, 1, 29, 0.7)',
        aboutDividerColor: 'rgba(16, 1, 29, 0.3)',
        rebeccaPurple: 'rgba(102, 51, 153, 1)', // CSS icon color
        yellow: {
          700: '#b8860b',
          800: '#a0522d',
          900: '#8b4513',
        },
        wood: {
          light: '#d2a679',
          medium: '#b8860b',
          dark: '#8b4513',
          deep: '#6f4e37',
        },
      },

      backgroundImage: {
        'bg-gradient-hero':'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
     
      },
    },
  },
  plugins: [],
};