/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://rescue-chow-pro.s3.amazonaws.com/AdobeStock_156099814.jpg')",
        "header-pattern": "url('https://rescue-chow-pro.s3.amazonaws.com/AdobeStock_269478900.jpg')",
        "rescue-paws": "url('https://rescue-chow-pro.s3.amazonaws.com/rescueChowPaws.jpg')",
        "who-section": "url('https://rescue-chow-pro.s3.amazonaws.com/feature-img2-free-img.jpg')",
      },
      colors: {
        "grey-223": "#DFDFDF",
      },
      fontFamily: {
        love: "'Tahoma', sans-serif",
      },
    },
  },
  plugins: [],
};