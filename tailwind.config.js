/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "10px",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
