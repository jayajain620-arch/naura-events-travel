/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#0B5F5B',
          dark: '#084B48',
          soft: '#EAF5F3',
        },
        gold: {
          warm: '#C8A45D',
          soft: '#F5EEDC',
        },
        navy: '#17212B',
        bgsoft: '#F8FAF9',
      }
    },
  },
  plugins: [],
}
