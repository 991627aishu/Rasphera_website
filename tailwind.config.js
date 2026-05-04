/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        glow: 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-6px) rotate(1deg)' },
          '66%': { transform: 'translateY(-3px) rotate(-0.5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(225,112,26,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(225,112,26,0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        base: '#F5F0E8',
        cream: '#FBF8F2',
        text: '#1A0F00',
        accent: '#E1701A',
        'accent-light': '#F5924A',
        'accent-dark': '#B8540E',
        highlight: '#0D2236',
        'highlight-light': '#163652',
        gold: '#C9962A',
        'gold-light': '#F0C060',
        warm: '#8B4513',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
        card: '0 4px 30px rgba(13,34,54,0.10), 0 1px 8px rgba(13,34,54,0.06)',
        'card-hover': '0 16px 48px rgba(13,34,54,0.16), 0 4px 16px rgba(225,112,26,0.12)',
        glow: '0 0 30px rgba(225,112,26,0.3)',
        'glow-blue': '0 0 30px rgba(13,34,54,0.4)',
        inner: 'inset 0 2px 8px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'wood-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        'hero-gradient': 'linear-gradient(135deg, #F5F0E8 0%, #FBF8F2 40%, #FEF3E2 100%)',
        'dark-hero': 'linear-gradient(135deg, #0A1A2B 0%, #0D2236 50%, #122840 100%)',
        'orange-glow': 'radial-gradient(circle at center, rgba(225,112,26,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
