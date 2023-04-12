/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  
  theme: {
    screens: {
      'xs': '376px',
      'md': '769px',
    },
  },
  plugins: [],
}
