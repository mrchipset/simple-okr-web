module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    // proxy for dev server
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    compress: true,
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