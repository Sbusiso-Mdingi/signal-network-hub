# Sequrin Public Website

Public marketing website for **Sequrin**, pronounced “Securing”, representing **Secure Integrity Network**.

Sequrin is an early-stage healthcare claims-integrity technology product being developed to help medical schemes and authorised claims-integrity teams surface investigative signals, understand connected activity, and support governed investigations without treating analytical output as an automated fraud verdict.

## Public site

The intended production domain is **https://sequrin.tech**.

Current route structure:

- `/` public overview
- `/product` product capabilities
- `/how-it-works` governed workflow
- `/impact` wider healthcare-resource and capability impact
- `/for-medical-schemes` medical-scheme value and operating fit
- `/governance` human oversight, safety and access principles
- `/network` Secure Integrity Network vision
- `/about` company, product philosophy, and founder information
- `/policies` reserved privacy, terms and security policy anchors
- `/login` compatibility redirect to `https://app.sequrin.tech/sign-in`

Business contact: **info@sequrin.tech**

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

## Application boundary

This repository contains the **public Sequrin website**, not the authenticated Sequrin application or backend services.

Public website sign-in actions route to **https://app.sequrin.tech/sign-in**. The public site does not implement a second authentication system.

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

Static prerendering is enabled in `vite.config.ts` for future build-based static deployment if needed.

## Repository scope

The public product name is **Sequrin**. Legacy internal names from earlier stages of the wider product should not be introduced into this website.

## Status

Early-stage product website. Do not add fabricated customers, partnerships, certifications, deployment claims, performance statistics, testimonials, or regulatory approvals.
