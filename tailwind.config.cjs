const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      black: {
        ...colors.black,
        800: '#1F263A',
        900: '#141929',
      },
      blue: {
        ...colors.blue,
        100: '#F2F2F9',
        200: '#EBEDFE',
        500: '#A6B5E6',
        900: '#374EF3',
      },
      gray: {
        ...colors.gray,
        700: '#F2F2F2',
        900: '#8B98A1',
      },
      green: {
        ...colors.green,
        900: '#27AE60',
      },
      red: {
        ...colors.red,
        900: '#EB5757',
      },
      transparent: 'transparent'
    },
    fontFamily: {
      sans: ['Amulya', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '17px'],
      '2sm': ['14px', '21px'],
      base: ['16px', '24px'],
      md: ['18px', '27px'],
      lg: ['20px', '28px'],
      xl: ['24px', '29px'],
      'xl-higher': ['24px', '36px'],
      '2xl': ['36px', '53px'],
      '3xl': ['48px', '48px'],
      '4xl': ['64px', '64px'],
    },
    container: {
      screens: {
        '2xl': '1600px',
      },
    },
    screens: {
      sm: '481px',
      md: '640px',
      '2md': '768px',
      lg: '1100px',
      xl: '1340px',
      '2xl': '1620px',
    },
    backgroundImage: {
      'builders-mobile': "url('/builders-scene-ellips-mobile-1.png'), url('/builders-scene-ellips-mobile-2.png'), url('/builders-scene-ellips-mobile-3.png'), url('/builders-scene-ellips-mobile-4.png'), url('/builders-scene-ellips-mobile-5.png')",
      'builders': "url('/builders-scene-ellips-1.png'), url('/builders-scene-ellips-2.png'), url('/builders-scene-ellips-3.png'), url('/builders-scene-ellips-4.png'), url('/builders-scene-ellips-5.png')",
      'expect': "url('/expect-ellips.png')",
      'expect-mobile': "url('/expect-ellips-mobile.png')",
      'help-gradient': "linear-gradient(180deg, #FFFFFF 0%, #EAEAF4 90.83%)",
      'philosophy-gradient': "linear-gradient(180deg, #FFFFFF 0%, #EAEAF4 100%)",
    }
  },
  plugins: [],
}
