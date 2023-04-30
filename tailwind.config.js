/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        offers: "repeat(auto-fit, minmax(380px, 1fr))",
        destinations: "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },

    screens: {
      xl: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      lg: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      md: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      lt: { max: "767px" },

      sm: { max: "575px" },
      // => @media (max-width: 575px) { ... }
    },

    colors: {
      white: "#FFFFFF",
      black: "#000000",
      menu: "#495B65",
      blue: "#3E86F5",
      gray: "#7C7C7C",
      "light-gray": "#D6D6D6",
      "bg-color": "#F7F7F7",
    },

    fontSize: {
      sm: ["14px", "21px"],
      base: ["18px", "27px"],
      lg: ["20px", "40px"],
      xl: ["24px", "48px"],
      xxl: ["48px", "72px"],
      xxxl: ["64px", "96px"],
    },
  },
  plugins: [],
};
