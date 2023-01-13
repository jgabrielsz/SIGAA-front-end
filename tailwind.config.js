/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/*.js'],
  theme: {
    extend: {
      borderRadius: {
        'xlg': '1rem',
      },
      colors: {
        'primary': '#381E72',
        'back': '#1C1B1F',
        'dark-error': '#8C1D18',
        'dark-onsurface': '#E6E1E5',
        'dark-surface2': '#1C1B1F'
      }
    },
  },
  plugins: [],
}
