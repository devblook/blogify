/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'page-limit': '40vw'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        'header':'1.6em'
      }
    },
  },
  plugins: [],
}

