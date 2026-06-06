---
name: audit
description: System 3. On-demand health audit of a local-service website using DataForSEO Lighthouse + WebFetch + sitemap diff. Audits the homepage and 2-3 priority money pages for performance, technical SEO, schema correctness, and a duplicate-content scan. Use when the user asks for a health check, audit, quality scan, "is my site healthy", or wants to triage live pages.
allowed-tools: Read, Write, Edit, Bash, WebFetch, mcp__dataforseo__*
---

# System 3 — Audit (vertical-agnostic)

Health-check the live site and surface concrete fixes.

## Project root & context
`$ROOT/.seo/`. Read `context/site-profile.md` and `context/audit-targets.txt` (homepage + priority money-page URLs). If `audit-targets.txt` is missing, derive targets from the sitemap.

## When to invoke
"audit my site", "health check", "is my site healthy", "quality scan", "what's broken".

## Workflow

### 1. Performance & technical (Lighthouse)
For each target URL, run DataForSEO Lighthouse (load the `dataforseo` skill first). Capture Performance, SEO, Accessibility, Best-Practices scores and the top opportunities. Flag anything below: Perf 90, SEO 95, A11y 95.

### 2. On-page health (WebFetch each target)
Check: title length & uniqueness, meta description, single H1 + heading order, canonical present & correct, OpenGraph/Twitter tags, image `alt` coverage, internal-link count, word count, broken/placeholder media (`placehold.co`, `pravatar`, `picsum`, hot-linked `i.ibb.co`), and any leftover placeholder identity data (fake phone `555-01xx`, `[Brand]`, `[City]`).

### 3. Schema validation
Extract JSON-LD from each page. Confirm the right type per page (LocalBusiness / Service / FAQPage / BreadcrumbList / Article) and that `AggregateRating`/`Review` only appear where data is real. Flag missing required fields.

### 4. Duplicate-content scan
Compare body copy across money pages (shingle/similarity check). Flag clusters of near-identical pages (the `GENERATE_CONTENT` skeleton problem). List them as Producer/Refresh candidates.

### 5. Sitemap diff
Diff `sitemap.ts` output vs. actual routes (`constants.ts` slugs) — find pages missing from the sitemap or sitemap entries with no page.

### 6. Report
Write `$ROOT/.seo/output/audit/<date>.md` and a one-screen summary: a prioritized fix list (Critical / High / Nice-to-have), each with the exact file and change. Push duplicate-content and thin pages to `state/production-queue.json` as refresh candidates.

## Hard rules
- Every finding names a file/URL and a concrete fix — no vague advice.
- Flag, never silently "fix", anything involving identity/credibility data; that needs the user.
