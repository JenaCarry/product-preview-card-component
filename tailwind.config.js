/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#f2ebe3",
        "price-color": "#3c8067",
        "h1-color": "#1c232b",
        "p-color": "#6c7289",
        "btn-hover": "#346f59",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        fraunces: "'Fraunces', serif",
      },
      letterSpacing: {
        widest: "0.375rem",
      },
    },
  },
  plugins: [],
};
