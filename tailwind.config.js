/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c2410c',
        brick: '#9f1239',
        stone: '#44403c',
      },
//       keyframes: {
//   ring: {
//     "0%": { transform: "rotate(0deg)" },
//     "10%": { transform: "rotate(25deg)" },
//     "20%": { transform: "rotate(-25deg)" },
//     "30%": { transform: "rotate(20deg)" },
//     "40%": { transform: "rotate(-20deg)" },
//     "50%": { transform: "rotate(15deg)" },
//     "60%": { transform: "rotate(-15deg)" },
//     "70%": { transform: "rotate(10deg)" },
//     "80%": { transform: "rotate(-10deg)" },
//     "90%": { transform: "rotate(5deg)" },
//     "100%": { transform: "rotate(0deg)" },
//   },
// },
// animation: {
//   ring: "ring 1.2s infinite",
// },
    },
  },
  plugins: [],
}