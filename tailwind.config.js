/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anon': ['Anonymous Pro', 'monospace'],
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        'blue': '#3B51FF',
        'green': '#68FF1E',
        'orange': '#FF9100',
        'ltBlue': '#43B5B9'
      },
    },
  },
  plugins: [],
}

