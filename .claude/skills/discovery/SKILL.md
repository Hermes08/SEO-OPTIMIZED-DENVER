---
name: discovery
description: System 1. Vertical-agnostic keyword and opportunity discovery for a local-service website. Fans out 25-40 candidate topics from a seed via DataForSEO, scores intent and priority, dedupes against the rolling opportunity bank, and queues priority-1 items for the Producer. Use when the user asks to research keywords, find new opportunities, fill the production queue, or expand topical coverage.
allowed-tools: Read, Write, Edit, Bash, WebFetch, mcp__dataforseo__*
---

# System 1 — Discovery (vertical-agnostic)

Generate and prioritize content opportunities, dedup-safe, then queue the best for the Producer.

## Project root & context
`$ROOT/.seo/`. **Read `$ROOT/.seo/context/site-profile.md` and `services.md` first** — they define the vertical, city, services and competitors. Everything below is parameterized by them; nothing is hardcoded to a niche.

## When to invoke
"research keywords for X", "find opportunities", "fill the queue", "fan out from <seed>", "what should we write next?".

## How to read the request
1. **Seed given** → use it verbatim.
2. **No seed** → read `state/opportunity-bank.json -> seeds_researched`, pick the oldest/never-researched seed from `services.md`.
3. **Force re-research** → proceed but warn how many duplicates it will produce.

## Workflow

### 1. Expand the seed
From the seed + `services.md` services + neighborhoods in `site-profile.md`, build a candidate set with DataForSEO (load the `dataforseo` skill first; use `mcp__dataforseo__*`):
- Keyword ideas / related / questions for the seed.
- Geo-modified variants for each neighborhood/suburb (`<service> <neighborhood>`).
- Competitor gap: pull keywords competitors (from `competitors.md`) rank for that the site does not.
Aim for 25–40 candidates.

### 2. Pull metrics
For each candidate get search volume, keyword difficulty, and SERP intent (informational vs. commercial vs. transactional). Tag intent.

### 3. Score
`priority = f(intent, volume, difficulty, business_fit)`:
- Commercial/transactional intent matching a real service → highest.
- Reasonable volume, attainable difficulty → boost.
- `business_fit` from `services.md` (don't queue topics the business can't serve).
Score 0–100; mark `priority: 1` for the top tier.

### 4. Dedupe
Load `state/opportunity-bank.json`. Drop anything already in the bank or already a published page (check the sitemap / `constants.ts` slugs). Only genuinely new opportunities survive.

### 5. Persist
- Append survivors to `state/opportunity-bank.json` (with score, intent, volume, difficulty, date, seed).
- Push `priority: 1` items to `state/production-queue.json` (title, target slug, angle, primary + secondary keywords, intent).
- Update `seeds_researched[seed].last_researched`.

### 6. Report
Show the top 10 queued opportunities as a table and tell the user to run `produce the next one`. If a dashboard HTML exists at `$ROOT/.seo/output/dashboard.html`, refresh its discovery section.

## Hard rules
- Never queue a duplicate of an existing page or bank entry.
- Never invent search volumes — if DataForSEO returns nothing, say so and mark the candidate `volume: unknown`.
- Stay within the vertical defined in `site-profile.md`.
