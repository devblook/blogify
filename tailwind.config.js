/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      'mobile': '340px',
      'computer':'700px',
    },
    extend: {
      height: {
        'all-page': '100vh',
      },
      width: {
        'page-limit': '40vw'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        'header':'1.6em',
        '1.5xl':'1.3em'
      }
    },
  },
  plugins: [],
}

