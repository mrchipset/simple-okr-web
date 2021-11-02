import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  },

  plugins: [
    // ...
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }]
  }

}