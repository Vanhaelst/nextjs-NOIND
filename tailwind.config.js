/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-bebas)", ...fontFamily.sans],
      serif: ["var(--font-ibmPlexMono)", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
