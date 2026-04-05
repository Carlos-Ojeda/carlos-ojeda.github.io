# Contributing

Contributions are welcome — bug reports, feature suggestions, and pull requests all help improve the project.

## Table of Contents

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Local Setup](#local-setup)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Guidelines](#code-guidelines)
- [Translations](#translations)

---

## Reporting Bugs

1. Search [existing issues](https://github.com/carlos-ojeda/carlos-ojeda.github.io/issues) to avoid duplicates.
2. Open a new issue with:
   - Browser and OS version
   - Steps to reproduce
   - Expected vs. actual behaviour
   - Screenshot or console output (if applicable)

## Suggesting Features

Open an issue describing:
- The problem you want to solve
- Your proposed solution
- Any alternatives you considered

## Local Setup

```bash
# 1. Fork and clone
git clone https://github.com/<your-username>/carlos-ojeda.github.io.git
cd carlos-ojeda.github.io

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your EmailJS credentials in .env.local

# 4. Start the dev server (opens at http://localhost:5173)
npm start
```

## Submitting a Pull Request

1. Create a feature branch off `main`:
   ```bash
   git checkout -b feat/short-description
   ```
2. Make your changes (see [Code Guidelines](#code-guidelines)).
3. Verify the app builds without errors:
   ```bash
   npm run build
   ```
4. Push and open a PR against `main` with:
   - A clear description of *what* changed and *why*
   - Screenshots for any UI changes

**PR checklist**

- [ ] `npm run build` passes with no errors or warnings
- [ ] Tested on Chrome, Firefox, and Safari
- [ ] Tested on mobile viewport
- [ ] Translations added/updated in both `en.json` **and** `es.json` if copy changed
- [ ] No credentials or secrets committed

## Code Guidelines

| Concern | Convention |
|---|---|
| Components | Functional components with hooks; one component per folder |
| Styling | SCSS; use CSS variables from `designSystem.js` — avoid magic numbers |
| i18n | All user-visible strings go through `t()` — never hardcode copy |
| Commits | Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, etc. |
| Secrets | Use `import.meta.env.VITE_*` — never hardcode credentials |

## Translations

The project supports English and Spanish. Both locale files must stay in sync.

- English: `src/i18n/locales/en.json`
- Spanish: `src/i18n/locales/es.json`

To add a new language:

1. Create `src/i18n/locales/<lang>.json` mirroring the structure of `en.json`.
2. Register the locale in `src/i18n/index.js`.
3. Add the language option to `LanguageSelector`.

---

By contributing you agree that your work will be released under the [MIT License](LICENSE).
