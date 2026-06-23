# madnihamza1841.github.io

Personal portfolio for **Hamza Madni** — Software Engineer & Data Scientist.

🔗 **Live:** https://madnihamza1841.github.io/

A fast, single-page portfolio built with React, Vite and Tailwind CSS, deployed
to GitHub Pages. It presents experience, projects, skills, education,
certifications and experience letters, with a light/dark theme and a live feed
of public GitHub repositories.

---

## Tech stack

| Area        | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | React 19 + TypeScript                               |
| Build tool  | Vite 6                                              |
| Styling     | Tailwind CSS 4 (`@tailwindcss/vite`)                |
| Routing     | React Router 7 (`/` and `/work`)                    |
| Icons       | Tabler Icons (web font)                             |
| Fonts       | Inter (Google Fonts)                                |
| Hosting     | GitHub Pages (user site, `gh-pages` branch)         |
| Deploy tool | `gh-pages` npm package                              |

## Features

- **Single-page layout** with anchored sections: Hero → Experience → Education →
  Projects → Skills → Certifications → Experience letters → Contact.
- **Nested experience** — Arbisoft lists sub-roles (Supercal.com, Walter's
  Wedding Estates, Waltly.net, Edly.io) under the parent role.
- **Projects** — curated case studies, plus a scrollable feed of all public
  GitHub repos fetched live at runtime.
- **`/work` detail page** — longer case studies for the featured projects.
- **Documents** — certifications and experience letters rendered as first-page
  image previews with click-to-open and download buttons.
- **Light/dark theme** toggle persisted in `localStorage` (defaults to dark).
- **Responsive** down to mobile, with SEO/Open-Graph meta tags.

## Project structure

```
.
├── index.html                 # App shell, fonts, icons, theme bootstrap
├── public/                    # Static assets served at the site root
│   ├── profile.png            # Hero photo
│   ├── Hamza_Madni_CV.pdf     # Résumé (linked from the nav)
│   ├── certifications/        # Certificate PDFs + first-page PNG previews
│   └── experience-letters/    # Experience-letter PDFs/JPG + PNG previews
├── src/
│   ├── main.tsx               # Entry + router (basename from BASE_URL)
│   ├── index.css              # Tailwind import + theme variables
│   ├── components/Nav.tsx      # Sticky nav + theme toggle
│   ├── pages/
│   │   ├── Home.tsx           # All homepage sections
│   │   └── Work.tsx           # /work case-study page
│   ├── data/content.ts        # All site content (single source of truth)
│   └── lib/
│       ├── github.ts          # useRepos() — live repo feed
│       └── theme.ts           # useTheme() — light/dark toggle
└── vite.config.ts             # base: '/' (user-site root)
```

## Editing content

Almost everything lives in [`src/data/content.ts`](src/data/content.ts):

- `profile` — name, title, contact links, photo, CV path.
- `experience` — roles; each may carry `subs` (sub-roles) with their own bullets.
- `projects` + `studies` — project cards and their `/work` case studies.
- `coreSkills` + `skills` — competency widget and grouped skill chips.
- `education`, `certifications`, `letters` — those sections.
- `inlineLinks` — phrases inside bullet text that should render as links
  (e.g. `OpenEdX`).

### Adding a certificate or experience letter

1. Drop the PDF (or image) into `public/certifications/` or
   `public/experience-letters/`.
2. Generate a first-page preview image (macOS):
   ```bash
   sips -s format png "public/certifications/my-cert.pdf" \
     --out "public/certifications/my-cert.png"
   ```
3. Add an entry to the matching array in `content.ts` (`certifications` or
   `letters`), pointing `preview` at the PNG and `file` at the original.

## Local development

```bash
npm install
npm run dev        # http://localhost:5174/
```

## Build & deploy

GitHub Pages serves the `gh-pages` branch at the site root. To publish:

```bash
npm run deploy        # type-checks, builds, and pushes dist/ to gh-pages
git push origin main  # keep the source branch in sync
```

`npm run build` runs `tsc -b && vite build`; a `postbuild` step copies
`index.html` to `404.html` so client-side routes (e.g. `/work`) resolve via the
SPA fallback. The deploy is intentionally script-based rather than a GitHub
Actions workflow.

## Notes

- `base` is `/` because this is a GitHub Pages **user site**
  (`<username>.github.io`); all public asset URLs are resolved through
  `import.meta.env.BASE_URL`.
- The custom domain `hamzamadni.com` is deliberately **not** connected.
