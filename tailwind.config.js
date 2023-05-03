/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
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
