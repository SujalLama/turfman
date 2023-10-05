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
      lg: '1024px',
      xl: '1200px',
    },
    extend : {
      typography: {
        DEFAULT: {
          css: {
            color: '#888888',
            lineHeight: '1.5',
            ul : {
              
              paddingLeft: '1em'
            },
            p : {
              marginTop: '1.6em',
              marginBottom: '1.6em',
            },
            li : {
              marginTop: '1em',
              marginBottom: '1em',
            }
          },
        }
      },
      colors: {
        'primary': {
          lighter: '#7bdcb5',
          light: '#00d084',
          DEFAULT: '#86bb46'

        },
        'gray': {
          'bluish': '#abb8c3',
          DEFAULT: '#6c757d',
          'dark': '#343a40',
          'text': '#888888',
          'darker': '#252525'
        },
        'red': '#dc3545',
        'border-color': 'rgba(255,255,255,.2)'
      },
      boxShadow: {
        'sm': '0px 0px 16px -10px rgba(0, 0, 0, 0.3)',
        'md': '0px 0px 10px -4px rgba(0, 0, 0, 0.3)',
        'lg': '0 0 30px rgba(0,0,0,.07)',
      },
      spacing: {
        3.5: '15px',
        25: '100px'
      },
      screens: {
        'large': '992px',
      }
    },
    container: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}