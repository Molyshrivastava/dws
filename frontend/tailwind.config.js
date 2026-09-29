/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2E5C',
          50: '#EEF3FA',
          100: '#D6E2F2',
          600: '#0C3A75',
          700: '#0A2E5C',
          800: '#082447',
          900: '#051A33',
        },
        steel: {
          DEFAULT: '#4A5568',
          100: '#E2E6EB',
          300: '#A0AEC0',
          500: '#4A5568',
          700: '#2D3748',
        },
        accent: { DEFAULT: '#E53E3E', dark: '#C53030' },
        surface: '#EDF1F5',
        ink: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Barlow', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(10, 46, 92, 0.08)',
        'card-hover': '0 12px 32px rgba(10, 46, 92, 0.16)',
      },
    },
  },
  plugins: [],
};