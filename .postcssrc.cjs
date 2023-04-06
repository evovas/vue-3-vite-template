module.exports = (ctx) => ({
  syntax: 'postcss-scss',
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'cssnano': ctx.env === 'production' ? { preset: 'default' } : false,
    'autoprefixer': {},
    'postcss-preset-env': {},
    // '@fullhuman/postcss-purgecss': ctx.env === 'production'
    //   ? {
    //     content: [ './src/**/*.html', './src/**/*.vue' ],
    //     defaultExtractor (content) {
    //       const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    //       return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    //     },
    //     skippedContentGlobs: ['**/node_modules/**/*'],
    //     safelist: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/, /^ant-/, /^slick/],
    //   }
    //   : false,
  }
})
