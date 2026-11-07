/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stealth: {
          DEFAULT: '#020307',
          900: '#05070c',
          800: '#0a0e16',
          700: '#111826',
        },
        hud: {
          cyan: '#00f2fe',
          red: '#ff0055',
          green: '#00ff87',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'scan-y': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' },
        },
        'sweep-x': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(420%)' },
        },
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
        'metal-shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'badge-flow': {
          to: { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'scan-y': 'scan-y 2.8s linear infinite',
        'sweep-x': 'sweep-x 3.2s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'spin-reverse': 'spin-reverse 14s linear infinite',
        'metal-shimmer': 'metal-shimmer 6s linear infinite',
        'badge-flow': 'badge-flow 3s linear infinite',
      },
      boxShadow: {
        'glow-cyan': '0 0 32px rgba(0, 242, 254, 0.22)',
        'glow-green': '0 0 24px rgba(0, 255, 135, 0.25)',
        'glow-red': '0 0 35px rgba(239, 68, 68, 0.5)',
      },
    },
  },
  plugins: [],
};
