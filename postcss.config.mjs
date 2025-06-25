const config = {
  content: [
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    screens: {

      md: "768px",

    }},
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
