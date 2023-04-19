/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown1: '#faf0e6',
        brown2: '#fff0db',
        brown3: '#eed9c4',
        brown4: '#e4d5b7',
        brown5: '#d9b99b'
      },
      fontFamily: {
        'montserrat': ["Montserrat", "serif"],
        'epilogue': ['Epilogue', "serif"],
        basking: ["Basking", "serif"]
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

