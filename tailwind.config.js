module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Ubuntu Mono"', 'monospace'],
    },
    extend: {},
    colors: {
      purple: '#C654B8',
      primary: '#6F6CD9',
      success: '#30b594',
      info: '#91D7E0',
      danger: '#FF5A5A',
      warning: '#F96B4A',
      white: '#DBDEEB',
      black: '#121218',
    },
    boxShadow: {
      top: '0px -10px 20px rgba(0, 0, 0, 0.05)',
      'elevation-1': '0px 4px 4px rgba(0, 0, 0, 0.12)',
      'elevation-2': '0px 8px 16px -2px rgba(0, 0, 0, 0.12)',
      'elevation-3': '0px 12px 24px -4px rgba(0, 0, 0, 0.12)',
      floating: '0px 4px 8px rgba(0, 0, 0, 0.16)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
