/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{js/jsx/ts/tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "cursive"],
        helvetica: [" Helvetica", "cursive"],
        opensans: ["OpenSans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        simsun: ["Simsun", "cursive"],
      },
      backgroundColor: {
        bgcolor: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
