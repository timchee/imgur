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
        400: "#67686f",
        500: "#474a51",
        800: "#2e3035",
      },
      btnColor: "#1bb76e",
      bgColor: "#171544",
      searchBar: "#ffffff4d",
      hBlue: "#aed8ea",
      textGray: "#babec4",
    },
  },
  plugins: [],
};
