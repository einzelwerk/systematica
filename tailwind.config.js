/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{njk,ts}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1322px',
    },
    colors: {
      gray: {
        0: '#fff;',
        100: '#F0EFF4;',
        200: '#DBDAE4',
        500: '#818087',
        600: '#454258',
        700: '#424148;',
        900: '#1B1B1E;'
      },
      success: '#5BFF41;',
      error: '#FF4158;',
      accent: {
        200: '#E5E3FE;',
        500: '#8076FA;',
        600: '#5E50FD;',
        800: '#2C2951;'
      },
      overlay: 'rgba(0, 0, 0, 0.66)',
    },

    spacing: {
      ...defaultTheme.spacing,
      header: 'var(--header-height)'
    },

    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif'],

    },
    fontSize: {
      xs: ['0.75rem', '18px'],
      sm: ['0.875rem', '20px'],
      base: ['1rem', '24px'],
      lg: ['1.125rem', '28px'],
      xl: ['1.25rem', '30px'],
      '2xl': ['1.5rem', '32px'],
      '3xl': ['2rem', '40px'],
      '4xl': ['2.5rem', '50px'],
      '5xl': ['3rem', '60px'],
      '6xl': ['3.75rem', '70px']
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

    require('@tailwindcss/aspect-ratio'),
  ],
}