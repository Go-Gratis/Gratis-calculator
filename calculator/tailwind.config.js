/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
      container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
      },
      fontFamily: {
        mono: ['monospace', 'Montserrat 300']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
