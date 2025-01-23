/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '!./src/pages/Community/nodebb/node_modules',
    '!./**/node_modules',
    '!./src/pages/Community/nodebb/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F6F4', 
        background2: '#EBF5FB', 
        colour1: '#57A6A1',
      },
    },
  },
  plugins: [],
}

