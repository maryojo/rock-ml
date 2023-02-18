/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      backgroundImage: {
        'town': "url('/src/images/town.jpg')",
      }
    }
  },
  plugins: [],
}
