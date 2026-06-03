# Denver Metro Services — Build Progress

_Last updated: 2026-06-02_

## "Mile High" visual redesign — IMPLEMENTED ✅
Implemented the Claude Design handoff (`design-handoff/incoming/multiservices/`, direction **B · Mile High**: charcoal + copper, Saira Condensed display, mono labels). Build passes clean (49 routes). Golden rule kept — no copy/heading/SEO/schema changes.
- `src/app/globals.css` — Tailwind + full Mile High token/component CSS (font literals → next/font vars).
- `src/app/layout.tsx` — Saira Condensed + Archivo + JetBrains Mono via `next/font`; paper body; mounts `LiveActivity`; dropped old top-bar + old sticky CallButton.
- `src/app/icon.svg` — favicon (mountains-as-roofline mark).
- `src/components/Header.tsx` — topbar + logo lockup ("Denver Metro / SERVICES.com", copper `.com`) + dark nav + Services mega-menu (restyled) + copper CTA. Real routes preserved.
- `src/components/Footer.tsx` — dark footer + lockup + **kept** the comprehensive services/areas SEO link map.
- `src/components/LiveActivity.tsx` *(new)* — sticky call + live social-proof notifications + gamified "jobs today" counter + site-wide count-up/scroll-reveal observers. Respects `prefers-reduced-motion`.
- `src/app/page.tsx` — full home rebuilt (14 sections) wired to `constants.ts` (CATEGORIES, TESTIMONIALS, SERVICE_AREAS, PROCESS_STEPS).

### Mile High roll-out to inner pages (in progress)
- **Global copper remap** in `globals.css`: overrode Tailwind `--color-orange-*` → copper, so every inner page/component/article-body accent is now copper site-wide (verified in compiled CSS).
- Category page hero → dark Mile High (kicker + Saira + copper); mock `picsum` map → real Google Maps embed.
- Service money-page H1 → Saira display + kicker; article H2/H3 → Saira.
- **QA fixes:** contact page fake address (`123 Service Road … 00000`) → service-area-only via real constants; `service@company.com` → `EMAIL_ADDRESS`. Build clean; no fake address/email/pravatar/placehold/picsum in built output.
- Full per-page specs to finish the roll-out → `design-handoff/REMAINING.md`.

### Inner pages — ALL implemented in Mile High (bundle 2) ✅
Designer finished every page (used my REMAINING.md). Shared `mile-high.css` ported into `globals.css` (scoped to avoid home/Tailwind conflicts). Build clean, 46 routes.
- **Category** (`[categorySlug]/page.tsx`) — phero hero, benefits feat-grid, sub-service svc-grid, dark map+counties, dark process, blog preview, FAQ (details.qa), generated body, CTA. Covers all 6 categories.
- **Service / money page** (`[categorySlug]/[serviceSlug]/page.tsx`) — scoped `.svc-page`: 2-col charcoal hero w/ rating, lead, generated article body (`.ms-body` styled), per-service reviews (`.psr`, real testimonials), FAQ, area chips, CTA, sticky sidebar (other services + call card + financing promo). Covers all 20 services.
- **About** — phero, story, core values (feat-grid from VALUES), copper stat band, team grid (initials).
- **Blog index** — phero, featured pick, category filters (link to category blogs), post grid.
- **Blog post** — title-over-image post-hero, editorial `.post-body`, author box, tags/share, related, CTA.
- **Contact** — NEW `RequestServiceForm.tsx` client component: real 3-step form (progress + per-step validation + success state). Info rail + hours. Fake address/email already removed.
- **Financing** — NEW `PaymentCalculator.tsx` client component (amortization `m=P*r/(1-(1+r)^-n)`, r=0→P/n). Plan cards (FINANCING_PLANS), eligibility, partners, FAQ.
- Fixed a CSS comment containing `*/` that prematurely closed a comment block.
- **Remaining minor:** `areas-we-serve` page inherits chrome/copper/fonts but wasn't in the bundle — optional phero polish later.

