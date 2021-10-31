const { defineConfig } = require('windicss/helpers');

module.exports = defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'budget-green': '#7DD543',
        'budget-orange': '#F8C951',
        'budget-gray': '#a6a6a6',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
});
