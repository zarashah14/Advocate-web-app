/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': 'var(--dark, #1E2027)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans'],
      },
      colors: {
        light: 'var(--light, #FFF)',
      },
      backgroundImage: {
        cards: "images/card.png"
      }
     
     
    },
  },
  variants: {},
  plugins: [],
}

