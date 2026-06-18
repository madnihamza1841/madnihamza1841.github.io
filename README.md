# madnihamza1841.github.io

Personal portfolio for Hamza Madni — React + Vite + Tailwind CSS.

Live: https://madnihamza1841.github.io/

## Develop

```bash
npm install
npm run dev        # http://localhost:5174/
```

## Deploy

Hosted on GitHub Pages from the `gh-pages` branch. To publish changes:

```bash
npm run deploy     # builds and pushes dist/ to the gh-pages branch
```

Then push your source to `main` to keep it in sync:

```bash
git push origin main
```

## Editing content

All site content (profile, experience, projects, skills, education) lives in
[`src/data/content.ts`](src/data/content.ts). The GitHub project feed is fetched
client-side in [`src/lib/github.ts`](src/lib/github.ts).
