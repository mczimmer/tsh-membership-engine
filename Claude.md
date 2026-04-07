# CLAUDE.md — TSH Membership Engine

## Project Summary

An interactive engagement plan for Valtech x The Social Hub (TSH). TSH is an existing Valtech client — this is not a pitch. The tone is "here's how we work together," confident and operational.

TSH is building an AI-powered membership personalisation platform for their hotel properties. They approached Valtech with two asks: an embedded senior full-stack developer (backend-heavy) and strategic/operational guidance on evolving their experimental setup into a scalable, GDPR-compliant production platform.

The app is a machine-readable operating model — typed data objects behind every page so tensions, system components, maturity phases, and roadmap items all reference each other.

## Stack

- Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- Deployed on Vercel via GitHub (`mczimmer/tsh-membership-engine`)
- Fonts: DM Sans + Space Grotesk (loaded via Google Fonts)

## TSH Brand Colors (confirmed from brand assets)

| Token | Hex | Usage |
|---|---|---|
| TSH Blue | `#2E7CF6` | Primary accent — active states, CTAs, section labels |
| TSH Green | `#1A8F3F` | Success, "Scale" phase, positive states |
| TSH Pink | `#F5A0B1` | Warm highlights, badges, secondary accent |
| TSH Black | `#1A1A1A` | Primary text, illustrations |
| TSH Cream | `#F5F0EB` | Page backgrounds (warm, never stark white) |
| TSH White | `#FFFFFF` | Cards, elevated surfaces |
| Amber | `#FACC15` | Warnings, "Now" phase, attention states |
| Border | `#E8E2DB` | Warm gray borders (never cold gray) |

Brand identity designed by Studio Dumbar. Bold, contemporary typography. Bright primary-led palette. The "hub flower" symbol appears in playful illustrated contexts. Personality: playful but professional, community-driven, warm, European B-Corp energy.

## Writing Rules

- NO em dashes (—) anywhere in rendered text. Use hyphens (-), commas, or rephrase.
- NO `&mdash;` or `&#x2014;` entities.
- Apostrophes should use `&apos;` in JSX or standard single quotes.
- Tone: confident, operational, partnership-oriented. Not a sales pitch.
- TSH "has recognised that a differentiated membership experience can't be bought off the shelf" — not "has built something rare."
- Four pillars: Learn, Stay, Work, Play.

## Architecture

### Data Layer (`/src/data/`)
All content is structured and typed. Pages import from here — never hardcode arrays inline.

- `types.ts` — Full TypeScript schema for all entities
- `tensions.ts` — 3 tensions with resolution strategies, risk profiles
- `maturity.ts` — 4-phase maturity model (Now, Validate, Harden, Scale)
- `components.ts` — 6 system components with roles (context_layer, decision_engine, etc.)
- `operating-model.ts` — 2-track model (Capability + Advisory)
- `delivery.ts` — Delivery loop: feedback inputs → decision points → outputs
- `roadmap.ts` — Roadmap items tagged with tensions, components, maturity shifts
- `experience-moments.ts` — 6 experience moments mapped to pillars
- `index.ts` — Central exports with `getTension()`, `getComponent()` lookup functions

### Key cross-references
- Roadmap items → `tensionsAddressed[]`, `componentsImpacted[]`, `maturityShift`
- Experience moments → `componentsInvolved[]`, `tensionsNavigated[]`
- System components → `role` types mapping to system layers

### Navigation (`/src/config/navigation.ts`)
Sidebar groups: Discovery → Analysis → Engagement → System

### Layout
- Fixed left sidebar (272px) with TSH x Valtech branding and flower logo
- Content via `PageWrapper` component with breadcrumbs
- Route group `(shell)` wraps all pages with sidebar

## Design Principles

### DO
- **Visual variety between pages** — every page has a unique layout. No two pages use the same card grid pattern.
- **Lead with a visual moment** — diagrams, stats, or tension visualizations before card grids.
- **Stat-forward** — big numbers + small labels over paragraphs.
- **Left-border accent callouts** — for "Our read" or "Key insight" editorial moments.
- **"Next section" navigation** — every page ends with a link to the next page.
- **Expandable detail** — cards that reveal system connections (tensions, components).
- **Color-coded categories** — tensions (amber/pink/blue), phases, pillars, ritual types.
- **Warm tones** — cream backgrounds, warm gray borders, tinted card backgrounds.

### DON'T
- Don't make pages look the same — vary layouts between pages.
- Don't use stark white backgrounds — always cream for page bg.
- Don't use cold grays — all grays lean warm.
- Don't use em dashes.
- Don't hardcode content — import from `/src/data/`.
- Don't use red (#E63946) — the old accent. Use TSH Blue (#2E7CF6) as primary.

## Page Visual Signatures

| Route | Page | Layout |
|---|---|---|
| `/` | Overview | Speed/Structure tension diagram + stat cards + numbered nav grid |
| `/context` | Where We Are | Interactive clickable tension diagrams with expandable detail |
| `/approach` | Our Approach | Horizontal timeline with progress nodes + From/To comparison |
| `/how-we-work` | How We Work | Three-column flow (DEV / SYNC / ADV) with arrows |
| `/team` | Capability Profile | Horizontal component cards with role badges + capability chips |
| `/delivery` | Delivery Rituals | Inputs/Decisions/Outputs flow + typed ritual cards |
| `/experiences` | Experience Moments | Stats + pillar filter + expandable system-connected cards |
| `/roadmap` | Roadmap | Phase overview + expandable timeline with tension/component tags |