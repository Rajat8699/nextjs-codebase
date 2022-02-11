const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
		"./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'primary': {
					DEFAULT: '#3B82F6',
					'50': '#EBF2FE',
					'100': '#D7E6FD',
					'200': '#B0CDFB',
					'300': '#89B4FA',
					'400': '#629BF8',
					'500': '#3B82F6',
					'600': '#0B61EE',
					'700': '#084BB8',
					'800': '#063583',
					'900': '#041F4D'
				  },
				  "secondary": colors.teal
				},
    },
  },
  plugins: [],
}