/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#17c7d0",
          // "primary-content": "#000000",
          secondary: "#068488",
          // "secondary-content": "#555555",
          "base-100": "#ffffff",
          accent: "#324b4c",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#2b2d42",
          "primary-content": "#00aaff",
          secondary: "#4abc73",
          "secondary-content": "#555555",
          "base-100": "#2b2d42",
          "base-200": "#959595",
        },
      },
    ],
  },
  darkMode: "class",
};
