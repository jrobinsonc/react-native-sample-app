/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./{app,components,hooks}/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
  }