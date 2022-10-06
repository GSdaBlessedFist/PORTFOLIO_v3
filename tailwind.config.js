/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'bgLight':'#C4C4D4',
        "bgDark":"#15151E",
        'primary': '#464660',
        "lightMidtone": "#A7DDD9",
        'midtone': '#368B85',
        'light': '#B4B897',
        'accent': '#F1E9E5'
      }
    }    
  },
  plugins: [],
}



// theme: {
//     extend:{
//       colors: {
//         transparent: 'transparent',
//         current: 'currentColor',
//         'white': '#ffffff',
//         'bgLight':'#C4C4D4',
//         "bgDark":"#15151E",
//         'primary': '#464660',
//         "lightMidtone": "#A7DDD9",
//         'midtone': '#368B85',
//         'light': '#B4B897',
//         'accent': '#F1E9E5'
//       }
//     }    
//   }