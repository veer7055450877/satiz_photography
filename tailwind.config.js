/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Deep black/charcoal
        surface: '#121212',    // Slightly lighter for cards
        primary: '#ffffff',    // White text
        secondary: '#a3a3a3',  // Muted gray text
        accent: '#d4af37',     // Gold/Bronze hint for luxury (optional usage)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // For headings if we imported it, relying on sans for now or system fonts
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
