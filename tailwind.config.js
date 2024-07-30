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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          "@apply bg-white text-customPurple border rounded-md border-customPurple px-4 py-2 font-text font-bold flex items-center space-x-2 hover:bg-customPurple hover:text-white transition duration-300":
            {},
        },
      });
    },
  ],
};
