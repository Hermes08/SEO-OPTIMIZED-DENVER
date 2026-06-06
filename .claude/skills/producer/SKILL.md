---
name: producer
description: System 2. Produce ONE unique money page or blog post at a time for a local-service website, following a 5-step workflow (brief -> research -> outline -> draft -> review) with human approval checkpoints. Emits the body as an HTML string drop-in for the site's data file, replacing a templated placeholder. Use when the user says "produce the next one", "make a page", "draft the next queued item", or names a specific topic.
allowed-tools: Read, Write, Edit, Bash, WebFetch
---

# System 2 — Producer (vertical-agnostic)

Produce ONE deliverable, interactively, with checkpoints. One per invocation by design — every page needs a human on brief, sources, and outline. If asked to "produce the whole queue", politely refuse and offer to run again after this one ships.

## Project root & context
`$ROOT/.seo/`. **Read all 8 files in `$ROOT/.seo/context/` first.** If any are missing, stop and tell the user to run `context-bootstrapper`. The vertical, brand, voice, neighborhoods, and real experience all come from there.

## Pick the next item
Read `state/production-queue.json`; show the top 3. A refresh-queue item (from System 4) of higher priority is surfaced instead. Let the user pick or name their own topic.

## The 5 steps

### 1. Brief
Confirm the angle in one sentence. **Ask** the user for topic-specific real experience (a story, a customer, a number, a strong opinion). If they have none, say "research only" and proceed without inventing experience.

### 2. Research
Pull 8–12 sources via WebFetch (codes/permits/rebates/local specifics relevant to the vertical and city in `site-profile.md`). Present them numbered; wait for approval / swap / reject.

### 3. Outline
Full structure: section headings, internal-link picks (to real sibling pages from `constants.ts`), where real experience and real facts land, the FAQ set, and the target keywords from the queue item. Wait for approval.

### 4. Draft
Write it. Don't ask permission to start. Requirements:
- **Unique** — must not reuse the generic skeleton. Vary structure per page; this is the whole point of replacing `GENERATE_CONTENT`.
- **Voice** from `tone-of-voice.md`; **E-E-A-T** byline from `author.md`.
- **Local specificity** — real neighborhoods, codes, climate, permits for the city in `site-profile.md`.
- **Honesty** — only cite experience/numbers marked verified in `experience-notes.md`. Never fabricate stats, reviews, or credentials.
- **Output format = the site's contract.** Emit the body as an HTML string using the same Tailwind conventions as the existing generators (section wrappers, `text-3xl font-bold` headings, numbered-step blocks, `list-disc` lists). Target ~1,500–2,200 words for a money page.

### 5. Review & integrate
Run the self-checklist:
- [ ] Unique vs. every other page (diff against existing slugs).
- [ ] Primary keyword in H1, title, first 100 words, naturally throughout.
- [ ] All internal links resolve to real slugs.
- [ ] FAQ block present and renderable as `FAQPage` schema.
- [ ] No unverified claims; no fabricated proof.
- [ ] Reading level / banned words per `tone-of-voice.md`.

Fix failures, then:
1. Save the body to `$ROOT/.seo/output/production/<slug>.html`.
2. Write it as a typed const to `src/content/<category>/<slug>.ts` (`export const <SLUG>_CONTENT = \`...\`;`).
3. Print the one-line edit for `src/lib/constants.ts`: replace `content: GENERATE_CONTENT(...)` with `content: <SLUG>_CONTENT` (add the import).
4. Run `npm run build`; do not finish on a broken build.
5. Mark the queue item done in `state/production-queue.json`.

## Hard rules
- One deliverable per invocation.
- Output must drop into the repo's data layer without reformatting.
- Never ship a page that duplicates an existing one or that states unverified facts.
