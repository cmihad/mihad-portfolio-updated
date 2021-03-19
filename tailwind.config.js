module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'spartan': ['Spartan'],

      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
