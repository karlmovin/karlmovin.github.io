# Project conventions

## i18n
- This site is bilingual (Swedish/English). All new UI text must use translations from the start.
- Add keys to both `src/locales/sv.json` and `src/locales/en.json`.
- Use `useTranslation()` + `t()` in components.
- For translatable data labels, use the `Translated` type from `src/data/i18n-helpers.ts`. Proper nouns (brand names, people, places) stay as plain strings.

## Stack
- React 19 + TypeScript + Vite
- Routing: React Router v7 (`src/main.tsx`)
- Styling: Tailwind CSS v4 with dark mode support
- Package manager: pnpm
- Data files live in `src/data/`, pages in `src/routes/`
