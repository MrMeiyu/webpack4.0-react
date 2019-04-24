const path = require('path') // path是属于node的一个模块
const OUTPUT_PATH = path.resolve(__dirname, '../dist')
const APP_PATH = path.resolve(__dirname, '../src')

module.exports = {
  entry: {
    app: './src/index.js',
    react: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: 'js/[name].[chunkhash:16].js',
    path: OUTPUT_PATH
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        include: [APP_PATH]
      }
    ]
  }
}