/* eslint-disable global-require */
module.exports = {
  content: [
    './src/scripts/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
