/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",
        secondary: "#D2691E",
        accent: "#F5DEB3",
        background: "#FAF3E0",
        text: "#2C1810",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        steam: "steam 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
