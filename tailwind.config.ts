import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors.constans'
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',

  theme: {
    colors: COLORS,
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
