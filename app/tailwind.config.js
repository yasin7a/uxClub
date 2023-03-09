/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "hindi-siliguri": ["Hind Siliguri", "sans-serif"],
      },
      screens: {
        onhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
