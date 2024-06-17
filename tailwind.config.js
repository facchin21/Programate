/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#F1EFE7",
        seconday: "#FFFFFF",
        hover: "#8D5443",
        detail : "#E7E4DA",
        
      },
      fontFamily: {
        "League" : ["League Spartan","sans-serif"],

      }
    },
  },
  plugins: [],
}

