/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans'],
        main: ['Kumbh Sans'],
      },
      colors: {
        boxmaps: '#4C4C4C',
      },
    },
  },
  plugins: [],
};
