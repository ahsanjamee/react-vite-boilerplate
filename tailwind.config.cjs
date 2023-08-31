/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#eee',
          textColor: '#003537',
          light: '#7a7a7a',
          green: '#96CB63',
          darkBlue: '#002F9C',
          bg2: '#9164cd1a',
          bg: '#F7F4ED',
          border: '#0035374d',
          yellow: '#E3A91B',
          red: '#F44336',
          blue: '#4277FF',
          brown: '#CD7349',
          bg3: '#2f4858',
        },
      },
      fontSize: {
        s18: '1.125rem',
        s22: '1.375rem',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
};
