const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto"],
      logo: ["Pattaya"],
    },
    colors: {
      // primary: {
      //   DEFAULT: "#193F6C",
      // },
      // linearBlue: {
      //   dark: "#084D8D",
      //   light: "#00F0FF",
      // },
      blue: colors.blue,
      cyan: colors.cyan,
      white: colors.white,
      primary: "#193F6C",
      lightblue: "#3F78AD",
      lightgrey: "#EEF6FA",
      grey: "#8C8888",
      darkblue: "#0C3B95",
      emerald: "#10B981",
      red: "#EF4444",
      green: "#00FF00",
      darkgreen: "#006400",
      blueGray: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
