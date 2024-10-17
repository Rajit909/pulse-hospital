// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system-based
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure Tailwind scans your React files
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'doctor': ['"Playfair Display"', 'serif'],
      },
      colors: {
        darkbg: '#121829',
        darksecondary: '#1e1e1e',
        darktext: '#e0e0e0',
        lighttext: '#b0b0b0',
        accent: '#0a84ff',
        success: '#34d399',
        warning: '#ff9f43',
      },
    },
  },
  plugins: [],
};
