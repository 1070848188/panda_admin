const path = require('path');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    open: true
  }
}
