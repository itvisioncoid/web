/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem'
			}
		},
		screens: {
			xs: '576px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px'
		},
		extend: {
			colors: {
				text: {
					50: '#f5f1f0',
					100: '#ebe2e0',
					200: '#d6c5c2',
					300: '#c2a8a3',
					400: '#ad8b85',
					500: '#996f66',
					600: '#7a5852',
					700: '#5c423d',
					800: '#3d2c29',
					900: '#1f1614',
					950: '#0f0b0a'
				},
				background: {
					50: '#f5f0f0',
					100: '#ebe0e0',
					200: '#d6c2c2',
					300: '#c2a3a3',
					400: '#ad8585',
					500: '#996666',
					600: '#7a5252',
					700: '#5c3d3d',
					800: '#3d2929',
					900: '#1f1414',
					950: '#0f0a0a'
				},
				primary: {
					50: '#feece7',
					100: '#fdd9ce',
					200: '#fab39e',
					300: '#f88d6d',
					400: '#f6673c',
					500: '#f4420b',
					600: '#c33409',
					700: '#922707',
					800: '#611a05',
					900: '#310d02',
					950: '#180701'
				},
				secondary: {
					50: '#f5f1f0',
					100: '#eae3e1',
					200: '#d6c6c2',
					300: '#c1aaa4',
					400: '#ac8d86',
					500: '#987167',
					600: '#795a53',
					700: '#5b443e',
					800: '#3d2d29',
					900: '#1e1715',
					950: '#0f0b0a'
				},
				accent: {
					50: '#f5f1f0',
					100: '#eae3e1',
					200: '#d6c7c2',
					300: '#c1aba4',
					400: '#ac8f86',
					500: '#987367',
					600: '#795c53',
					700: '#5b453e',
					800: '#3d2e29',
					900: '#1e1715',
					950: '#0f0c0a'
				}
			}
		}
	},
	plugins: []
};

module.exports = config;
