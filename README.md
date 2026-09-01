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
independent, clearly-labeled steps for:

- **Email notifications — wired up** (see below)
- CRM sync — stub
- Database storage — stub
- AI lead qualification — stub
- Automated SMS/email follow-up — stub

Fill in each remaining stub with a real integration as those services are
selected — the orchestration and API contract are already in place.

### Contact Form Email Notifications

Every submission is emailed to `company.email` (`data/company.ts`) using
[Resend](https://resend.com), with the sender's email set as the
Reply-To address so you can respond directly from your inbox. The email
template lives in `lib/email.ts`.

**Setup (~5 minutes):**

1. Create a free account at [resend.com](https://resend.com) (100
   emails/day, 3,000/month on the free tier — plenty for a contact form).
2. Create an API key in the Resend dashboard.
3. Add it as an environment variable named `RESEND_API_KEY`:
   - Locally: copy `.env.example` to `.env.local` and paste the key in.
   - On Vercel: Project Settings → Environment Variables → add
     `RESEND_API_KEY` → redeploy.
4. That's it — submissions will start emailing `company.email`. Leads are
   sent from Resend's shared `onboarding@resend.dev` address until you
   verify your own sending domain in Resend, at which point set the
   optional `EMAIL_FROM` environment variable (e.g.
   `Project Pipeline <leads@projectpipeline.co>`) to send from it instead.

If `RESEND_API_KEY` isn't set, the form still validates and submits
successfully — the email step is skipped with a warning in the server
logs, so nothing breaks in local development or before setup is complete.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Add the `RESEND_API_KEY` environment variable (see above) so contact
   form submissions email you. Add others once the remaining integrations
   in `lib/leads.ts` are implemented.
4. Set `company.url` in `data/company.ts` to the production domain before
   launch so canonical URLs, sitemap, and Open Graph metadata are correct.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — lint the project
- `npm run typecheck` — run the TypeScript compiler without emitting files
