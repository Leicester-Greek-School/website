// Shared by Vue and Webpack's static news pages. All content is managed in code.
const records = require('./announcements.json');
const siteUrl = 'https://leicestergreekschool.com';
const listingTitle = 'News & Announcements | Leicester Greek School';
const listingDescription = 'School news, celebrations and updates from Leicester Greek School in Leicester. Read announcements and view official event information and posters.';
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function hasDetail(announcement) {
  return Boolean(announcement.slug && typeof announcement.body === 'string' && announcement.body.trim());
}

const bodyParagraphs = body => body.split(/\r?\n\s*\r?\n/);
const announcementSummary = announcement => hasDetail(announcement) ? bodyParagraphs(announcement.body)[0] : announcement.body;
const isSectionHeading = paragraph => ['🎨', '💃', '🏫', '⚽', '🙏'].some(icon => paragraph.startsWith(`${icon} `));

function galleryImages(announcement) {
  return (announcement?.images || []).map(image => {
    const name = image.file.replace(/\.[^.]+$/, '');
    return { thumbnail: `/news-images/thumbnails/${name}.webp`, full: `/news-images/${name}.webp`, alt: image.alt };
  });
}

function validateAnnouncements(items) {
  const ids = new Set();
  const slugs = new Set();
  const imageNames = new Map();
  for (const item of items) {
    if (!item.id || ids.has(item.id)) throw new Error('Announcements require unique IDs.');
    ids.add(item.id);
    const dates = [item.dateISO, ...(item.updatedISO !== undefined ? [item.updatedISO] : [])];
    if (!item.title?.trim() || !item.body?.trim() || dates.some(date => !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date)) {
      throw new Error(`Announcement ${item.id} requires a title, body and valid publication date.`);
    }
    if (item.updatedISO && item.updatedISO < item.dateISO) throw new Error(`Announcement ${item.id} cannot be updated before publication.`);
    for (const slug of [item.slug, ...(item.previousSlugs || [])].filter(Boolean)) {
      if (!slugPattern.test(slug) || slugs.has(slug)) throw new Error(`Invalid or duplicate announcement slug: ${slug}`);
      slugs.add(slug);
    }
    if (item.previousSlugs?.length && !hasDetail(item)) throw new Error(`Announcement ${item.id} aliases require a full page.`);
    if (item.images !== undefined && !Array.isArray(item.images)) throw new Error(`Announcement ${item.id} images must be an array.`);
    for (const image of item.images || []) {
      if (!/^[a-z0-9][a-z0-9-]*\.(?:jpe?g|png|webp)$/i.test(image.file) || !image.alt?.trim()) {
        throw new Error(`Announcement ${item.id} images require a filename and descriptive alt text.`);
      }
      const name = image.file.replace(/\.[^.]+$/, '');
      if (imageNames.has(name) && imageNames.get(name) !== image.file) throw new Error(`News images need unique filenames: ${image.file}`);
      imageNames.set(name, image.file);
    }
  }
}

validateAnnouncements(records);
const announcements = [...records].sort((a, b) => b.dateISO.localeCompare(a.dateISO) || a.id.localeCompare(b.id));
const detailedAnnouncements = announcements.filter(hasDetail);
const announcementPath = announcement => `/news/${announcement.slug}`;
const getAnnouncement = slug => detailedAnnouncements.find(announcement => announcement.slug === slug);
const announcementLastModified = announcement => announcement.updatedISO || announcement.dateISO;
const formatDate = value => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
}).format(new Date(`${value}T12:00:00Z`));

function eventDetails(event) {
  if (!event) return [];
  const date = new Date(event.startDate);
  const address = event.location.address;
  const time = value => new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Europe/London'
  }).format(new Date(value));
  return [
    { label: 'Date', value: new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' }).format(date) },
    { label: 'Time', value: `${time(event.startDate)}${event.endDate ? `–${time(event.endDate)}` : ''} (UK time)` },
    { label: 'Venue', value: event.location.name },
    { label: 'Address', value: [address.streetAddress, address.addressLocality, address.postalCode].filter(Boolean).join(', ') }
  ];
}

function announcementMetadata(announcement) {
  const description = (announcement ? announcementSummary(announcement) : listingDescription).replace(/\s+/g, ' ').trim();
  const firstPhoto = galleryImages(announcement)[0];
  return {
    title: announcement ? `${announcement.title} | Leicester Greek School` : listingTitle,
    description: description.length > 160 ? `${description.slice(0, 157).replace(/\s+\S*$/, '')}…` : description,
    image: siteUrl + (announcement?.image || firstPhoto?.full || '/lgs-logo.jpg'),
    imageAlt: announcement?.imageAlt || firstPhoto?.alt || 'Leicester Greek School Logo',
    canonicalPath: announcement ? announcementPath(announcement) : '/news',
    type: announcement ? 'article' : 'website',
    locale: announcement?.language === 'el' ? 'el_GR' : 'en_GB',
    publishedTime: announcement?.dateISO,
    modifiedTime: announcement ? announcementLastModified(announcement) : undefined
  };
}

function announcementSchema(announcement) {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'News & Announcements', path: '/news' }];
  if (announcement) crumbs.push({ name: announcement.title, path: announcementPath(announcement) });
  const graph = [{
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: siteUrl + crumb.path }))
  }];
  if (!announcement) graph.push({
    '@type': 'CollectionPage', '@id': `${siteUrl}/news#page`, url: `${siteUrl}/news`,
    name: listingTitle, description: listingDescription, inLanguage: 'en-GB'
  });
  if (announcement) {
    const url = siteUrl + announcementPath(announcement);
    const organization = { '@type': 'EducationalOrganization', name: 'Leicester Greek School', url: siteUrl };
    const images = [...(announcement.image ? [announcement.image] : []), ...galleryImages(announcement).map(image => image.full)];
    graph.push({
      '@type': 'Article', '@id': `${url}#article`, mainEntityOfPage: url,
      headline: announcement.title, description: announcementSummary(announcement), datePublished: announcement.dateISO,
      dateModified: announcementLastModified(announcement), articleBody: announcement.body,
      inLanguage: announcement.language || 'en-GB', author: organization, publisher: organization,
      ...(images.length ? { image: images.map(image => siteUrl + image) } : {})
    });
    if (announcement.event) graph.push({
      ...announcement.event, '@type': 'Event', '@id': `${url}#event`, url,
      ...(announcement.image ? { image: siteUrl + announcement.image } : {}), organizer: organization
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

module.exports = { siteUrl, announcements, detailedAnnouncements, hasDetail, announcementPath, getAnnouncement,
  formatDate, eventDetails, announcementMetadata, announcementSchema, announcementLastModified, validateAnnouncements,
  bodyParagraphs, announcementSummary, isSectionHeading, galleryImages };
