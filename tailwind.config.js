/** @type {import('tailwindcss').Config} */
// This file is for adding custom css class for tailwind properties.
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
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
      customYellow: {
        dark: "#d1a33c",
        light: "#f5e003",
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
      customYellow: {
        dark: "#d1a33c",
        light: "#f5e003",
      },
      maroon: {
        DEFAULT: "#800000", // Maroon
        light: "#B03060", // Light Maroon
        dark: "#8B0000", // Dark Maroon
      },
      fontFamily: {
        avantt: ["Avantt"],
        "avantt-bold": ["Avantt-Bold"],
        "avantt-semiBold": ["Avantt-SemiBold"],
        "avantt-regular": ["Avantt-Regular"],
      },
    },
    backgroundImage: {
      "svg-footer": "url('/assets/footer_image.png')",
      "login-page": "url('/assets/login_bg.png')",
      "default-page": "url('/assets/bg_image.png')",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    text: {
      fontFamily: {
        avantt: ["Avantt"],
        "avantt-bold": ["Avantt-Bold"],
        "avantt-semiBold": ["Avantt-SemiBold"],
        "avantt-regular": ["Avantt-Regular"],
      },
    },
    width: {
      "1/7": "14.2857143%",
    },
  },
};
export const plugins = [];
