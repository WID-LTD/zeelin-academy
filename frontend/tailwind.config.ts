import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FCF7ED',
          100: '#F7EBD0',
          200: '#EFD59E',
          300: '#E7C06C',
          400: '#DFAA3A',
          500: '#DFBA6B',
          600: '#C29C47',
          700: '#A37F33',
          800: '#7A5E24',
          900: '#523E16'
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        zeelin: {
          black: '#080808',
          dark: '#0c0c0c',
          card: '#111111',
          border: '#1f1f1f',
          light: '#FBFBFB',
          cream: '#F5F5F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFBA6B 0%, #C29C47 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(223,186,107,0.08) 0%, transparent 70%)',
        'hero-glow-blue': 'radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)'
      }
    }
  },
  plugins: []
}

export default config
