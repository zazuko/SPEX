const webpack = require('webpack')
const path = require('path')

module.exports = {
  configureWebpack: config => {
    // Webpack 5 doesn't provide polyfills so we need to do it manually
    config.resolve.fallback = {
      crypto: false,
      stream: require.resolve('stream-browserify'),
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    )
  },

  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'))
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
    themeColor: '#35363a',
    faviconSVG: 'img/icons/favicon.svg',
    favicon32: 'img/icons/favicon-32x32.png',
    favicon16: 'img/icons/favicon-16x16.png',
    appleTouchIcon: 'img/icons/apple-touch-icon.png',
    maskIcon: 'img/icons/safari-pinned-tab.svg',
    msTileImage: 'img/icons/msapplication-icon-144x144.png'
  },
}
