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
        raleway: ["Raleway", "cursive"],
      },
      backgroundColor: {
        bgcolor: "#f2f2f2",
        bgLemonBlueDark: "#2e9cc3",
        bgLemonBlueLight: "#b0e9ff",
        bgDarkRed: "#ff4747",
        bgBlueDark: "#b9c5d6",
      },
      colors: {
        deepGray: "#3a3e4a",
      },
      fontSize: {
        main: ["14px", "10px"],
      },
      maxWidth: {
        one: "10%",
        two: "20%",
        three: "30%",
        four: "40%",
        five: "50%",
        six: "60%",
        seven: "70%",
        eight: "80%",
        nine: "90%",
      },
      maxHeight: {
        one: "10%",
        two: "20%",
        three: "30%",
        four: "40%",
        five: "50%",
        six: "60%",
        seven: "70%",
        eight: "80%",
        nine: "90%",
      },
    },
  },
  plugins: [],
};
