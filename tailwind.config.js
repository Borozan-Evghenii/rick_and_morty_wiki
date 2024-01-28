/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize:{
        title: '9.375rem',
        title2: '5.3125rem',
        title3: '3rem',
        title4: '1.25rem',
        title5: '1rem',
        regular: '0.875rem',
      },
      fontFamily:{
        sans: ['Syne', 'sans-serif']
      },
      colors:{
        light:{
          background: '#ffffff',
          primary: '#333333',
          secondary:'#5B616E',
          thirty: '#F8F9FA',
          accent: '#EEF0F3',
          hover: '#ECF0F3'
        },
        dark:{
          background: '#001F3F',
          primary: '#F0F5F9',
          secondary:'#94A3B8',
          thirty: '#052546',
          accent: '#334155',
          hover: '#052A4F'
        }
      },
      container: {
        center: true
      }
    }
  },
  plugins: []
};

