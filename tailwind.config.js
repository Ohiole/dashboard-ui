/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebarBg': '#F7F8FA',
        'sidebarBgDark': '#1D2330',
        'main': '#34CAA5',
        'navRight': '#0D062D',
        'bodyBg': '#FAFAFA',
        'bodyBgDark': '#19202C',
        'borderColor': '#EBECF2',
        'borderColorDark': '#333745',
        'text': '#26282C'
      },
      fontFamily: {
        'sans': 'Plus Jakarta Sans, sans-serif',
      },
      screens: {
        'lg': '1050px',
        'md': '700px',
        'sm': '550px'
      }
    },
  },
  plugins: [],
}

