/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#161721",
        "header-green": "#41FFB7",
        "content-bg": "#0F0F13",
      },
    },
  },
  plugins: [],
}

