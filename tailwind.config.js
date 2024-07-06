// const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // flowbite.content(),
  ],
  theme: {
    colors: {
      'secondaryBg': '#3A4980',
      'primaryBg': '#3498DB',
      'greyBg': '#D9D9D9',
      'greyLight': '#EBEDEC',
      'whiteBg': '#F7F5F7',
      'goldBg': '#ED8C00',
      'redBg': '#CE011C',
      'primaryWhite': '#F7F5F7',
      'plainWhite': '#FFFFFF',
      'bodyBg': '#FAF7EF',
      'accentBg': '#F0F0F0',
      'blackBg': '#000000',
      'btn': '#2C3E50',
    },
    extend: {
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
};
