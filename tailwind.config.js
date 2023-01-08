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
        900: "#27292d",
      },
      btnColor: {
        1: "#1bb76e",
        2: "#23d280",
      },
      tagColor: {
        1: "#8472bd",
        2: "#508a9f",
        3: "#5b62a5",
        4: "#2b1a5a",
        5: "#155c71",
        6: "#633875",
      },
      bgColor: "#171544",
      bgGradientColor: "#1b193e",
      searchBar: "#ffffff40",
      hBlue: "#aed8ea",
      blue: "#4a58fb",
      inputTextColor: "#ffffffb3",
      dropdown: "#67686f",
      settings: "#565f6e",
      overlay: "#17191f",
      modalCl: "#3c424b",
      textGreen: "#01b96b",
      lighterGreen: "#34cfa8",
    },
  },
  plugins: [],
};
