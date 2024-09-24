/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/common/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
    },
  },
}

