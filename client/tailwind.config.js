/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071a2f',
        ink: '#102235',
        steel: '#315f86',
        azure: '#0d7fc2',
        silver: '#d7e2ec',
        platinum: '#f4f7fa',
        gold: '#caa26d'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(7, 26, 47, 0.12)'
      }
    }
  },
  plugins: []
};
