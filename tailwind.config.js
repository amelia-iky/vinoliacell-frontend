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
        primary: '#dbf9fc',
        boxmaps: '#4C4C4C',
        shadowform: '#73BEFF',
        abutipis: '#E5E5E5',
        pink: '#FF91EB',
      },
    },
  },
  plugins: [],
};