**Follow-ups for the redesign:**
- Inner pages (service/category/contact/financing, blog) still use the old Tailwind light theme; they inherit the new chrome (header/footer/fonts/tokens) but need per-section Mile High restyling (the handoff defers this as "roll-out").
- Reveal/count-up observers run once at layout mount; add a pathname effect if inner pages adopt `.reveal`.
- **Honesty flag:** the design's marketing stats ("2,400+ homes / reviews", "4.9", "15+ years") are now visible copy. They are NOT in structured data (AggregateRating schema stays gated off via `HAS_VERIFIED_REVIEWS=false`). Replace with real numbers when available.


## Reality vs. the work order
The handoff doc (`~/Service-Template/seo-systems-handoff/`) is partly stale. Verified current state:
- `npm run build` passes clean — 48 static pages, all routes generate. (1.6 build gate already met.)
- Footer is already multi-trade; **no** EV-only brand copy anywhere. Only legit references are to the real "EV Charger Installation" sub-service. (1.2 done.)
- No `i.ibb.co` hotlinks; no broken `BASE_URL` import.
- `SchemaMarkup` previously hardcoded a **fabricated** street address + geo + postal in LocalBusiness — now fixed (see below).

## Done this session
- **1.2** Confirmed footer/brand clean. ✅
- **1.5** Inventoried all templated pages (see Producer queue below). ✅
- **1.4 (structural)** `SchemaMarkup.tsx` + `constants.ts`:
  - Removed hardcoded fake `streetAddress`/geo/postal.
  - Added VERIFICATION FLAGS in `constants.ts`: `HAS_PHYSICAL_ADDRESS`, `HAS_VERIFIED_REVIEWS`, `GEO_COORDS`, `LICENSE_NUMBER`, `SOCIAL_LINKS` (all default off/empty).
  - Address+geo now emitted only when `HAS_PHYSICAL_ADDRESS`; AggregateRating only when `HAS_VERIFIED_REVIEWS`; `sameAs` only from real `SOCIAL_LINKS`.
  - Fixed missing-asset reference `hero-fallback.jpg` → `general-hero.png`.
  - Added `TODO(NAP)` banner atop `constants.ts`. `tsc --noEmit` clean.

## BLOCKED — needs real business data from David (to finish 1.1, 1.3, 1.7, Part 3)
1. Phone (real tracking number)
2. Street address + ZIP, OR confirm "service-area only" (keeps `HAS_PHYSICAL_ADDRESS=false`)
3. Email (confirm real/inboxed)
4. Google Business Profile review link / place ID
5. Google rating + review count (real)
6. CO license #
7. Real social handles (FB/IG/LinkedIn) or "none"

Once provided: fill values in `constants.ts`, flip flags, add `public/logo.png`.

## Producer queue (1.5) — pages still on the `GENERATE_CONTENT` skeleton (duplicate-content risk)
20 sub-services + 6 blog posts = 26 pages.
- electrical: ev-charger-installation, electrical-panel-upgrade, emergency-electrician, commercial-ev-chargers, battery-storage-systems
- plumbing: drain-cleaning-service, water-heater-repair-install, leak-detection-repair, frozen-pipe-repair
- hvac: air-conditioning-repair, furnace-heating-installation, indoor-air-quality
- solar: solar-panel-installation, solar-repair-maintenance
- roofing: roof-repair, roof-replacement, hail-damage-repair
- general: kitchen-remodeling, bathroom-remodeling, basement-finishing
- blog: 5-signs-electrical-panel-needs-upgrade, truth-about-tankless-water-heaters, preparing-ac-for-summer, top-5-tips-solar-maintenance, how-to-spot-hail-damage, kitchen-remodel-checklist

## Remaining task order
1.1 (data) → 1.3 (media) → 1.4 finish (flags+logo) → 1.6 (sitemap/metadata/Lighthouse audit) → 1.7 (dates) → Part 2 (install engine, rewrite the 26 pages) → Part 3 (social proof).
