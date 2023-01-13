/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#271A45",
    },
    fontFamily: {
      highlight: ['"Crimson Pro"', "serif"],
      main: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
