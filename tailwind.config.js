module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
