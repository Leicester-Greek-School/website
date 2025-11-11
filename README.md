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

The application will be available at `http://localhost:8080`

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

## License

Copyright © 2025 Leicester Greek School. All rights reserved.
