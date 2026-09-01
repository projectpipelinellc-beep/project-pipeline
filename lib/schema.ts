import { company } from "@/data/company";

/**
 * Structured data (JSON-LD) helpers. Centralized so schema stays in sync
 * with the editable business information in /data/company.ts.
 */

export function getOrganizationSchema() {
  const sameAs = Object.values(company.social).filter(
    (v): v is string => Boolean(v)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${company.url}/#organization`,
    name: company.name,
    url: company.url,
    description: company.metaDescription,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(company.email ? { email: company.email } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
  };
}

export function getProfessionalServiceSchema() {
  const address = company.address
    ? {
        "@type": "PostalAddress",
        streetAddress: company.address.streetAddress,
        addressLocality: company.address.addressLocality,
        addressRegion: company.address.addressRegion,
        postalCode: company.address.postalCode,
        addressCountry: company.address.addressCountry,
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${company.url}/#service`,
    name: company.name,
    url: company.url,
    description: company.metaDescription,
    priceRange: "$$",
    ...(address ? { address } : {}),
    ...(company.email ? { email: company.email } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design & Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google & Meta Advertising",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Digital Strategy" },
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.url}/#website`,
    url: company.url,
    name: company.name,
    publisher: { "@id": `${company.url}/#organization` },
  };
}
