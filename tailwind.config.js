module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['"Playfair Display"', 'serif'],
    },
    extend: {
      colors: {
        'dark-grey': '#343535',
        'secondary-pink': '#f99797',
        'primary-pink': 'rgba(250,171,171)',
        'dark-pink': 'rgba(215, 131, 127)',
        'pale-pink': ' #ffe7e3',
        'light-grey': '#dde3ec',
        'hover-black': 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
