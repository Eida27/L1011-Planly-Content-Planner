# Stitch Export: UI/UX Design Concept

Project: `3695426879008977149`

This folder contains the downloaded Stitch screen artifacts and the local improvement work.

## Exported Artifacts

- `screens-manifest.json`: screen title, ID, dimensions, and whether HTML was available.
- `contact-sheet.png`: quick visual index of the downloaded screenshots.
- `screens/01-chatgpt-image-jun-1-2026-030255-pm/screenshot.png`: image-only source screen.
- `screens/03-planly-content-planner/index.html` and `screenshot.png`
- `screens/04-planly-dashboard/index.html` and `screenshot.png`
- `screens/05-planly-ideas/index.html` and `screenshot.png`
- `screens/06-planly-analytics/index.html` and `screenshot.png`
- `screens/07-planly-campaigns/index.html` and `screenshot.png`
- `screens/08-planly-campaign-details/index.html` and `screenshot.png`
- `screens/09-planly-calendar/index.html` and `screenshot.png`
- `screens/10-planly-settings/index.html` and `screenshot.png`
- `design-system.md`: exported design system notes and critique.

The screenshot URLs from Stitch's `lh3.googleusercontent.com` exports returned small preview images until `=s0` was appended to each hosted URL. The final `screenshot.png` files here are the full-resolution exports reported by Stitch.

## Observed Flaws

- The screens are visually polished, but the product shell drifts across pages: sidebars, headers, active nav states, and CTA language are not fully consistent.
- The palette overuses purple and pale lavender, which weakens hierarchy in dense dashboard views.
- Several pages use fixed-height and fixed-position desktop compositions, with frequent `h-screen`, `overflow-hidden`, and hard-coded widths.
- Each HTML file repeats Tailwind CDN setup, Google font imports, color tokens, and component markup instead of sharing a system.
- Analytics and dashboard pages are much taller than the useful content demands, creating sparse dead zones.
- Tables and status tags are attractive but not consistently optimized for scanning or operational decision-making.

## Improvement Direction

The local improved prototype lives in `../planly-improved`. It keeps the same product concept but consolidates the experience into one shared, responsive, operational SaaS shell with:

- consistent sidebar and topbar behavior;
- restrained neutral surfaces with purple reserved for primary actions and active state;
- semantic green, amber, and rose status colors;
- shared CSS/JS instead of repeated generated Tailwind exports;
- tighter analytics, campaign, calendar, and settings views;
- local visual references from the downloaded Stitch screenshots.
