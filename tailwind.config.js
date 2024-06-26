import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "49.99%": { transform: "translateX(100vw)" },
          "50%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideRight: "slideRight 20s linear infinite",
      },
      animationPlayState: {
        running: "running",
        paused: "paused",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".animation-play-state-running": {
            "animation-play-state": "running",
          },
          ".animation-play-state-paused": {
            "animation-play-state": "paused",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
