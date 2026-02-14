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
        retro: {
          black: '#000000',
          white: '#FFFFFF',
          yellow: '#FFE600',
          pink: '#FF006E',
          cyan: '#00F0FF',
          green: '#00FF41',
          gray: {
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            800: '#262626',
            900: '#171717',
          },
        },
        category: {
          home: '#00FF41',
          game: '#FF006E',
          health: '#00F0FF',
          work: '#FFE600',
          creative: '#9D4EDD',
          utility: '#06FFA5',
          entertainment: '#FF006E',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'retro': '8px 8px 0px 0px #000000',
        'retro-sm': '4px 4px 0px 0px #000000',
        'retro-hover': '12px 12px 0px 0px #000000',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
