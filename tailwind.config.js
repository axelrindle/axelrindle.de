const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./public/index.html",
		"./src/**/*.{ts,tsx}",
	],
	safelist: [
		'text-xs',
		'text-sm',
		'text-base',
		'text-lg',
		{
			pattern: /(text-)[0-9]*(xl)/
		},
	],
	theme: {
		fontFamily: {
			...defaultTheme.fontFamily,
			'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				myPink: '#f80759'
			}
		}
	},
	plugins: [],
}
