/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./front-page.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/legacy-jquery-plugins.js",
    "./src/front-page-entry.js",
  ],
  theme: {
    screens: {
      // Mobile: 0 to 600px (Default behavior)
      // 'xs': { 'max': '600px' },

      // Tablet: 601px to 767px
      'tab-sm': { 'min': '601px', 'max': '767px' },

      // Medium Screen: 768px to 991px
      'tab-lg': { 'min': '768px', 'max': '991px' },

      // Large Screen: 992px to 1024px
      'md-screen': { 'min': '992px', 'max': '1024px' },

      // Desktop: 1025px to 1440px
      'lg-screen': { 'min': '1025px', 'max': '1440px' },

      // Wide Screen: 1441px to 1920px
      'xl-screen': { 'min': '1441px' },
    },
    extend: {
      // 1. Color System (Simplified names)
      colors: {
        brand: '#E63312',
        ink: '#000000',
        surface: '#FFFFFF',
        accent: '#FFA800',
        dark: '#512C36',
      },

      // 2. Typography (Clean fallback)
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      // 3. Fluid typography (keep in sync with src/style.css @theme --text-*)
      fontSize: {
        'banner-heading': ['clamp(2.5rem, 4vw + 1.25rem, 5.25rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'section-heading': ['clamp(2rem, 3vw + 1rem, 4rem)', { lineHeight: '1.2', fontWeight: '700' }],
        body: ['1rem', '1.5'],
      },

      // 4. Spacing & Layout
      spacing: {
        'section': 'clamp(3rem, 8vw, 6rem)', // Mobile vs Desktop gap auto handle hobe
        'gutter': '1.5rem',
      },

      maxWidth: {
        'content': '72rem',
        'prose': '65ch',
      },

      // 5. UI Elements
      borderRadius: {
        'card': '0.5rem',
        'pill': '9999px',
      },

      boxShadow: {
        'card': '0 2px 15px -3px rgb(0 0 0 / 0.07)',
        'header': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },

      // 6. Animation Logic
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)', // Standard ease-in-out
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',

      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};