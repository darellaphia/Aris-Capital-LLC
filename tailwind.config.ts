import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1F3C',
          deep: '#081526',
          light: '#1a2f50',
        },
        teal: {
          DEFAULT: '#00C2A8',
        },
        steel: {
          DEFAULT: '#5A7A96',
          light: '#8fa8bc',
        },
        offwhite: '#F5F7FA',
        border: '#e0e7ef',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
        nav: '0.06em',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
