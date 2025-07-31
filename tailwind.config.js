// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1a202c',
          text: '#f7fafc',
          card: '#2d3748',
        },
      },
    },
  },
  plugins: [],
};
