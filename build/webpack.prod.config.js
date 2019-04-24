const merge = require('webpack-merge')
// html-webpack-plugin https://webpack.docschina.org/plugins/html-webpack-plugin/#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95
const HtmlWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin https://webpack.docschina.org/guides/output-management/#%E6%B8%85%E7%90%86-dist-%E6%96%87%E4%BB%B6%E5%A4%B9
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        react: {
          test: 'react',
          name: 'react',
          enforce: true
        },
        vendor: {
          priority: 10,
          test: /node_modules/,
          name: 'vendor',
          enforce: true,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new UglifyJSPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: { // 其他参数 https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true, // 剥离HTML评论
        collapseWhitespace: true, // 折叠有助于文档树中文本节点的空白区域
        removeAttributeQuotes: true // 尽可能删除属性周围的引号
      }
    }),
    new CleanWebpackPlugin({
      // 其他参数 https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
      dry: true,
      verbose: true
    })
  ]
})