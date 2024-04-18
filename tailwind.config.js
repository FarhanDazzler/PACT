/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    backgroundColor: {
      brown: {
        50: "#f5f0eb",
        100: "#e9dac9",
        200: "#d3b798",
        300: "#b18e68",
        400: "#8e723f",
        500: "#745c27",
        600: "#5a471d",
        700: "#443717",
        800: "#302810",
        900: "#1e1a0b",
      },
      burgundy: {
        50: "#f8e0e0",
        100: "#e4bcbc",
        200: "#d18c8c",
        300: "#ba5c5c",
        400: "#a43535",
        500: "#8c1111", // This is your main burgundy color
        600: "#7a0d0d",
        700: "#660808",
        800: "#520404",
        900: "#3f0000",
      },
      gold: {
        DEFAULT: "#FFD700", // Gold
        light: "#FFECB3", // Light Gold
        dark: "#B8860B", // Dark Gold
        pale: "#E6BE8A", // Pale Gold
        rose: "#B76E79", // Rose Gold
        extralight: "#DAA520",
      },
      maroon: {
        DEFAULT: "#800000", // Maroon
        light: "#B03060", // Light Maroon
        dark: "#8B0000", // Dark Maroon
      },
    },
    colors: {
      brown: {
        50: "#f5f0eb",
        100: "#e9dac9",
        200: "#d3b798",
        300: "#b18e68",
        400: "#8e723f",
        500: "#745c27",
        600: "#5a471d",
        700: "#443717",
        800: "#302810",
        900: "#1e1a0b",
      },
      burgundy: {
        50: "#f8e0e0",
        100: "#e4bcbc",
        200: "#d18c8c",
        300: "#ba5c5c",
        400: "#a43535",
        500: "#8c1111", // This is your main burgundy color
        600: "#7a0d0d",
        700: "#660808",
        800: "#520404",
        900: "#3f0000",
      },
      gold: {
        DEFAULT: "#FFD700", // Gold
        light: "#FFECB3", // Light Gold
        dark: "#B8860B", // Dark Gold
        pale: "#E6BE8A", // Pale Gold
        rose: "#B76E79", // Rose Gold
        extralight: "#DAA520",
      },
      maroon: {
        DEFAULT: "#800000", // Maroon
        light: "#B03060", // Light Maroon
        dark: "#8B0000", // Dark Maroon
      },
      fontFamily: {
        avant: ["Avantt"],
      },
    },
  },
};
export const plugins = [];
