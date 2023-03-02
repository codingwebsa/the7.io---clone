/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00dc93",
        secondary: "#845aff",
        ancent: "#080e10",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
      },
    },
  },
  plugins: [],
};
