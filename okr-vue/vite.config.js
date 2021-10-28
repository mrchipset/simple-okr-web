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
}