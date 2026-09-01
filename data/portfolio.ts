/**
 * Portfolio / selected work data.
 *
 * Add real projects here as they become available. Each entry supports
 * before/after imagery and measured results, but only fields that are
 * populated will render — nothing here is fabricated.
 *
 * When this array is empty, the portfolio section automatically renders a
 * tasteful "Projects coming soon" state instead of an empty section.
 */

export type PortfolioProject = {
  id: string;
  businessName: string;
  industry: string;
  heroImage?: string;
  servicesProvided: string[];
  description: string;
  websiteUrl?: string;
  beforeImage?: string;
  afterImage?: string;
  results?: string[];
};

export const portfolioProjects: PortfolioProject[] = [];
