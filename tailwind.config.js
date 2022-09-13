/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
       colors: {
        'primary': '#404040',
        'secondary': '#A6A6A6',
      },
      
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-image.png')",
        'mobile-image': "url('/src/assets/mobile-img.png')",
      },
      fontFamily: {
        'Lato': ['Lato','sans-serif'],
      },
    },
  },
  plugins: [],
}
