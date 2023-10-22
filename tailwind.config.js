/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dBlue: "hsl(209, 23%, 22%)",
      vDBlue: "hsl(207, 26%, 17%)",
      white: "hsl(0, 0%, 100%)",
      dGrey: " hsl(0, 0%, 52%)",
      lGrey: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
