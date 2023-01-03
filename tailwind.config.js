module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: "#5CBEFF",
				dark: "#0A141D",
				gray: "#363C42",
				"light-gray": "#363C42",
			},
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
			},
			screens: {
				xs: "428px",
			},
		},
	},
	plugins: [],
};
