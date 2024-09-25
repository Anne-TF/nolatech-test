/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/common/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'app-primary': '#F69051',
        'app-secondary': '#151514',
        'app-tertiary': '#E8EDDF',
        'app-quaternary': '#CFDBD5',
        'app-accent': '#333533',
      },
      animation: {
        "fade-in-down": "fade-in-down .5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "jiggle": 'jiggle 1s ease-in-out 1s infinite',
        "fade-out-up": 'fade-out-up 1s ease-in-out 0.25s 1',
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
        },
        "slide-in-left": {
          "0%": {
            visibility: "invisible",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "jiggle": {
          "0%": {
            transform: "scale3d(1, 1, 1)"
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)"
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)"
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)"
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)"
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)"
          },
          "100%": {
            transform: "scale3d(1, 1, 1)"
          },
        },
      }
    },
  },
  plugins: [],
}