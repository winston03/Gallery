/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '360px', 'max': '768px' },
        'md': { 'min': '768px', 'max': '1024px' },
        'lg': { 'min': '1024px', 'max': '1280px' },
      },
      fontFamily: {
        'chelsea': ['Chelsea Market', 'sans-serif'],
        'whisper': ['Whisper', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

