/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultConfig";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'display': ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'primary': '#00d084',
      'primary-light': '#7bdcb5',
      'primary-bg': '',
      'gray-bluish': '#abb8c3',
      'gray': '#6c757d',
      'gray-dark': '#343a40',
      'red': '#dc3545',
      'gray-text': '#888888',
      'dark-text': '#252525',
    },
    container: false,
  },
  plugins: [],
}