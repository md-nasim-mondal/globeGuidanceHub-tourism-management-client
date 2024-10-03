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
          primary: "#00aaff",
          "primary-content": "#1a1a2e",
          secondary: "#28b463",
          "secondary-content": "#555555",
          "base-100": "#f9f9f9",
          "base-200": "#ffffff",
        },
      },
    ],
  },
  darkMode: "class",
};
