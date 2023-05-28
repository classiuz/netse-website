/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        surface: '#fafafa',
        outline: '#e5e5e5',
        error: '#dc2626',
      },
      transitionProperty: {
        height: 'max-height',
      },
      transitionTimingFunction: {
        open: 'cubic-bezier(.4,0,.2,1)',
      },
    },
  },
  plugins: [],
}
