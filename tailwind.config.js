export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e6edf7',
          200: '#cadbf0',
          300: '#9fbfe3',
          400: '#6e9dd2',
          500: '#4e81bd',
          600: '#3d679e',
          700: '#335381',
          800: '#30476a',
          900: '#123049',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#ffc7aa',
          300: '#ffa06f',
          400: '#ff7335',
          500: '#ff5711',
          600: '#f04507',
          700: '#c73508',
          800: '#9e2d10',
          900: '#7f2811',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)',
        glow: '0 12px 40px rgba(255, 87, 17, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 28%), linear-gradient(135deg, rgba(18,48,73,1) 0%, rgba(51,83,129,1) 52%, rgba(61,103,158,1) 100%)',
      },
    },
  },
  plugins: [],
}
