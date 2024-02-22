/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4a9afb',
        'custom-light-blue': '#e3e2e9', // Note: This color is the same as 'custom-light-gray'
        'custom-black': '#101010',
        'custom-gray': '#232323',
        'custom-light-gray': '#e3e2e9', // Duplicate of 'custom-light-blue'
        'custom-lime-green': '#d6f93d',
        'custom-purple': '#a77ef2',
      },
    },
  },
  plugins: [],
};
