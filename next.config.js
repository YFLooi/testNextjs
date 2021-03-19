const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    // Ref: https://javascript.plainenglish.io/understand-code-splitting-in-next-js-by-solving-a-common-error-db61a9b1b1a1
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}