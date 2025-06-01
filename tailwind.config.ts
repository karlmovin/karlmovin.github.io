import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      keyframes: {
        "color-pulse": {
          "0%, 100%": {
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(31, 41, 55)",
          },
          "50%": {
            backgroundColor: "rgb(59, 130, 246)",
            color: "rgb(255, 255, 255)",
          },
        },
        "color-pulse-dark": {
          "0%, 100%": {
            backgroundColor: "rgb(31, 41, 55)",
            color: "rgb(229, 231, 235)",
          },
          "50%": {
            backgroundColor: "rgb(59, 130, 246)",
            color: "rgb(255, 255, 255)",
          },
        },
      },
      animation: {
        "color-pulse": "color-pulse 2s ease-in-out infinite",
        "color-pulse-dark": "color-pulse-dark 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
