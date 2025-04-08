/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E84C3D', // A vibrant red for the sandwich shop
        secondary: '#F1C40F', // A warm yellow
        dark: '#2C3E50', // Dark blue for text
        light: '#ECF0F1', // Light gray background
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-pacifico)', 'cursive'],
      },
    },
  },
  plugins: [],
}; 