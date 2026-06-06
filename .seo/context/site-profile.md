# Site Profile — MASTER CONTEXT (read by every system)

> This is the single source of truth. Change this file to repoint the engine at a different city, trade, or niche. The skill prompts never need editing.

## Identity
- vertical: "Multi-trade residential home services"   # e.g. roofing-only, dental, med-spa, real estate
- brand: "Denver Metro Services"
- phone: "TODO-real-tracking-number"
- email: "service@denvermetroservices.com"
- city: "Denver"
- state: "CO"
- region: "Denver Metro Area"
- domain: "denvermetroservices.com"
- base_url: "https://sunny-praline-e0f93b.netlify.app"   # live (Netlify); set NEXT_PUBLIC_SITE_URL for prod domain
- coverage: "NATIONWIDE — all 50 states + DC (see src/lib/states.ts). Denver is HQ/origin."

## Services (high level — detail lives in services.md)
- Electrical Services (EV charger installation, panel upgrade, emergency, commercial EV, battery storage)
- Plumbing Services (drain cleaning, water heater, leak detection, frozen pipe)
- HVAC Services (AC repair, furnace install, indoor air quality)
- Solar Energy Services (panel installation, repair & maintenance)
- Roofing Services (repair, replacement, hail damage)
- General Contractor (kitchen, bathroom, basement)

## Geography to target
neighborhoods: ["Capitol Hill","Cherry Creek","RiNo","LoDo","Washington Park","Highlands","Stapleton","Lakewood","Golden","Aurora","Highlands Ranch"]
counties: ["Denver","Jefferson","Arapahoe","Douglas","Adams"]

## Repo integration contract (how produced content gets into the site)
- data_file: "src/lib/constants.ts"
- content_dir: "src/content/<category>/<slug>.ts"   # one produced body per file
- body_field: "CATEGORIES[].subServices[].content  and  BLOG_POSTS[].content"
- body_format: "HTML string, Tailwind classes matching existing generators (buildSection, text-3xl font-bold, numbered-step blocks)"
- build_cmd: "npm run build"   # must pass before any page is marked done

## Location pages (NEW — nationwide programmatic SEO)
- index: "/locations"  (src/app/locations/page.tsx)
- per-state: "/locations/[stateSlug]"  (51 pages, src/app/locations/[stateSlug]/page.tsx)
- per-state-per-service: "/locations/[stateSlug]/[serviceSlug]"  (306 pages)
- data: "src/lib/states.ts" (slug/code/name/mainCity/majorCities)
- These are TEMPLATED and carry doorway/thin-content risk. The Producer should enrich the
  highest-priority states first (CO + the largest-population states) with unique local prose:
  real city detail, climate/permit specifics, local landmarks/neighborhoods, distinct FAQs.
  To enrich a state page, write a unique intro/body and store per-state copy keyed by state slug
  (extend states.ts with an optional `intro`/`body` field the page renders when present).

## Notes
- Positioning is MULTI-TRADE and NATIONWIDE. Do not let copy drift into single-service (EV-only) or single-city (Denver-only) language on national pages.
- All credibility data (rating, review count, license #) must be REAL — see experience-notes.md.
- Honesty: site claims nationwide service per owner decision. Per-state license/coverage claims
  should be substantiable before scaling paid traffic.
