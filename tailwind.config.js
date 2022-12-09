/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: {
          DEFAULT: "#1F1F1F",
        },
        greyBrand: {
          DEFAULT: "#F5F5F5",
          "500":"#5F6165"
        },
        brand: {
          DEFAULT: "#A162F7",
        },
      },
      fontFamily: {
        vq: '"Speed Rush Regular", sans-serif',
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        // gradRotate: {
        //   "0% , 100%": {
        //     "--gradAnim": "to left",
        //   },
        //   "25%": {
        //     "--gradAnim": "to bottom",
        //   },
        //   "50%": {
        //     "--gradAnim": "to right",
        //   },
        //   "75%": {
        //     "--gradAnim": "to top",
        //   },
        // },
      },
    },
    gridColsFit: {
      5: "25rem",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          "grid-cols-fit": (value) => ({
            "grid-template-columns": `repeat(auto-fit, minmax(${value}, 1fr))`,
          }),
        },
        {
          values: { 1: "5rem", 2: "10rem", 3: "15rem", 4: "20rem" },
        },
        {
          theme: {
            gridColsFit: { 1: "5rem", 2: "10rem", 3: "15rem", 4: "20rem" },
          },
        }
      );
      matchUtilities(
        {
          "grid-cols-fit-fixed": (value) => ({
            "grid-template-columns": `repeat(auto-fit, ${value})`,
          }),
        },
        {
          values: { 1: "5rem", 2: "10rem", 3: "15rem", 4: "20rem" },
        }
      );
      matchUtilities(
        {
          "grid-cols-fill": (value) => ({
            "grid-template-columns": `repeat(auto-fill, minmax(${value}, 1fr))`,
          }),
        },
        {
          values: { 1: "5rem", 2: "10rem", 3: "15rem", 4: "20rem" },
        },
        {
          theme: {
            gridColsFi11: {},
          },
        }
      );
      matchUtilities(
        {
          "grid-cols-fill-fixed": (value) => ({
            "grid-template-columns": `repeat(auto-fill, ${value})`,
          }),
        },
        {
          values: { 1: "5rem", 2: "10rem", 3: "15rem", 4: "20rem" },
        }
      );
      addUtilities({
        ".center-center": {
          justifyContent: "center",
          alignItems: "center",
        },
      });
    }),
  ],
};
