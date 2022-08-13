module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '428px',
      },
    },
  },
  plugins: [],
  colors: {
    'dark-blue': '#0A141D',
  }
}