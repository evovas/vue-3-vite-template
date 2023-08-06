module.exports = (ctx) => ({
  syntax: 'postcss-scss',
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'cssnano': ctx.env === 'production' ? { preset: 'default' } : false,
    'autoprefixer': {},
    'postcss-preset-env': {},
  }
})
