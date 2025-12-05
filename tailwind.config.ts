import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0c0f1a',
        neon: '#7ddcff',
        accent: '#9e7bff',
        glow: '#61f4de'
      },
      backgroundImage: {
        'grid-glow': "radial-gradient(circle at center, rgba(97, 244, 222, 0.25), transparent 45%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'hero-gradient': 'linear-gradient(135deg, rgba(125, 220, 255, 0.18), rgba(158, 123, 255, 0.18))'
      },
      boxShadow: {
        glow: '0 10px 50px rgba(125, 220, 255, 0.25)',
        card: '0 25px 60px rgba(0, 0, 0, 0.35)'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
