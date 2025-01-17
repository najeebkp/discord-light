/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
          50: "#fafbfb",
        },
        green: {
          600: "#2D7D46",
          500: "#3BA55D",
        },
        blue: {
          500: "#5865F2",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },

  plugins: [],
};
