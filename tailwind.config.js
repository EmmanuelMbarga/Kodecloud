/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
        inter:['Inter','sans-serif']
      }
    
    },
    screens:{
      'MiniPortable':{'max':'99px'},
      'Portable':{'min':'100px','max':'480px'},
      'Desktop':{'min':'481px','max':'991px'},
      'Laptop':{'min':'992px','max':'1800px'},
      'screenLarge':{'min':'1801px'},
      'Laptop2':{'min':'992px','max':'1371px'}
    }
  },
  plugins: [],
}

