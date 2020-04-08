const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    // config.resolve.alias.set('@', path.resolve(__dirname, './src'))
    config.resolve.alias
      .set('configPath', path.resolve(__dirname, 'src/config'))
      .set('commonPath', path.resolve(__dirname, 'src/common'))
      .set('componentsPath', path.resolve(__dirname, 'src/components'))
      .set('viewsPath', path.resolve(__dirname, 'src/views'))
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: true,
    stats: 'errors-only',
    // compress: true,
    port: 8080,
    // proxy: [{
    //   context: ['/cloudTerminalManagementSys'],
    //   target: 'http://192.168.1.74:8080',
    //   changeOrigin: true
    // }]
    proxy: {
      '/cloudTerminalManagementSys': {
        target: 'http://106.14.10.19:9090',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: '/vendor',
        // dll最终输出的目录
        outputPath: '/vendor'
      })
    ]
  }
}
