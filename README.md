# Sequrin Public Website

Public marketing website for **Sequrin**, pronounced “Securing”, representing **Secure Integrity Network**.

Sequrin is an early-stage South African company developing healthcare claims-integrity technology for medical schemes and authorised claims-integrity teams.

## Public site

The intended production domain is **https://sequrin.tech**.

Current route structure:

- `/` public overview
- `/product` product capabilities
- `/how-it-works` product approach and governed workflow
- `/for-medical-schemes` controlled evaluation model
- `/about` company stage, direction and founder
- `/impact` why claims-integrity capability matters
- `/governance` human oversight, access and decision boundaries
- `/network` longer-term Secure Integrity Network direction
- `/privacy` Sequrin Privacy Policy
- `/policies` website and policy notices
- `/login` sign-in handoff to `https://app.sequrin.tech/sign-in`

Business contact: **info@sequrin.tech**

## Product principles

- Detection produces investigative signals, not fraud verdicts.
- Suspicious activity requires investigation and context.
- Consequential decisions remain subject to accountable human and organisational processes.
- Sensitive integrity information should be governed, auditable, and available only to authorised users.

## Production source of truth

The React/TanStack Start application in `src/` is the source of truth for the public website.

Public pages are authored in `src/routes/*.tsx`. The production build prerenders those routes, and `scripts/publish-react-site.mjs` copies the prerendered client output into `docs/` for GitHub Pages.

This means copy, metadata, navigation and page structure should be changed in the React source only. Do not hand-edit generated HTML in `docs/`.

Regenerate and validate the public site with:

```bash
npm run build:static
npm run check:static-generated
npm run validate:static
```

GitHub Pages should remain configured to deploy from:

- Branch: `main`
- Folder: `/docs`

The `public/CNAME` file is copied into the build so the custom domain survives regeneration.

## Application stack

The public website uses:

- TypeScript
- React 19
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS

Development:

```bash
bun install
bun run dev
```

Production build:

```bash
bun run build
```

Node 22.12 or newer is required for the current Vite toolchain.

## Application boundary

This repository contains the **public Sequrin website**, not the authenticated Sequrin application or backend services.

Public website sign-in actions route to **https://app.sequrin.tech/sign-in**. The public site does not implement a second authentication system.

## Legacy static generator

`scripts/generate-public-site.mjs` and `scripts/apply-privacy-policy.mjs` are retained temporarily for history/reference only. They are no longer part of the production build path and should not receive new copy changes.

## Repository scope

The public product name is **Sequrin**. Legacy internal names from earlier stages of the wider product should not be introduced into this website.

## Status

Early-stage product website. Do not add fabricated customers, partnerships, certifications, deployment claims, performance statistics, testimonials, or regulatory approvals.
