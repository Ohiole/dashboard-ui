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
      }
    },
  },
  plugins: [],
}

