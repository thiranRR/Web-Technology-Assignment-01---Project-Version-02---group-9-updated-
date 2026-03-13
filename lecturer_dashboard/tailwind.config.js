/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#34495e',
        'sidebar-active': '#455a75',
        'accent-blue': '#456882',
        'paper-pdf': '#e74c3c',
      },
    },
  },
  plugins: [],
}