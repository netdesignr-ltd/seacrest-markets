const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        seacrest: {
          50: '#134074',
          100: '#13315C',
          150: '#333F51',
          200: '#8896AB',
          300: '#101729',
          350: '#00b4d8',
          400: '#131B30',
          450: '#161F36',
          500: '#0B2545',
        },
        cyan: colors.cyan,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
