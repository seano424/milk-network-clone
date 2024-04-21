import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-fade': 'pulse-fade 1s infinite',
        blink: 'blink 1s linear infinite',
        'button-icon-movement':
          'button-icon-movement .6s cubic-bezier(.3,.86,.36,.95) forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'pulse-fade': {
          '0%, 100%': {
            opacity: '1',
            visibility: 'visible',
          },
          '50%': {
            opacity: '0',
            visibility: 'hidden',
          },
        },
        blink: {
          '0%, 49.9%': {
            opacity: '1',
          },
          '50%, 99.9%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'button-icon-movement': {
          '0%, 0.1%': {
            transform: 'none',
          },
          '49.9%': {
            transform: 'translateX(125%)',
          },
          '50%, 50.1%': {
            transform: 'translateX(-125%)',
          },
          '100%': {
            transform: 'none',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
export default config
