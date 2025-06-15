// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        bebas: "var(--font-bebas-neue)",
        bungee: "var(--font-bungee-tint)",
        glitch: "var(--font-rubik-glitch)",
        ponomar: "var(--font-ponomar)",
      },
    },
  },
  plugins: [],
};
