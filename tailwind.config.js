import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
      animation: {
        slideRight: "slideRight 10s linear infinite",
      },
    },
    colors: {
      primary: "#BF8D2C",
      black: "black",
      white: "white",
      gray: "#D3D3D3",
      break: "#3E3E3E",
      line: "#413B71",
      closeIcon: "#6D7594",
      transparent: "#00000000",
      heading: "#6EAAC8",
      green: "#00FF87",
      red: "#FE7469",
    },
  },
  plugins: [],
};
