/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "widescreen": {"raw" : "(min-aspect-ratio: 3/2)"},
        "tallscreen": {"raw" : "(min-aspect-ratio: 1 /2)"},
      },
      top: {
        999: "-52"
      }
    },
  },
  plugins: [],
}
