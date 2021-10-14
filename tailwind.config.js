module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes:{
        "gate":{
          "from":{
            transform: "translateX(-0.5rem)",
          },
          "to":{
            transform:"translateX(0)"
          }
        },
        "drainSauce":{
          "from":{
            transform: "translateX(0.5rem)",
          },
          "to":{
            transform: "translateX(0)"
          }
        },
        "home":{
          "from":{
            transform: "translateY(-6rem)"
          },
          "to":{
            transform: "translateY(0)"
          }
        }
      },
      animation:{
        "gate":"gate 0.5s ease-in-out",
        "drainSauce": "drainSauce 0.5s ease-in-out",
        "home": "home 0.5s ease-out"
      },
      textColor: {
        "text-yellow": "#FFFF00",
      }
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "group-hover"],
      textDecoration: ["active"],
      translate:["group-hover", "group-focus"],
      opacity:["group-focus"],
    },
  },
  plugins: [],
}
