/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-pattern.svg')",
      },
      textColor: {
        'heading': "hsl(227, 35%, 25%)",
        'paragraph': "hsl(225, 20%, 60%)",
        'discount-text': 'hsl(15, 100%, 70%)',
        'cta-text': 'hsl(226, 100%, 87%)',
        // Dark mode text colors
        'dark-heading': 'hsl(226, 40%, 90%)',
        'dark-paragraph': 'hsl(226, 30%, 70%)',
        'dark-discount-text': 'hsl(15, 100%, 70%)',
        'dark-cta-text': 'hsl(226, 100%, 87%)',
      },
      backgroundColor: {
        'discount-background': 'hsl(14, 92%, 95%)',
        'main-background': 'hsl(230, 100%, 99%)',
        'cta-background': 'hsl(227, 35%, 25%)',
        'dark-background': 'hsl(227, 35%, 15%)',
        'dark-discount-background': 'hsl(14, 50%, 30%)', 
        'dark-cta-background': 'hsl(227, 25%, 35%)',
      },
    },
  },
  plugins: [],
};
