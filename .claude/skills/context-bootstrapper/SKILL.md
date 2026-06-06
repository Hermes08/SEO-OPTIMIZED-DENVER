---
name: context-bootstrapper
description: System 0. Interview the user about their local-service business and generate the 8 vertical-agnostic context files the other four systems read on every run (site-profile, audience, tone-of-voice, experience-notes, services, competitors, author, audit-targets). Fetches the live site first to pre-fill what it can see, then asks only what it cannot infer. Use when setting up the systems for the first time, or when the user says "bootstrap my context folder", "set up the context files", or "onboard a new project".
allowed-tools: Read, Write, Edit, Bash, WebFetch
---

# System 0 — Context Bootstrapper (vertical-agnostic)

Generate the 8 context files that Systems 1–4 read on every run. This skill is **niche-agnostic**: it asks the business what it is rather than assuming. The output `site-profile.md` is the single source of truth every other skill loads first.

## Project root

Resolve `$ROOT` = the current repo. Context lives in `$ROOT/.seo/context/`, state in `$ROOT/.seo/state/`, output in `$ROOT/.seo/output/`. Create them if missing. Never hardcode an absolute path.

## When to invoke

User says: "bootstrap my context", "set up context files", "onboard this project", "start the SEO systems".

## Workflow

### 1. Read what exists
- If `$ROOT/.seo/context/site-profile.md` already exists, show its summary and ask whether to refresh or start clean.
- Read `src/lib/constants.ts` if present — for a Next.js service-site repo this already contains `COMPANY_NAME`, `CITY`, `STATE`, `REGION`, `CATEGORIES`, `SERVICE_AREAS`. Pre-fill from it. Do not re-ask anything the code already answers.

### 2. Fetch the live site
- WebFetch the homepage and 1–2 money pages (from `site-config` or the sitemap). Extract: brand, positioning, services, locations, phone, tone. Show the user what you inferred and ask them to correct it.

### 3. Interview (only the gaps)
Ask, in plain language, only what code + site didn't reveal:
- **Vertical / what they sell** (e.g. "multi-trade home services", "roofing only", "med spa"). This drives everything downstream.
- **Geography**: primary city, region, neighborhoods/suburbs to target, service-area vs storefront.
- **Audience**: residential/commercial, price tier, the customer's actual problem and search intent.
- **Differentiators & real experience**: licenses, years, certifications, real numbers, real stories. Flag clearly what is verifiable vs. aspirational — downstream skills must not fabricate credibility.
- **Tone**: how they want to sound (authoritative, neighborly, premium…), words to avoid.
- **Competitors**: 3–8 real competitor domains.
- **Author/E-E-A-T**: who the content is attributed to and their real credentials.

### 4. Write the 8 files
Write to `$ROOT/.seo/context/` (use the `.example.md` templates shipped with this plugin as the structure):

| File | Holds |
|---|---|
| `site-profile.md` | The master profile: `vertical`, `brand`, `phone`, `city`, `region`, `domain`, `base_url`, `services[]`, `neighborhoods[]`, integration paths (where produced content is injected). **Every other skill reads this first.** |
| `services.md` | Each service/sub-service: name, slug, intent, target keywords, real proof points. |
| `audience.md` | Who they serve, the jobs-to-be-done, objections. |
| `tone-of-voice.md` | Voice rules, banned words, reading level. |
| `experience-notes.md` | Real, attributable stories/numbers the Producer may cite. Mark each as verified or not. |
| `competitors.md` | Competitor domains + what they rank for. |
| `author.md` | Byline identity + real credentials for E-E-A-T. |
| `audit-targets.txt` | Homepage + 2–3 priority money-page URLs for System 3. |

### 5. Confirm
Print a one-screen summary of `site-profile.md` and the file list. Tell the user the next command: `research keywords for <seed>`.

## Hard rules
- Agnostic: never assume the vertical. If `site-profile.md` says "roofing", every later run is roofing; if it says "dental", it's dental. You only change context files, never skill prompts, to repoint the engine.
- Honesty: anything the user can't substantiate goes into `experience-notes.md` flagged `UNVERIFIED` and the Producer must not state it as fact.
