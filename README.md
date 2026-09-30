# jasimmonsv.com

Source for [jasimmonsv.com](https://jasimmonsv.com). It's built with [Astro](https://astro.build), searched with [Pagefind](https://pagefind.app), and deployed to GitHub Pages by a GitHub Action on every push to `master`. There's no server to run.

## Writing

| To publish | Put a Markdown file in | It appears at |
| --- | --- | --- |
| An essay | `src/content/writing/` | `/writing/<filename>/`, the home stream, `/rss.xml` |
| A note | `src/content/notes/` | `/notes/<filename>/`, the home stream, `/notes/rss.xml` |
| A project write-up | `src/content/projects/` | `/projects/<filename>/` |

Copy the `_template.md` in each folder. Files starting with `_` never publish, and `draft: true` keeps a post visible in `npm run dev` but out of the live site. The frontmatter is type-checked (see `src/content.config.ts`), so a missing title or bad date fails the build instead of publishing something broken.

Pages: `/readme` (your Manager README) is `src/pages/readme.md` and `/about` is `src/pages/about.md`. The library is `src/data/library.json` (see `_library.example.json` for the shape). `/uses` is drafted at `src/pages/_uses.md`; rename it to `uses.md` to publish it.

Names and links live in `src/site.config.ts`.

## Run it locally

```sh
npm install
npm run dev       # http://localhost:4321 with live reload (search is off in dev)
npm run build     # builds dist/ and the search index
npm run preview   # serves the built site, search included
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `master`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. `public/CNAME` keeps the custom domain.

## Domain extras (in `public/`)

- `/.well-known/security.txt`: the security contact. Set up the `security@` mailbox before launch, and update `Expires` every year.
- `/.well-known/webfinger`: lets `@jasimmonsv@jasimmonsv.com` resolve to the Hachyderm account. Check it against `https://hachyderm.io/.well-known/webfinger?resource=acct:jasimmonsv@hachyderm.io`.
- `rel="me"` links are in every page head, for Mastodon profile verification.
