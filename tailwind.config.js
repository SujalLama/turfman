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
    container: false,
  },
  plugins: [],
}