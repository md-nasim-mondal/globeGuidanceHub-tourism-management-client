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
          secondary: "#068488",
          "base-100": "#ffffff",
          accent: "#324b4c",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#17c7d0",
          secondary: "#068488",
          "base-100": "#161616",
          accent:"#ffffff"
        },
      },
    ],
  },
  darkMode: "class",
};
