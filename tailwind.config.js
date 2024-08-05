/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'green': 'rgb(113, 197, 98)',
        'greenLight': 'rgb(113, 224, 164)',
      }
    },
  },
  plugins: [require("tailgrids/plugin")], 
  plugins: [require("daisyui")],
}

