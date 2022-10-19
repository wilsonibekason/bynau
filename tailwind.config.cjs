/** @type {import('tailwindcss').Config} */

const Nth = require("tailwind-nth-child");
const nth3n = new Nth("3n", "3n+0"); // Sub-elements that are multiples of 3
const nth2n = new Nth("2n", "2n+0"); // Sub-elements that are multiples of 2  === new  Nth('even','even')
const nth5 = new Nth("5", "-n+5"); // The first five child elements
const nth4 = new Nth("4", "-n+4"); // The first four child elements
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{js/jsx/ts/tsx}"],
  theme: {
    extend: {
      borderWidth: [
        "nth-child-2n",
        "nth-child-3n",
        "nth-child-4",
        "nth-child-5",
      ],
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
        darkRed: "#ff4747",
        goldDeep: "#D4AF37",
        lemonBlueDark: "#2e9cc3",
        lightGray: "#333",
        darkWhite: "#999",
      },
      fontSize: {
        main: ["14px", "10px"],
        xss: ["12px", "10px"],
        md: ["16px", "22px"],
      },
      width: {
        one: "10%",
        two: "20%",
        three: "30%",
        four: "40%",
        five: "50%",
        six: "60%",
        seven: "70%",
        eight: "80%",
        nine: "90%",
        maxwidth: "1024px",
        tablet: "990px",
        laptop: "1200px",
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
        maxwidth: "1024px",
      },
      minWidth: {
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
      minHeight: {
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
      height: {
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
      inset: {
        r: "right-0",
      },
      keyframes: {
        "slide-animate": {
          "0%": {
            "-moz-transform": "translateX(0%)",
            transform: "translateX(0%)",
            "-webkit-transform": "translateX(0%)",
          },
          "100%": {
            "-moz-transform": "translateX(-100%)",
            transform: "translateX(-100%)",
            "-webkit-transform": "translateX(-100%)",
          },
        },
      },
      animation: {
        "slide-animate": "slide-animate 15s linear infinite alternate",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    nth2n.nthChild(),
    nth3n.nthChild(),
    nth4.nthChild(),
    nth5.nthChild(),
  ],
};
