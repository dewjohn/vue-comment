module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'upload': "url('../assets/logo.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
