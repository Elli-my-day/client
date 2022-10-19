/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/base/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-color-light': 'var(--primary-color-light)',
        'primary-color-dark': 'var(--primary-color-dark)',
        'secondary-color': 'var(--secondary-color)',
        'secondary-color-light': 'var(--secondary-color-light)',
        'secondary-color-dark': 'var(--secondary-color-dark)',
        'gray-color': 'var(--gray-color)',
        'gray-color-light': 'var(--gray-color-light)',
        'gray-color-dark': 'var(--gray-color-dark)',
      },
    },
  },
  plugins: [],
};
