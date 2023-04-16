/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'back': {
          DEFAULT: '#101010',
        },
        'indigo': {
          DEFAULT: '#22c55e',
        },
        'card': {
          DEFAULT: '#151515',
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  
}
