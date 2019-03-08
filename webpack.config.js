const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve('src'),
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  entry: 'index.jsx',
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        include: path.resolve('src'),
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: path.resolve(__dirname, 'public/index.html'),
      title: 'roadshow-2019',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('src'), 'node_modules'],
  },
};
