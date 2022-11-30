const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./pageComponents/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layout/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary: '#416ff4',
			secondary: '#0d152e',
			dark: {
				400: '#81838c',
			},
			...colors,
		},
		extend: {
			boxShadow: {
				'3xl': '0 11px 60px -15px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
};
