/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c2410c',   // deep orange - bricks theme ke liye
        brick: '#9f1239',
        stone: '#44403c',
      },
    },
  },
  plugins: [],
}