const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    app: './src/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|ttf|woff)/,
        loader: 'url-loader',
        options: {
          limit: 30000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'files.html',
      template: 'src/html/files.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'file.html',
      template: 'src/html/file.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'history.html',
      template: 'src/html/history.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'branch-list.html',
      template: 'src/html/branch-list.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'commit.html',
      template: 'src/html/commit.html'
    }),

    new StyleLintPlugin({
      syntax: 'scss'
    })
  ]
}
