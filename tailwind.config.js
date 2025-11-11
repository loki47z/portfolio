/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'marvel-red': '#b11313', // Iron Man red
        'marvel-gold': '#ffd700', // Iron Man gold
        'marvel-blue': '#1f2a44', // Captain America blue
        'marvel-green': '#00ff00', // Hulk green
        'marvel-dark': '#1a1a1a', // Dark gray background
      },
    },
  },
  plugins: [],
};