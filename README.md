# nerdshouse.com: "Live System" redesign

Astro 5 static site for Nerdshouse Technologies LLP: a technology and AI engineering partner in Surat, India.

> Pre-launch preview. **Not the production site.** Production is a separate Next.js app; this repository has no
> production hosting attached. Internal launch documents (decisions, checklists, client approvals) are kept locally
> in the git-ignored `private/` folder because this repository is public.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve dist/
```

Requirements: Node 18.20+, 20.3+ or 22+ (tested on 23.11), and pnpm 10.28.2. The `packageManager` field pins pnpm, and `pnpm-lock.yaml` is the only lockfile. Use `pnpm install --frozen-lockfile` in CI.

Environment variables: see `.env.example`.
- `PUBLIC_PREVIEW=true` shows a "Preview" banner and adds `noindex` (set this for every non-production deployment).
- `PUBLIC_GA4_ID`: GA4 is loaded only when this is set, so leave it unset in previews.
- Contact form: With `PUBLIC_WEB3FORMS_KEY` unset, the form opens the visitor's email app addressed to nerd@nerdshouse.com. Set the key only after verifying where it delivers.

Hosting: `vercel.json` sets real 301 redirects (`/services`, `/blog`) and removes trailing slashes. Astro's own `redirects` are only meta-refresh fallbacks.

## Structure

```
src/styles/global.css        design tokens, surfaces (s-dark / s-light / s-white / s-signal), type, buttons, states
src/data/site.ts             company facts (verified only) and capabilities
src/data/work.ts             projects, screenshots and evidence notes
src/data/cases.ts            long-form case-study content
src/layouts/Base.astro       head, SEO, canonical, OG, JSON-LD, header and footer
src/layouts/Legal.astro      legal markdown pages
src/components/home/*        homepage sections (HeroConsole is the interactive hero demo)
src/components/visuals/*     interactive explainers: AgentCard, AutonomyDial, ScopeBoard, RoleMap,
                             SpreadsheetToSystem, DecisionLog, ProductJourney, AgentAnatomy
src/pages/*                  routes
private/                     LOCAL ONLY, git-ignored: unpublished client work, internal launch docs
```

## Conventions

- Real client visuals carry a `label-real` caption. Modelled demos carry `label-illustrative`.
- All content renders in the HTML. JavaScript only adds interaction, and the site stays usable without it.
- Motion explains state only, and respects `prefers-reduced-motion`.
