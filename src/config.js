let config

const defaults = {
  url: 'https://lod.lobbywatch.ch/query/',
  user: null,
  password: null,
  graph: null,
  prefixes: [
    { prefix: 'lobbywatch', url: 'https://lod.lobbywatch.ch/' },
    { prefix: 'wdt', url: 'http://www.wikidata.org/prop/direct/' }
  ]
}

try {
  const localConfig = require('../config.local')
  config = { ...defaults, ...localConfig }
} catch (e) {
  config = defaults
}

export default config
