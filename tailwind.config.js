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
        'borderColor': '#EBECF2',
        'text': '#26282C'
      }
    },
  },
  plugins: [],
}

