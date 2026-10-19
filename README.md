# Leicester Greek School Website

A responsive and accessible website for Leicester Greek School built with Vue 3, Vue Router, Bootstrap 5, and Webpack.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://127.0.0.1:3000` (or `http://localhost:3000`).

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
leicester-greek-school/
├── src/
│   ├── main.js              # Application entry point
│   ├── App.vue              # Root component
│   ├── router/
│   │   └── index.js         # Vue Router configuration
│   ├── views/               # Page components
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── components/          # Reusable components
│   │   ├── Navbar.vue
│   │   └── Footer.vue
│   └── assets/
│       └── styles/
│           └── main.css     # Global styles
├── webpack.config.js        # Webpack configuration
├── package.json             # Dependencies and scripts
├── .babelrc                 # Babel configuration
└── index.html               # HTML template
```

## Technologies

- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Bootstrap 5** - CSS framework for responsive design
- **Webpack 5** - Module bundler

## Features

- Responsive design (mobile, tablet, desktop)
- Accessible (ARIA labels, semantic HTML, keyboard navigation)
- Modern build system with Webpack
- Hot module replacement for development
- Optimized production builds with code splitting

## Accessibility Features

- Semantic HTML elements
- ARIA labels and attributes
- Keyboard navigation support
- Responsive design for all screen sizes
- High contrast color scheme based on Cyprus school colors

## Color Scheme

The website uses an accessible color scheme based on the Leicester Greek School blue palette (Greek blue & white):

- **Primary Blue**: `#0b5ed7` - Main brand color (used as `--primary-color` in `src/assets/styles/main.css`)
- **Dark Blue**: `#083d8a` - Darker blue for contrast (used as `--primary-dark`)
- **Medium Blue**: `#0a58ca` - Secondary accent blue (used as `--secondary-color`)
- **Accent Gold**: `#d4a574` - Warm highlights and decorative elements (kept from the previous palette)
- **Light Blue / Page Accent**: `#eaf4ff` - Soft background accent (used as `--primary-light`)
- **Cream Background**: `#ffffff` / `var(--primary-light)` - Main page background (configured as `--background-cream` in CSS)
- **Text Dark**: `#0b2136` - Primary text (WCAG-compliant dark navy)
- **Text Medium**: `#33506b` - Secondary text color
- **Link Color**: `#0b5ed7` - Primary blue for links (matches `--link-color`)

All color combinations meet WCAG 2.1 Level AA standards for accessibility where applicable.

## Editing announcements

Edit `src/data/announcements.json` and rebuild the site. Keep each `id` unique;
announcements are displayed newest first by `dateISO`.

- For a short notice, use `id`, `title`, `body` and `dateISO` without a `slug`.
- To give an announcement its own page, add a unique lowercase, hyphen-separated
  `slug`. The title and Read More link will open `/news/{slug}`, displaying the same
  `body`. Optional `image`, `imageAlt` and `language` are supported.
- Separate paragraphs in `body` with a blank line (`\n\n` in JSON). The listing
  shows the first paragraph of a linked article; its detail page shows the full text.
- Keep published slugs unchanged when editing titles. If a slug must change, add
  its old value to `previousSlugs`; the build creates permanent redirects.
- When an article changes, set its optional `updatedISO` to the actual update date
  (`YYYY-MM-DD`). It appears in the article metadata, structured data and sitemap.
- Dates, poster and event information for the October celebration are in the same
  record. Update those facts there rather than adding separate event markup.

For an article photo gallery, place originals in `src/assets/images/news/` and add
an `images` array to the announcement, in the order they should appear:

```json
"images": [
  { "file": "school-visit.jpeg", "alt": "A description of the photo" }
]
```

Add another array entry to include another image. The build automatically creates
WebP thumbnails (up to 640 × 480) and larger versions (up to 1440 × 1440), preserving
aspect ratios and originals. Select a thumbnail to enlarge it. Previous/Next buttons
and the left/right arrow keys navigate the photos. Previous is disabled on the first
photo; Next wraps from the last photo to the first.
Escape or Close photo closes the viewer. Without JavaScript, the larger image opens
in a new tab.

The build validates content and slugs and generates news HTML, sitemap entries
and hosting routes. `/announcements` continues to work through a redirect to `/news`.
The news block in `sitemap.xml` is regenerated from the announcement records during
each build, including article image URLs and preserving other pages. The shared
renderer is `scripts/news-sitemap.js`; keep the checked-in news block in sync with
its output. Keep `llms.txt` current when news facts change.
There is no admin interface or backend; all announcement data is public.

## License

Copyright © 2025 Leicester Greek School. All rights reserved.
