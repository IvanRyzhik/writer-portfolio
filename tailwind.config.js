/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./source/**/*.{js,ts,jsx,tsx}",    // якщо є папка source з кодом
    "./app/**/*.{js,ts,jsx,tsx}",       // якщо з часом додаси app router
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}