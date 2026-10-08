# wG Ventures — portfolio

Next.js 15 (App Router) + TypeScript. Same design as the previous static build,
now with per-project routes, real screenshots and automatic image optimisation.

## Run it

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # production build

## Where things live

    lib/projects.ts        every project — copy, layers, specs, screenshots, links
    app/page.tsx           the index sheet (cover, work, stack, method, record)
    app/work/[slug]/       one page per project, with its own link preview
    components/Case.tsx    case card, exploded assembly, specs, screenshots
    components/Chrome.tsx  nav, logo, contact footer
    app/globals.css        all styling
    public/shots/          screenshots
    public/og.png          default link-preview image

## Adding or changing a project

Edit `lib/projects.ts` only. Everything else reads from it — the index card, the
project page, the OG tags, the prev/next links, and the static route list.

To add screenshots: drop the PNG in `public/shots/`, then add an entry to that
project's `shots` array with its real pixel width and height (the dimensions are
required — `next/image` uses them to reserve space and avoid layout shift). Set
`phone: true` for phone-sized captures.

## Deploying

Push to `main`; Vercel builds automatically. Framework preset: Next.js.
No environment variables, no build settings to change.

If the deployment URL changes, update `SITE` in `app/layout.tsx` — the link
preview images are absolute URLs and will break otherwise.
