import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 900: '#0a0a0a', 700: '#1a1a1a', 500: '#6b6b6b' }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
        glass: '0 8px 30px rgba(0,0,0,0.15)'
      },
      borderRadius: { '2xl': '1rem', '3xl': '1.5rem' },
      fontFamily: {
        sans: ['var(--font-mont)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
export default config
