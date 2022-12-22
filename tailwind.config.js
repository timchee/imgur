/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        200: "#8d929a",
        500: "#474a51",
        800: "#2e3035",
      },
    },
  },
  plugins: [],
};
