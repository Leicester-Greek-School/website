const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const sharp = require('sharp');
const { announcements, detailedAnnouncements, announcementPath, announcementLastModified, siteUrl } = require('./src/data/announcements');
const renderNewsPage = require('./scripts/announcements-page');

for (const announcement of announcements) {
  for (const image of announcement.images || []) {
    if (!fs.existsSync(path.join(__dirname, 'src/assets/images/news', image.file))) {
      throw new Error(`Missing news image: ${image.file}`);
    }
  }
}

// Replace the checked-in news block so new/removed slugs cannot leave stale URLs.
const newsLastModified = announcements.map(announcementLastModified).sort().pop();
const newsSitemap = '  <!-- News URLs:start -->\n' + [
  { path: '/news', modified: newsLastModified },
  ...detailedAnnouncements.map(announcement => ({ path: announcementPath(announcement), modified: announcementLastModified(announcement) }))
].map(page => `  <url>\n    <loc>${siteUrl}${page.path}</loc>${page.modified ? `\n    <lastmod>${page.modified}</lastmod>` : ''}\n  </url>`).join('\n') + '\n  <!-- News URLs:end -->';

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
          transform: content => {
            const source = content.toString();
            const newsBlock = /  <!-- News URLs:start -->[\s\S]*?  <!-- News URLs:end -->/;
            if (!newsBlock.test(source)) throw new Error('sitemap.xml is missing its news URL block.');
            return source.replace(newsBlock, newsSitemap);
          }
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
          from: 'src/assets/images/news/*.{jpg,jpeg,png,webp}',
          to: 'news-images/thumbnails/[name].webp',
          noErrorOnMissing: true,
          globOptions: { caseSensitiveMatch: false },
          transform: content => sharp(content).rotate().resize({ width: 640, height: 480, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toBuffer()
        },
        {
          from: 'src/assets/images/news/*.{jpg,jpeg,png,webp}',
          to: 'news-images/[name].webp',
          noErrorOnMissing: true,
          globOptions: { caseSensitiveMatch: false },
          transform: content => sharp(content).rotate().resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toBuffer()
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
    host: '127.0.0.1',
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};
