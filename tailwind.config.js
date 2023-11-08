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
        bgPink: '#fe84b9',
        spPink: '#ff00ea',
        spYellow:  '#d4ff00',
        spGreen: '#0dff00',
        spOrange: '#ff9100',
        spPurple: '#ae00ff',
        donutBrown: '#360201'
      },
      fontFamily: {
        limelight: ["Limelight", 'cursive'],
        inter: ["Inter", 'sans-serif'],
        agbalumo: ["Agbalumo", 'cursive']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
