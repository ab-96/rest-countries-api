/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      dBlue: "hsl(209, 23%, 22%)",
      vDBlue: "hsl(207, 26%, 17%)",
      white: "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [],
}

