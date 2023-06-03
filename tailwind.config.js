/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/*.{astro,js}',
    './src/pages/index.{astro,js}',
    './src/layouts/*.{astro,js}',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch */

