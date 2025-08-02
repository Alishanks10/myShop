/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind where to look for class names so the generated CSS
  // includes only the utilities that are actually used in the project.
  // Without this configuration the `content` array is empty and no
  // Tailwind styles are generated at build time.
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

