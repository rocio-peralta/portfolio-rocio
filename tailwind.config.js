/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purpleTitle: '#747fe0',
        purple: '#646BAF',
        grey: '#525f7f',
        lightGrey: '#f0f0f0',
        fadedPurple: '#5a5d7a',
        fadedBlue: '#7795f8',
        highlighterGreen: '#92eac0',
        linkTeal: '#35feff',
        backgroundcolor: '#f6f9fc',
        terminalheader: '#e4e3e5',
        red: '#f96256',
        redborder: '#f65549',
        yellow: '#fdbc3d',
        yellowborder: '#ffb524',
        green: '#33c948',
        greenborder: '#2dbb41',
      },

      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 2s steps(20), blink .7s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
