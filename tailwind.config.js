/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				bg_gray: "hsl(212, 45%, 89%)",
				dark_navy: "hsl(218, 44%, 22%)",
				light_gray: "#7D889E",
			},
			fontFamily: {
				main: ["Outfit", "sans-serif"],
			},
			fontSize: {
				normal: "15px",
			},
		},
	},
	plugins: [],
};
