const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '.htaccess',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true
        },
        {
          from: '_redirects',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true
        },
        {
          from: 'robots.txt',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true
        },
        {
          from: 'sitemap.xml',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true
        },
        {
          from: 'favicon.ico',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true
        },
        {
          from: 'favicons',
          to: 'favicons',
          noErrorOnMissing: true
        },
        {
          from: 'site.webmanifest',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true
        },
        {
          // Copy logo to dist root so /lgs-logo.jpg resolves for og:image
          from: 'src/assets/images/lgs-logo.jpg',
          to: 'lgs-logo.jpg',
          noErrorOnMissing: true,
          force: true
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};

