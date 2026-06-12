import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        paper: '#f7f7f3',
        steel: '#737373',
        line: '#d8d8d2',
        graphite: '#1d1d1b',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        sharp: '0 24px 70px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
