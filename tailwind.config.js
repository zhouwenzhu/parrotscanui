/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {},
/*     screens: {
      "_sm": {
        max: "840px",
      },
      "_md": {
        max: "1020px",
      },
      "_lg": {
        max: "1440px",
      },
      "sm": {
        min: "840px",
      },
      "md": {
        min: "1020px",
      },
      "lg": {
        min: "1440px",
      },
    } */ 
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.custom-top': {
          'position': 'absolute',
          'top': '53.3333%',
          'left': '30%',
         
       }
      });
    },
  ],
}

