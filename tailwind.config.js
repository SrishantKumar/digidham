/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#06050C',
        cosmic: '#0D0B1A',
        saffron: '#FF9933',
        'saffron-light': '#FFB347',
        gold: '#D4AF37',
        'gold-light': '#F5D97E',
        cream: '#FFF8F0',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at 20% 50%, rgba(255,153,51,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.06) 0%, transparent 40%), linear-gradient(180deg, #06050C 0%, #0D0B1A 50%, #06050C 100%)',
      },
      transitionTimingFunction: {
        'spatial-ease': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'portal-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'golden-pulse': 'golden-pulse 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
