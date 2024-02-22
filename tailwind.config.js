/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Define custom maxWidth
      maxWidth: {
        'custom-8xl': '88rem', 
      },

      colors: {
        'custom-blue': '#4a9afb',
        'custom-light-blue': '#58b3f4', 
        'custom-black': '#101010',
        'custom-gray': '#232323',
        'custom-light-gray': '#e3e2e9', 
        'custom-lime-green': '#d6f93d',
        'custom-purple': '#a77ef2',
      },
    },
  },
  plugins: [],
};
