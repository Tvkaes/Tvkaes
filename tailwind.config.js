/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif'],
        body: ['"Sora"', 'ui-sans-serif'],
      },
      colors: {
        brand: {
          primary: '#00d4ff',
          secondary: '#7c3aed',
          accent: '#f97316',
        },
      },
      boxShadow: {
        'glow-sm': '0 10px 30px rgba(0, 212, 255, 0.25)',
        'glow-md': '0 25px 60px rgba(124, 58, 237, 0.25)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateY(35px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
        pulseBorder: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-slide': 'fadeSlide 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-border': 'pulseBorder 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
