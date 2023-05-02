/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7F7FA',
          100: '#F0EFF6',
          200: '#D8D6E8',
          300: '#C1BEDA',
          400: '#938DBE',
          500: '#645CA2',
          600: '#5A5392',
          700: '#3C3761',
          800: '#2D2949',
          900: '#1E1C31',
        },
      }
    },
    fontFamily: {
      'ubuntu': ['"Ubuntu"','"Noto Sans TC"', 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
