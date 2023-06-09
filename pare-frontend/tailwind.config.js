/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-base': '#BE1E2D',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      metropolis: ['Metropolis'],
      helvetica: ['Helvetica'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
