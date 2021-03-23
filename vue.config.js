module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/SPEX/'
    : '/',

  transpileDependencies: [
    '@rdfjs-elements/rdf-editor',
    '@rdfjs-elements/rdf-snippet',
  ],

  pwa: {
    name: 'SPEX',
    themeColor: '#ffb15e',
  },
}
