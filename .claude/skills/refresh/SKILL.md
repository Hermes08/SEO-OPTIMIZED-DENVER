---
name: refresh
description: System 4. Find decaying, stale, thin, or non-indexed pages on a local-service website (older than ~12 months, on the templated content skeleton, or missing from Google's index) and route them back to the Producer as refresh jobs. Use when the user asks for a decay scan, performance health check, "what's underperforming", vital signs, or refresh recommendations.
allowed-tools: Read, Write, Edit, Bash, WebFetch, mcp__dataforseo__*
---

# System 4 — Refresh (vertical-agnostic)

Triage existing pages and decide: refresh / quick-fix / retire / ignore.

## Project root & context
`$ROOT/.seo/`. Read `context/site-profile.md`. Inputs: the repo's pages (`constants.ts` slugs + dates), the live sitemap, and — if available — Google Search Console data (via the `gsc-live-review` skill or a GSC export the user provides).

## When to invoke
"decay scan", "what's underperforming", "vital signs", "find stale pages", "refresh recommender".

## Workflow

### 1. Enumerate pages
List every category, sub-service, and blog page from `constants.ts` with its `publishDate` (where present) and whether its body uses the templated generator vs. unique content.

### 2. Pull signals
- **Age:** flag anything published >12 months ago (relative to today).
- **Thin/duplicate:** flag every page still on the `GENERATE_CONTENT`/`GENERATE_EV_CONTENT` skeleton (these are duplicate-content liabilities).
- **Indexation:** if GSC is available, flag pages with impressions-but-no-clicks, declining clicks, or not indexed at all.
- **Stale facts:** dates/titles that contradict (e.g. "2025 Guide" dated 2023), expired rebates/codes.

### 3. Classify each
- `refresh` → meaningful rewrite needed → queue to Producer.
- `quick_fix` → title/meta/date/link tweak → do it inline now, with the exact edit.
- `retire` → low-value/cannibalizing → recommend 301 + removal.
- `ignore` → healthy, leave it.

### 4. Route
- Append `refresh` items to `state/production-queue.json` (flagged `source: refresh`, with the reason).
- Apply `quick_fix` edits directly and run `npm run build`.
- List `retire` recommendations for the user to approve (never delete pages unilaterally).

### 5. Report
Write `$ROOT/.seo/output/refresh/<date>.md`: a table of every page, its class, the reason, and the action. Summarize counts and tell the user how many refresh jobs were queued.

## Hard rules
- Prioritize the templated duplicate pages — they're the biggest risk on this build.
- Convert relative dates to absolute when writing state.
- Never retire/delete a page without explicit user approval.
