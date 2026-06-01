# Content Planning Operations Dashboard

This repository contains a static UI/UX prototype for a content planning operations dashboard. It was designed as a portfolio project for exploring a SaaS-style workflow across planning, ideas, analytics, campaigns, calendar, and settings screens.

## Important Note

This website is static only.

It does not include:

- a backend server;
- a database;
- user authentication;
- API integrations;
- saved form submissions;
- real scheduling or publishing logic.

Some buttons, forms, dashboard cards, and controls are included to demonstrate layout, product flow, and interface design. They are not connected to a database or API, so actions such as creating posts, exporting data, saving settings, or scheduling content are visual prototype interactions only.

The working interaction currently included is client-side navigation between the prototype views.

## Live Project Structure

- `index.html` redirects visitors from the GitHub Pages root to the prototype.
- `planly-improved/` contains the static website files:
  - `index.html`
  - `styles.css`
  - `app.js`
- `stitch-export/` contains exported reference assets and notes from the original design source.
- `tests/` contains small checks for the static site structure.

## Run Locally

From the repository root:

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory C:\endless_refinement\hobby\L1011
```

Then open:

```text
http://127.0.0.1:4173/
```

## Run Checks

```powershell
npm test
```

## Project Purpose

The goal of this project is to demonstrate interface design, product thinking, visual hierarchy, responsive layout, and dashboard organization. It is not intended to function as a production content management system without additional backend development.
