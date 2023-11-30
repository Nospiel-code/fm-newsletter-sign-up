/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkSlateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        grStart: "hsl(347, 100%, 66%)",
        grEnd: "hsl(6, 100%, 65%)"
      },
      fontSize: {
        newxl: "3.5rem"
      },
      boxShadow: {
        custom: "0 .7rem 1rem .2rem hsla(347, 100%, 66%, .4)"
      }
    },
  },
  plugins: [],
}

