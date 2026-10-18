// Shared by Vue and Webpack's static news pages. All content is managed in code.
const records = require('./announcements.json');
const siteUrl = 'https://leicestergreekschool.com';
const listingTitle = 'News & Announcements | Leicester Greek School';
const listingDescription = 'Latest news, school updates and event announcements from Leicester Greek School.';
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function hasDetail(announcement) {
  return Boolean(announcement.slug && typeof announcement.body === 'string' && announcement.body.trim());
}

function validateAnnouncements(items) {
  const ids = new Set();
  const slugs = new Set();
  for (const item of items) {
    if (!item.id || ids.has(item.id)) throw new Error('Announcements require unique IDs.');
    ids.add(item.id);
    if (!item.title?.trim() || !item.body?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(item.dateISO) ||
        !Number.isFinite(Date.parse(item.dateISO)) || new Date(item.dateISO).toISOString().slice(0, 10) !== item.dateISO) {
      throw new Error(`Announcement ${item.id} requires a title, body and valid publication date.`);
    }
    for (const slug of [item.slug, ...(item.previousSlugs || [])].filter(Boolean)) {
      if (!slugPattern.test(slug) || slugs.has(slug)) throw new Error(`Invalid or duplicate announcement slug: ${slug}`);
      slugs.add(slug);
    }
    if (item.previousSlugs?.length && !hasDetail(item)) throw new Error(`Announcement ${item.id} aliases require a full page.`);
  }
}

validateAnnouncements(records);
const announcements = [...records].sort((a, b) => b.dateISO.localeCompare(a.dateISO) || a.id.localeCompare(b.id));
const detailedAnnouncements = announcements.filter(hasDetail);
const announcementPath = announcement => `/news/${announcement.slug}`;
const getAnnouncement = slug => detailedAnnouncements.find(announcement => announcement.slug === slug);
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
  return {
    title: announcement ? `${announcement.title} | Leicester Greek School` : listingTitle,
    description: announcement ? announcement.body : listingDescription,
    image: siteUrl + (announcement?.image || '/lgs-logo.jpg'),
    imageAlt: announcement?.imageAlt || 'Leicester Greek School Logo',
    canonicalPath: announcement ? announcementPath(announcement) : '/news',
    type: announcement ? 'article' : 'website'
  };
}

function announcementSchema(announcement) {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'News & Announcements', path: '/news' }];
  if (announcement) crumbs.push({ name: announcement.title, path: announcementPath(announcement) });
  const graph = [{
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: siteUrl + crumb.path }))
  }];
  if (announcement) {
    const url = siteUrl + announcementPath(announcement);
    const organization = { '@type': 'EducationalOrganization', name: 'Leicester Greek School', url: siteUrl };
    graph.push({
      '@type': 'Article', '@id': `${url}#article`, mainEntityOfPage: url,
      headline: announcement.title, description: announcement.body, datePublished: announcement.dateISO,
      inLanguage: announcement.language || 'en-GB', author: organization, publisher: organization,
      ...(announcement.image ? { image: siteUrl + announcement.image } : {})
    });
    if (announcement.event) graph.push({
      ...announcement.event, '@type': 'Event', '@id': `${url}#event`, url,
      ...(announcement.image ? { image: siteUrl + announcement.image } : {}), organizer: organization
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

module.exports = { siteUrl, announcements, detailedAnnouncements, hasDetail, announcementPath, getAnnouncement,
  formatDate, eventDetails, announcementMetadata, announcementSchema, validateAnnouncements };
