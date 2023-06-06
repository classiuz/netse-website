/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        primary: '#f97316',
        surface: '#fafafa',
        outline: '#e0e0e0',
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
