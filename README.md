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

The website uses colors inspired by the Leicester Greek School brand:
- Primary: `#003d7a` (Deep Blue)
- Secondary: `#0066cc` (Bright Blue)

## License

Copyright © 2025 Leicester Greek School. All rights reserved.

