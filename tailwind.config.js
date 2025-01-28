// const flowbite = require("flowbite-react/tailwind");

const { default: theme } = require("@material-tailwind/react/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     flowbite.plugin(),
//   ],
// };

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to Tailwind
      },
      colors: {
        primeColor: "#1263B0",
        whiteColor: "#FFFFFF",
        secondColor: "#E96759",
        greyColor: "#D9D9D9",
      },
    },
  },
  plugins: [require("daisyui")],
};
