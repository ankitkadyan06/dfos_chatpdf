/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': [ 'Poppins', 'sans-serif'],
      'montserrat': [ 'Montserrat', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'inter': ['inter', 'sans-serif']
    }
  },
  plugins: [],
}
