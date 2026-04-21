/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5F0E1',
        'dark-olive': '#485342',
        'leaf-green': '#94B086',
        'tomato-red': '#D65C4F',
        'carrot-orange': '#E69A5D',
        'sage-green': '#8F9D7D',
      },
    },
  },
  plugins: [],
}