# Project Pipeline — Website

Production website for Project Pipeline, built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Business Content

All editable business information lives in `/data`:

- `company.ts` — name, tagline, email, phone, address, domain, social links
- `nav.ts` — navigation links and primary CTA
- `services.ts` — the five core services, capabilities, and CTAs
- `portfolio.ts` — client projects (leave empty to show "Projects Coming Soon")
- `industries.ts` — target industries shown in the "Who We Work With" section
- `process.ts` — process steps, differentiators, and before/after comparison
- `contact-form.ts` — project type, budget, and industry options for the form

No component code needs to change to update copy, links, or lead capture
options — edit the relevant file in `/data`.

## Contact Form Backend

The multi-step contact form posts to `app/api/contact/route.ts`, which
validates the submission and hands it to `lib/leads.ts`. That file contains
independent, clearly-labeled stub functions for:

- Email notifications
- CRM sync
- Database storage
- AI lead qualification
- Automated SMS/email follow-up

Fill in each function with a real integration as those services are
selected — the orchestration and API contract are already in place.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. No environment variables are required for the base site. Add any once
   the integrations in `lib/leads.ts` are implemented.
4. Set `company.url` in `data/company.ts` to the production domain before
   launch so canonical URLs, sitemap, and Open Graph metadata are correct.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — lint the project
- `npm run typecheck` — run the TypeScript compiler without emitting files
