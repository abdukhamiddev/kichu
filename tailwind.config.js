/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './shared/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {

      apercu400: ['apercu_regular'],
      apercu500: ['apercu_medium'],
      apercu700: ['apercu_bold'],
    },
    extend: {},
  },
  plugins: [],
};
