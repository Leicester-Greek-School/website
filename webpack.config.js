const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { detailedAnnouncements, announcementPath, siteUrl } = require('./src/data/announcements');
const renderNewsPage = require('./scripts/announcements-page');

const newsRedirects = [
  // Netlify matches both slash variants; slash-only redirects would loop.
  '/news.html /news 301!',
  '/news /news.html 200!',
  ...detailedAnnouncements.flatMap(announcement => [
    `${announcementPath(announcement)}.html ${announcementPath(announcement)} 301!`,
    `${announcementPath(announcement)} ${announcementPath(announcement)}.html 200!`,
    ...(announcement.previousSlugs || []).map(slug => `/news/${slug} /news/${announcement.slug} 301!`)
  ]),
  '/news/* /news-not-found.html 404'
].join('\n');

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
    new HtmlWebpackPlugin({
      filename: 'calendar/index.html',
      templateContent: require('./scripts/calendar-page')
    }),
    new HtmlWebpackPlugin({ filename: 'news.html', templateContent: () => renderNewsPage() }),
    ...detailedAnnouncements.map(announcement => new HtmlWebpackPlugin({
      filename: `news/${announcement.slug}.html`,
      templateContent: () => renderNewsPage(announcement)
    })),
    new HtmlWebpackPlugin({ filename: 'news-not-found.html', templateContent: () => renderNewsPage(null, true) }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '.htaccess',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true,
          transform: content => content.toString().replace('# News slug redirects', detailedAnnouncements.flatMap(announcement =>
            (announcement.previousSlugs || []).map(slug => `  RewriteRule ^news/${slug}/?$ ${announcementPath(announcement)} [R=301,L]`)
          ).join('\n'))
        },
        {
          from: '_redirects',
          to: '[name][ext]',
          noErrorOnMissing: true,
          force: true,
          transform: content => content.toString().replace('# News routes', newsRedirects)
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
          force: true,
          transform: content => content.toString()
            .replace(`${siteUrl}/announcements`, `${siteUrl}/news`)
            .replace('</urlset>', detailedAnnouncements.map(announcement =>
              `  <url><loc>${siteUrl}${announcementPath(announcement)}</loc><lastmod>${announcement.dateISO}</lastmod></url>`
            ).join('\n') + '\n</urlset>')
        },
        {
          from: 'llms.txt',
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
          from: 'public/docs',
          to: 'docs'
        },
        {
          from: 'src/assets/images/posters',
          to: 'posters'
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
