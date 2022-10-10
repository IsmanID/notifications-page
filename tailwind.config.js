/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(1, 90%, 64%)',
          blue: 'hsl(219, 85%, 26%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          grayishBlue: 'hsl(219, 14%, 63%)',
        },
        light: {
          grayishBlue0: 'hsl(210, 60%, 98%)',
          grayishBlue1: 'hsl(211, 68%, 94%)',
          grayishBlue2: 'hsl(205, 33%, 90%)',
        },
        dark: {
          grayishBlue: 'hsl(219, 12%, 42%)',
          blue: 'hsl(224, 21%, 14%)',
        },
      },
      fontFamily: {
        'primary': ['PlusJakartaSans'],
      }
    },
  },
  plugins: [],
}
