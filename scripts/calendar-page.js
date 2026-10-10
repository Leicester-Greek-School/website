// Build a readable HTML version of the calendar for crawlers and visitors without JavaScript.
// Vue replaces #app with the interactive calendar once the bundle loads.
const { terms, events, calendarOnlyEvents } = require('../src/data/calendar.json');
const allEvents = [...events, ...calendarOnlyEvents].sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));

const url = 'https://leicestergreekschool.com/calendar/';
const title = 'School Calendar 2026–2027 | Term Dates & Celebrations | Leicester Greek School';
const description = 'Leicester Greek School calendar 2026–2027: term dates, half-term breaks, Greek Easter, celebrations and the 31 October AGM in Leicester.';
const dateFormat = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function dateText(value) {
  return dateFormat.format(new Date(`${value}T12:00:00Z`));
}

function eventRows(group) {
  return events.filter(event => event.term === group).map(event => `<tr>
    <td><time datetime="${event.startDateTime || event.start}">${escapeHtml(dateText(event.start))}</time>${event.end ? ` – <time datetime="${event.end}">${escapeHtml(dateText(event.end))}</time>` : ''}</td>
    <th scope="row">${escapeHtml(event.title)}</th>
    <td>${escapeHtml(event.description)}</td>
  </tr>`).join('\n');
}

function section(id, heading) {
  return `<section id="${id}"><h2>${escapeHtml(heading)}</h2><table><thead><tr><th scope="col">Date</th><th scope="col">School date</th><th scope="col">Information</th></tr></thead><tbody>${eventRows(id)}</tbody></table></section>`;
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}#page`,
  url,
  name: title,
  description,
  dateModified: '2026-10-10',
  inLanguage: 'en-GB',
  about: { '@id': 'https://leicestergreekschool.com/#organization' },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Leicester Greek School dates 2026–2027',
    itemListElement: allEvents.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        '@id': `${url}#${event.id}`,
        name: event.title,
        description: event.description,
        startDate: event.startDateTime || event.start,
        ...(event.end ? { endDate: event.end } : {}),
        ...(event.venueName ? { location: { '@type': 'Place', name: event.venueName, ...(event.venueUrl ? { url: event.venueUrl } : {}) } } : {}),
        organizer: { '@id': 'https://leicestergreekschool.com/#organization' }
      }
    }))
  }
};

function renderCalendarPage() {
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="title" content="${escapeHtml(title)}">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="keywords" content="Leicester Greek School calendar 2026 2027, Greek school term dates Leicester, half term, Greek Easter, school celebrations, AGM Leicester Greek School">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="https://leicestergreekschool.com/lgs-logo.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${url}">
  <link rel="llms.txt" href="/llms.txt" type="text/plain">
  <link rel="icon" href="/favicon.ico">
  <script id="calendar-data" type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
</head>
<body>
  <div id="app">
    <main style="font:16px/1.6 system-ui,sans-serif;max-width:1100px;margin:2rem auto;padding:0 1rem;color:#291720">
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / School Calendar</nav>
      <h1>Leicester Greek School Calendar 2026–2027</h1>
      <p>Official term dates, half-term dates, Greek Easter, school celebrations and the 31 October AGM. Enable JavaScript for the interactive monthly calendar and table toggle.</p>
      <p>In-person classes take place on Thursdays and Saturdays during term time, excluding the listed breaks.</p>
      ${terms.map(term => section(term.id, term.name)).join('\n')}
      ${section('celebrations', 'School celebrations 2026–2027')}
      <section id="additional-calendar-dates"><h2>Additional calendar date</h2><ul>${calendarOnlyEvents.map(event => `<li><strong>${escapeHtml(event.title)}</strong> — <time datetime="${event.start}">${escapeHtml(dateText(event.start))}</time>. ${escapeHtml(event.description)}</li>`).join('')}</ul></section>
      <p>For celebration details, <a href="/contact">contact Leicester Greek School</a>.</p>
    </main>
  </div>
</body>
</html>`;
}

module.exports = renderCalendarPage;
