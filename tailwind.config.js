/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        'anton': [ 'Anton', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif'],
        'cutive':['Cutive', 'serif']
      },
    extend:{
      screens:{
        'xs': '360px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'bgLight':'#C4C4D4',
        "bgDark":'#15151E',
        'primary': '#464660',
        "lightMidtone": "#A7DDD9",
        'midtone': '#368B85',
        'light': '#B4B897',
        'accent': '#F1E9E5',
        'dsPrimary':'#ff1800',/* ds = DangerouslySmoothie */
        'dsDarkPrimary':'#9d2f2d',
        'dsSecondary':'#ffa900',
        'dsMinor':'#ffbc05',
        'dsAccent':'#a8ff00'
      },
      animation:{
        fadeIn: "fadeIn .36s linear forwards",
        slideInRight : "slideInRight .36s linear forwards",
        slideInUp : "slideInUp .36s linear forwards",
        fadeInOut: "fadeInOut 2.25s ease-out 5s infinite"
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
        },
        fadeInOut:{
          '0%,100%':{
            opacity:0,
            transform: "scale(1)"
          },
          "25%":{
            opacity:0.25
          },
          "50%":{
            opacity:1,
            
          },
          "80%":{
            opacity:0
          },
          "100%":{
            transform: "scale(1.25) translate(0px,-8px)",
            
          }
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