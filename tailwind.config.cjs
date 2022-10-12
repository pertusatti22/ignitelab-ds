/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif'
			},
		},
	},
	plugins: [],
}

//Storybook é uma ferramenta que permite visualizar os componentes funcionando de forma isolada.
