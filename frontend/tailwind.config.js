/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white' : '#FAFAFA',
      'black' : '#090909',
      'orange' : '#FFAA16',
      'whiteHover' : '#CFCFCF',
      'darkGrey' : '#171717',
    }
  },
  plugins: [],
}
