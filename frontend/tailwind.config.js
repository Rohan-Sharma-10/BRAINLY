/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          200: "#d9ddee",
          500: "#9492db",
          600: "#7164c0",
        }, 
        gray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c"
        }, 
        'primary-purple': '#6B46C1',
        'primary-light': '#9F7AEA',
        'primary-dark': '#44337A',
      }
    },
  },
  plugins: [],
};