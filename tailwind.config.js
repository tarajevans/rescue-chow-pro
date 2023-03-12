/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/images/feature-img2-free-img.jpg')",
        "header-pattern": "url('../public/images/AdobeStock_269478900.jpg')",
        "rescue-paws": "url(../public/images/rescueChowPaws.jpg)",
        "who-section": "url(../public/images/AdobeStock_156099814.jpg)",
      },
      colors: {
        "grey-223": "#DFDFDF",
      },
      fontFamily: {
        love: "'Dancing Script', cursive",
      },
    },
  },
  plugins: [],
};