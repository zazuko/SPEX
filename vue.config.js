module.exports = {
  transpileDependencies: [
    '@rdfjs-elements/rdf-editor',
    '@rdfjs-elements/rdf-snippet',
  ],

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with rdf- as custom elements
          isCustomElement: tag => tag.startsWith('rdf-')
        }
      }))
  },

  pwa: {
    name: 'SPEX',
    themeColor: '#ffb15e',
  },
}
