/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/index.html",
    "./dist/About.html",
    "./dist/Services.html",
    "./dist/pages.html",
    "./dist/work.html",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fbfbfb",
        "color-1": "#9e9e9e",
        primary: "#ff7425",
        "color-2": "#181818",
        gray: {
          100: "rgba(24, 24, 24, 0.61)",
          200: "rgba(24, 24, 24, 0.8)",
        },
        silver: "#c4c4c4",
        secondary: "#2a2a2a",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        p: "'DM Sans'",
        h2: "Syne",
      },
    },
    fontSize: {
      mid: "1.063rem",
      lg: "1.125rem",
      lg1: "1.625",
      smi: "0.813rem",
      "31xl": "3.125rem",
      "32xl": "3rem",
      "3xl": "1.375rem",
      "11xl": "1.875rem",
      sm: "0.875rem",
      "61xl": "5rem",
      inherit: "inherit",
      "61xl2": "4rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
