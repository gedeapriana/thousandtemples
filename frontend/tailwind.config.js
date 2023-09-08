/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-col': '#404040',
        'white-col': '#fefefe',
        'black-darkmode': '#171717',
        'white-darkmode': '#f4f4f5',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
  darkMode: 'class',
};
