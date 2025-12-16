# Modern developer portfolio

- Next.js App Router + TypeScript + Tailwind CSS v4
- shadcn/ui components, Framer Motion animations, and next-themes dark mode
- Projects driven by typed JSON plus MDX content for detail pages

## Structure

- `src/app` — Routes (Home, Projects, Project/[slug], About, Contact)
- `src/components` — UI, layout, MDX overrides, theme toggle
- `src/data/projects.ts` — Typed project metadata
- `content/projects/*.mdx` — Long-form project write-ups

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.
