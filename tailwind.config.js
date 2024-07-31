/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: ['selector', ':global(.dark)'],
	theme: {
		extend: {
			colors: {
				dark: {},

				light: '#d8dbe0',
				dark: '#28292c',
				link: 'rgb(27, 129, 112)',
				'link-hover': 'rgb(24, 94, 82)',
			},
			spacing: {
				0.1: '1px',
				60: '25rem',
				30: '20rem',
				100: '30rem',
			},
		},
	},
	plugins: [],
}
