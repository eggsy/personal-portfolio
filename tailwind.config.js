const { fontFamily } = require("tailwindcss/defaultTheme");

const Config = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = Config;
