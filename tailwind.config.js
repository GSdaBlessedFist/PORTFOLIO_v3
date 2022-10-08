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
      },
      animation:{
        fadeIn: "fadeIn .456s linear forwards",
        slideInRight : "slideInRight .456s linear forwards",
        slideInUp : "slideInUp .456s linear forwards"
      },
      keyframes:{
        fadeIn:{
          '0%':{ opacity: 0},
          '100%':{ opacity: 1 }
        },
        slideInRight:{
          '0%':{ transform: "translateX(-50px)" },
          '100%':{ transform: "translateX(0px)" }
        },
        slideInUp:{
          '0%':{ transform: "translateY(50px)" },
          '100%':{ transform: "translateY(0px)" }
        }
      }
    }    
  },
  plugins: [],
}
// https://colorhunt.co/palette/464660368b85b4b897f1e9e5


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