# Sequrin Public Website

Public marketing website for **Sequrin**, pronounced “Securing”, representing **Secure Integrity Network**.

Sequrin is an early-stage healthcare claims-integrity technology product being developed to help medical schemes and authorised claims-integrity teams surface investigative signals, understand connected activity, and support governed investigations without treating analytical output as an automated fraud verdict.

## Public site

The intended production domain is **https://sequrin.tech**.

Routes:

- `/` product overview
- `/about` company, product philosophy, and founder information
- `/login` application sign-in entry point, currently unavailable while the application environment is offline

Business contact: **sbusiso@sequrin.tech**

## Product principles

- Detection produces investigative signals, not fraud verdicts.
- Suspicious activity requires investigation and context.
- Consequential decisions remain subject to accountable human and organisational processes.
- Sensitive integrity information should be governed, auditable, and available only to authorised users.

## GitHub Pages

The `docs/` directory contains the deployment-ready static version of the public website. It uses relative asset and navigation paths so it can be served from the repository's GitHub Pages project URL during verification and from `sequrin.tech` after the custom domain is connected.

GitHub Pages should be configured to deploy from:

- Branch: `main`
- Folder: `/docs`

The custom domain should only be configured after the GitHub Pages deployment has been verified.

## Application source

The original Lovable-generated application source remains in the repository and uses:

- TypeScript
- React 19
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS

Local development:

```bash
bun install
bun run dev
```

Production build:

```bash
bun run build
```

Static prerendering is also enabled in `vite.config.ts` for future build-based static deployment if needed.

## Repository scope

This repository contains the **public Sequrin website**, not the full Sequrin claims-integrity application or backend services.

The public product name is **Sequrin**. Legacy internal names from earlier stages of the wider product should not be introduced into this website.

## Status

Early-stage product website. Do not add fabricated customers, partnerships, certifications, deployment claims, performance statistics, testimonials, or regulatory approvals.
