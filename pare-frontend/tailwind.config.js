/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-base': '#BE1E2D',
        'black-base': '#151515',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      metropolis: ['Metropolis'],
      helvetica: ['Helvetica'],
      poppins: ['Poppins'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
