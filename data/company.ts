/**
 * Centralized business information for Project Pipeline.
 *
 * Edit this file to update contact details, social links, and site-wide
 * copy without touching component code.
 */

export const company = {
  name: "Project Pipeline",
  legalName: "Project Pipeline",
  tagline: "Build. Automate. Grow.",
  shortDescription:
    "Project Pipeline builds websites, marketing systems, and AI-powered automations that help businesses attract more customers, eliminate repetitive work, and operate more efficiently.",
  metaDescription:
    "Project Pipeline builds professional websites, AI automation systems, social media strategies, and digital marketing solutions for modern businesses.",

  // Set these once real values are available. Leave null to hide from the UI
  // (footer, contact page, structured data) until configured.
  email: "hello@projectpipeline.co" as string | null,
  phone: null as string | null,

  // Populate when a physical service area should be published. Leaving this
  // null means the site will not claim a location or service area.
  address: null as {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  } | null,

  // Set the production domain here once available; used for canonical URLs,
  // sitemap generation, and Open Graph metadata.
  url: "https://www.projectpipeline.co",

  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    linkedin: null as string | null,
  },

  founded: "2025",
  copyrightYear: "2026",
} as const;

export type Company = typeof company;
