/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',  // Dark Blue
        secondary: '#f97316',  // Orange
        accent: '#14b8a6',  // Teal
        background: '#f1f5f9',  // Light Gray
        textPrimary: '#111827',  // Dark Text
        textSecondary: '#64748b',  // Light Text
      },
    },
  },
  plugins: [],
}