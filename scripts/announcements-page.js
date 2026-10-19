// Like calendar-page.js, these pages remain readable without JavaScript.
const { siteUrl, announcements, hasDetail, announcementPath, formatDate, eventDetails,
  announcementMetadata, announcementSchema, bodyParagraphs, announcementSummary, isSectionHeading, galleryImages } = require('../src/data/announcements');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function image(announcement) {
  return announcement.image ? `<p><a href="${escapeHtml(announcement.image)}" target="_blank" rel="noopener noreferrer" aria-label="View full size poster (opens in a new tab)"><img src="${escapeHtml(announcement.image)}" alt="${escapeHtml(announcement.imageAlt || announcement.title)}" loading="lazy" decoding="async" style="max-width:100%;max-height:520px;height:auto"></a></p>` : '';
}

function gallery(announcement) {
  const images = galleryImages(announcement);
  return images.length ? `<section aria-label="Article photos"><h2>Photos</h2><p>Select a photo to enlarge it (opens in a new tab).</p>
    <div class="gallery-grid">${images.map(photo => `<a href="${escapeHtml(photo.full)}" target="_blank" rel="noopener noreferrer" aria-label="Enlarge photo: ${escapeHtml(photo.alt)}"><img src="${escapeHtml(photo.thumbnail)}" alt="${escapeHtml(photo.alt)}" width="640" height="480" loading="lazy" decoding="async"></a>`).join('')}</div></section>` : '';
}

function renderNewsPage(announcement, notFound = false) {
  const meta = notFound ? {
    ...announcementMetadata(), title: 'Announcement not found | Leicester Greek School',
    description: 'This announcement is unavailable or the link is incorrect.'
  } : announcementMetadata(announcement);
  const url = siteUrl + meta.canonicalPath;
  const content = notFound
    ? '<h1>Announcement not found</h1><p>This announcement is unavailable or the link is incorrect.</p>'
    : announcement
      ? `<article><h1 lang="${escapeHtml(announcement.language || 'en-GB')}">${escapeHtml(announcement.title)}</h1>
        <p>Published <time datetime="${announcement.dateISO}">${formatDate(announcement.dateISO)}</time>${announcement.updatedISO && announcement.updatedISO !== announcement.dateISO ? ` · Updated <time datetime="${announcement.updatedISO}">${formatDate(announcement.updatedISO)}</time>` : ''}</p>
        <div lang="${escapeHtml(announcement.language || 'en-GB')}">${bodyParagraphs(announcement.body).map(paragraph => {
          const tag = isSectionHeading(paragraph) ? 'h2' : 'p';
          return `<${tag}>${escapeHtml(paragraph)}</${tag}>`;
        }).join('')}</div>
        ${announcement.event ? `<dl>${eventDetails(announcement.event).map(detail => `<dt>${escapeHtml(detail.label)}</dt><dd>${escapeHtml(detail.value)}</dd>`).join('')}</dl>` : ''}
        ${image(announcement)}${gallery(announcement)}</article>`
      : `<h1>News &amp; Announcements</h1>
        <p>Looking for dates? See the <a href="/calendar/">2026–2027 school calendar</a> for terms, breaks and celebrations.</p>
        ${announcements.length ? `<ul class="announcement-list">${announcements.map(item => `<li><article>
          <h2 lang="${escapeHtml(item.language || 'en-GB')}">${hasDetail(item) ? `<a href="${announcementPath(item)}">${escapeHtml(item.title)}</a>` : escapeHtml(item.title)}</h2>
          <p><time datetime="${item.dateISO}">${formatDate(item.dateISO)}</time></p>
          <p lang="${escapeHtml(item.language || 'en-GB')}">${escapeHtml(announcementSummary(item))}</p>${image(item)}
          ${hasDetail(item) ? `<a class="read-more" href="${announcementPath(item)}">Read More<span class="visually-hidden">: ${escapeHtml(item.title)}</span></a>` : ''}
        </article></li>`).join('')}</ul>` : '<p>No announcements at this time. Please check back soon.</p>'}`;
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(meta.title)}</title>
  <meta name="title" content="${escapeHtml(meta.title)}">
  <meta name="description" content="${escapeHtml(meta.description)}">
  <meta name="robots" content="${notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
  <meta property="og:type" content="${meta.type}">
  <meta property="og:site_name" content="Leicester Greek School">
  <meta property="og:locale" content="${meta.locale}">
  ${meta.publishedTime ? `<meta property="article:published_time" content="${meta.publishedTime}">` : ''}
  ${meta.modifiedTime ? `<meta property="article:modified_time" content="${meta.modifiedTime}">` : ''}
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(meta.title)}">
  <meta property="og:description" content="${escapeHtml(meta.description)}">
  <meta property="og:image" content="${escapeHtml(meta.image)}">
  <meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(meta.title)}">
  <meta name="twitter:description" content="${escapeHtml(meta.description)}">
  <meta name="twitter:image" content="${escapeHtml(meta.image)}">
  <meta name="twitter:image:alt" content="${escapeHtml(meta.imageAlt)}">
  ${notFound ? '' : `<link rel="canonical" href="${url}">`}
  <link rel="icon" href="/favicon.ico">
  <link rel="llms.txt" href="/llms.txt" type="text/plain" title="LLM context for Leicester Greek School">
  ${notFound ? '' : `<script id="news-data" type="application/ld+json">${JSON.stringify(announcementSchema(announcement)).replace(/</g, '\\u003c')}</script>`}
  <style>#news-fallback{font:16px/1.8 system-ui,sans-serif;color:#2a0617;max-width:950px;margin:2rem auto;padding:0 1rem}#news-fallback a{color:#590f32;text-underline-offset:3px}#news-fallback a:focus-visible{outline:2px solid #590f32;outline-offset:3px}#news-fallback h1,#news-fallback h2{font-family:Georgia,serif;line-height:1.3}#news-fallback h1{font-size:clamp(1.75rem,4vw,2.5rem)}#news-fallback nav{margin-bottom:2rem}#news-fallback .announcement-list{padding:0;list-style:none}#news-fallback .announcement-list>li,#news-fallback dl{background:#f4e8f0;padding:1.5rem;border-radius:12px;margin-bottom:1.5rem}#news-fallback .gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:1rem}#news-fallback .gallery-grid img{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:contain;background:#f4e8f0;border-radius:8px}#news-fallback dt{font-weight:bold}#news-fallback dd{margin:0 0 1rem}#news-fallback .visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}</style>
  <style>#news-fallback{overflow-wrap:anywhere}#news-fallback .read-more{display:inline-flex;align-items:center;min-height:44px}</style>
</head>
<body><div id="app"><main id="news-fallback">
  <nav aria-label="Breadcrumb"><a href="/">Home</a> / ${announcement || notFound ? '<a href="/news">News &amp; Announcements</a>' : '<span aria-current="page">News &amp; Announcements</span>'}${announcement ? ` / <span lang="${escapeHtml(announcement.language || 'en-GB')}" aria-current="page">${escapeHtml(announcement.title)}</span>` : notFound ? ' / <span aria-current="page">Announcement not found</span>' : ''}</nav>
  ${content}
  ${announcement || notFound ? '<p><a href="/news">← Back to News &amp; Announcements</a></p>' : ''}
</main></div></body>
</html>`;
}

module.exports = renderNewsPage;
