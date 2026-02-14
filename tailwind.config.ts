import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          lighter: '#121218',
          card: '#1a1a24',
        },
        electric: {
          blue: '#00d4ff',
          cyan: '#00ffff',
        },
        accent: {
          purple: '#a78bfa',
          orange: '#ff8c42',
        },
        category: {
          home: '#4caf50',
          game: '#9c27b0',
          health: '#2196f3',
          work: '#ff9800',
          creative: '#e91e63',
          utility: '#607d8b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 212, 255, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
