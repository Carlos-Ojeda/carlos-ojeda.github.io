# Carlos Ojeda — Portfolio

[![Deploy](https://github.com/carlos-ojeda/carlos-ojeda.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://carlos-ojeda.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-61dafb?logo=react&logoColor=white)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20ES-green)](src/i18n/locales)

Personal portfolio built with React + Vite. Live at **[carlos-ojeda.github.io](https://carlos-ojeda.github.io)**.

## Features

- Bilingual (English / Spanish) via [i18next](https://www.i18next.com/) with browser auto-detection
- Responsive layout — mobile, tablet, desktop
- Interactive particle background (respects `prefers-reduced-motion`)
- Contact form powered by [EmailJS](https://www.emailjs.com/) — no backend required
- Code-split with `React.lazy` + `Suspense` for faster initial load
- Centralised design tokens in `src/config/designSystem.js`

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 5 |
| UI | React 18, Ant Design 4, SCSS |
| Animations | tsParticles |
| i18n | i18next, react-i18next |
| Contact | EmailJS |
| Deployment | GitHub Pages (`gh-pages`) |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 8

### Installation

```bash
git clone https://github.com/carlos-ojeda/carlos-ojeda.github.io.git
cd carlos-ojeda.github.io
npm install
```

### Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/). Create a `.env.local` from the provided example:

```bash
cp .env.example .env.local
```

Fill in your credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

> `.env.local` is gitignored — your credentials are never committed. Vite only exposes variables prefixed with `VITE_` to the client bundle.

### Development

```bash
npm start          # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run deploy     # deploy to GitHub Pages
```

## Project Structure

```
src/
├── components/          # UI components (one folder per component)
│   ├── shared/          # Reusable primitives: Section, ContentCard, DataCarousel, TagList
│   └── ErrorBoundary/   # App-level error boundary
├── config/              # Design tokens, constants, CSS variable injection
├── data/                # Static content: employment, projects
├── hooks/               # useScrollSpy, useSmoothScroll, useTranslations
├── i18n/locales/        # en.json / es.json translation files
└── App.jsx              # Root component with lazy loading
```

## Customisation

| What | Where |
|---|---|
| Personal copy & labels | `src/i18n/locales/en.json` and `es.json` |
| Work experience & education | `src/data/employmentData.js` |
| Projects | `src/data/projectsData.jsx` |
| Colors, spacing, typography | `src/config/designSystem.js` |
| Particle behaviour | `src/config/constants.js` → `PARTICLES_CONFIG` |
| Contact info | `src/config/contact.js` |

### Adding a New Language

1. Add `src/i18n/locales/<lang>.json` mirroring the structure of `en.json`.
2. Register the locale in `src/i18n/index.js`.
3. Add the option to `LanguageSelector`.

## Responsive Breakpoints

| Breakpoint | Range |
|---|---|
| Mobile | < 768 px |
| Tablet | 768 px – 1024 px |
| Desktop | > 1024 px |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bug reports and pull requests are welcome.

## License

MIT © [Carlos Ojeda](https://github.com/carlos-ojeda)
