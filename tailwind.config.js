/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '649px'}, // Add a custom 'sm' breakpoint for screens smaller than 650px
      },
      colors: {
        bgBeige: '#faf3eb'
      },
      fontFamily: {
        limelight: ["Limelight", 'cursive'],
        inter: ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
