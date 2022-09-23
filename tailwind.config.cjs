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
        bgLemonBlueDark: "#2e9cc3",
        bgLemonBlueLight: "#b0e9ff",
        bgDarkRed: "#ff4747",
        bgBlueDark: "#a3b5cf",
      },
      colors: {
        deepGray: "#3a3e4a",
      },
      fontSize: {
        main: ["14px", "10px"],
      },
    },
  },
  plugins: [],
};
