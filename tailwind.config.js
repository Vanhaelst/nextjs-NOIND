/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "var(--font-bebas)",
        "__Bebas_Neue_c7a032",
        "__Bebas_Neue_Fallback_c7a032",
        ...fontFamily.sans,
      ],
      serif: [
        "var(--font-ibmPlexMono)",
        "__IBM_Plex_Mono_c9c68a",
        "__IBM_Plex_Mono_Fallback_c9c68a",
        ...fontFamily.sans,
      ],
      bebas: [
        "__Bebas_Neue_c7a032",
        "__Bebas_Neue_Fallback_c7a032",
        ...fontFamily.sans,
      ],
      plex: [
        "__IBM_Plex_Mono_c9c68a",
        "__IBM_Plex_Mono_Fallback_c9c68a",
        ...fontFamily.sans,
      ],
    },
    extend: {},
  },
  plugins: [],
};
