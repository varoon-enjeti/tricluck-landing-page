/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu','sans-serif']
      },
      colors: {
        'off-black': '#393939',
        'soft-blue': '#598BEB'
      }

    },
  },
  plugins: [],
}

