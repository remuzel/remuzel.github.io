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
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'alexa-blue': 'var(--alexa-blue)',
        'alexa-blue-dark': 'var(--alexa-blue-dark)',
        'alexa-secondary': 'var(--alexa-secondary)',
        'alexa-accent': 'var(--alexa-accent)',
        'card-bg': 'var(--card-bg)',
        'muted': 'var(--muted)',
        'border': 'var(--border)'
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}