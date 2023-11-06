/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '649px'}, // Add a custom 'sm' breakpoint for screens smaller than 650px
      },
      colors: {
        bgBeige: '#faf3eb',
        spPink: '#ff00ea',
        spYellow:  '#d4ff00',
        spGreen: '#0dff00',
        spOrange: '#ff9900',
        spPurple: '#ae00ff'
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
