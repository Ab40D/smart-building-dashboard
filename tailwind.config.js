/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#141414',
          700: '#1C1C1C',
          600: '#2A2A2A',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E8E8E8',
        },
        accent: {
          DEFAULT: '#2563EB',
          500: '#2563EB',
          600: '#1D4ED8',
          400: '#3B82F6',
        },
        signal: {
          DEFAULT: '#10B981', // "online" green for status dots
        },
        muted: {
          DEFAULT: '#6B7280',
          400: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        wider2: '0.14em',
      },
      maxWidth: {
        prose2: '72ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
