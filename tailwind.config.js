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
        'primary-pink': 'rgba(250,171,171)',
        'dark-pink': '#d7837f',
        'brown': '#381c00',
        'light-brown': '#9c8063',
        'hover-black': 'rgba(0, 0, 0, 0.2)',
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
