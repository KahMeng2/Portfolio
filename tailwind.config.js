/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Roboto Mono", "monospace"],
      },
      colors: {
        customPurple: "#696C9F",
        secondary: "#FDF9F6",
        bgsecond: "#EBEBF4",
        accent: "B48C8A",
      },
    },
  },
  plugins: [],
};
