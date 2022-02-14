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
        'primary-pink': 'rgba(250,171,171)',
        'secondary-pink': '#f99797',
        'dark-pink': '#d7837f',
        'pale-pink': ' #ffe7e3',
        'light-grey': '#dde3ec',
        'hover-black': 'rgba(0, 0, 0, 0.04)',
      },
      maxWidth: {
        'article': '47.5rem',
      },
      margin: {
        '0-auto': '0 auto',
      }
    },
  },
  plugins: [],
}
