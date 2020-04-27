module.exports = {
  publicPath: '/endpoint-explorer/',

  chainWebpack: config => {
    config.module
      .rule('nq')
      .test(/\.nq$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()

    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/vocab-\w+/)
      return options
    })

    // plugin only present in production build. need to check
    if (config.plugins.has('named-chunks')) {
      config.plugin('named-chunks').tap(([defaultName]) => {
        return [(chunk) => {
          const vocabModule = [...chunk._modules].find(m => /rdf-vocabularies\/ontologies$/.test(m.context))

          if (vocabModule && vocabModule.resource) {
            const matchVocabName = vocabModule.resource.match(/(\w+)\.nq$/)
            if (matchVocabName) {
              return 'vocab-' + matchVocabName[1]
            }
          }

          // use vue's default names for other chunks
          return defaultName(chunk)
        }]
      })
    }
  },
}
