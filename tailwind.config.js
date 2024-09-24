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
        "fade-in-down": "fade-in-down 0.2s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      }
    },
  },
  plugins: [],
}