const { announcements, detailedAnnouncements, announcementPath, announcementLastModified, galleryImages, siteUrl } = require('../src/data/announcements');

const escapeXml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
}[character]));

// Shared by the build and checked-in sitemap updates so article images stay in sync.
module.exports = function renderNewsSitemap() {
  const pages = [
    { path: '/news', modified: announcements.map(announcementLastModified).sort().pop(), images: [] },
    ...detailedAnnouncements.map(announcement => ({
      path: announcementPath(announcement),
      modified: announcementLastModified(announcement),
      images: [...new Set([
        ...(announcement.image ? [announcement.image] : []),
        ...galleryImages(announcement).map(image => image.full)
      ])]
    }))
  ];
  return '  <!-- News URLs:start -->\n' + pages.map(page => [
    '  <url>',
    `    <loc>${escapeXml(siteUrl + page.path)}</loc>`,
    ...(page.modified ? [`    <lastmod>${page.modified}</lastmod>`] : []),
    ...page.images.map(image => `    <image:image>\n      <image:loc>${escapeXml(siteUrl + image)}</image:loc>\n    </image:image>`),
    '  </url>'
  ].join('\n')).join('\n') + '\n  <!-- News URLs:end -->';
};
