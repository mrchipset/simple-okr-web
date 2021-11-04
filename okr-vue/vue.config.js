module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    // proxy for dev server
    open: false,
    host: 'localhost',
    port: 8082,
    https: false,
    proxy: {
        '/api': {
            target: process.env.VUE_APP_API_SERVER, // backend server
            ws: true,
            changOrigin: true, // allow cors
            pathRewrite: {
                '^/api': ''// rewrite to VUE_APP_API_SERVER/
            }
        }
    }
  },
}