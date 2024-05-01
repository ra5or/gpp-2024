import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slide-blue": "#0FC7F940",
        "menu-color": "#FFFFFF",
        "menu-color-dark": "#37435B"
      },
    },
  },
  plugins: [
    nextui({
      layout: {}, 
      addCommonColors: true,
      themes: {
        light: {
          layout: {},
          colors: {},
        }
      },
    }),
  ],
};
