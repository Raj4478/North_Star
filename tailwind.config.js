/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.{jsx,ts,js,tsx}"
  ],
  theme: {

    extend: {
      colors : {

          var1 : '#F6627C' ,
          var2 : "#36454F",
          var3 : "#F5F4F1",
          Var4 : "#FFFFFF",
          var5 : "#146EF5",
   
      },

      fontFamily: {

        'brush' : ['Comforter Brush'],
        'int' : ['Inter'],
        'abr' : ['Abril Fatface'],
        'ams' : ['New Amsterdam']
      }
    },
  },
   
  plugins: [],
}