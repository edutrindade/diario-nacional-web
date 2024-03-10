import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        chomsky: ['Chomsky', 'sans-serif'],
        barlow: ['Barlow_Condensed', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: {
          primary: '#f1f1f1',
          secondary: '#f6f0e9',
        },
      },
    },
  },
  plugins: [],
};
export default config;
