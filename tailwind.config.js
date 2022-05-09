module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#dcd8cd",
        secondary: "#6f7072",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
