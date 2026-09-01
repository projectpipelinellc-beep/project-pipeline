export type Service = {
  id: string;
  number: string;
  eyebrow: string;
  shortLabel: string;
  headline: string;
  copy: string;
  capabilities: string[];
  ctaLabel: string;
  ctaHref: string;
  visual: "website" | "automation" | "social" | "advertising" | "strategy";
};

export const services: Service[] = [
  {
    id: "website-design-development",
    number: "01",
    eyebrow: "WEBSITE DESIGN & DEVELOPMENT",
    shortLabel: "Web Development",
    headline: "Websites Built to Convert",
    copy: "We design fast, modern, mobile-first websites built around one goal: turning visitors into customers.",
    capabilities: [
      "Custom Website Design",
      "Website Development",
      "Mobile Optimization",
      "Conversion Optimization",
      "Contact & Lead Forms",
      "Local SEO Foundations",
      "Website Redesigns",
      "Ongoing Website Management",
    ],
    ctaLabel: "BUILD MY WEBSITE",
    ctaHref: "/#contact",
    visual: "website",
  },
  {
    id: "ai-automation",
    number: "02",
    eyebrow: "AI AUTOMATION",
    shortLabel: "AI Automation",
    headline: "Put Repetitive Work on Autopilot",
    copy: "We build custom AI-powered workflows that reduce repetitive tasks, improve response times, organize information, and help businesses operate more efficiently.",
    capabilities: [
      "Lead Follow-Up",
      "Customer Intake",
      "Estimate Follow-Up",
      "Appointment Reminders",
      "Internal Workflows",
      "Customer Communication",
      "Work-Order Processing",
      "Data Organization",
    ],
    ctaLabel: "AUTOMATE MY BUSINESS",
    ctaHref: "/#contact",
    visual: "automation",
  },
  {
    id: "social-media-marketing",
    number: "03",
    eyebrow: "SOCIAL MEDIA MARKETING",
    shortLabel: "Social Media Marketing",
    headline: "Stay Visible Without Living on Social Media",
    copy: "Build a consistent, professional social presence that keeps your business in front of the people most likely to become customers.",
    capabilities: [
      "Account Setup & Optimization",
      "Content Strategy",
      "Content Planning",
      "Post Creation",
      "Social Media Management",
      "Brand Consistency",
      "Performance Reporting",
    ],
    ctaLabel: "GROW MY PRESENCE",
    ctaHref: "/#contact",
    visual: "social",
  },
  {
    id: "paid-advertising",
    number: "04",
    eyebrow: "GOOGLE & META ADVERTISING",
    shortLabel: "Paid Advertising",
    headline: "Turn Attention Into Opportunities",
    copy: "We create and manage targeted advertising campaigns designed to put your business in front of potential customers when it matters.",
    capabilities: [
      "Google Ads",
      "Meta Ads",
      "Campaign Setup",
      "Audience Targeting",
      "Landing Pages",
      "Lead Generation",
      "Campaign Optimization",
      "Reporting",
    ],
    ctaLabel: "LAUNCH A CAMPAIGN",
    ctaHref: "/#contact",
    visual: "advertising",
  },
  {
    id: "digital-strategy",
    number: "05",
    eyebrow: "DIGITAL STRATEGY",
    shortLabel: "Digital Strategy",
    headline: "Connect the Entire System",
    copy: "A great website, strong marketing, and automation become significantly more valuable when they work together.",
    capabilities: [
      "Digital Strategy Audits",
      "Systems Mapping",
      "Tool & Platform Integration",
      "Lead Flow Design",
      "Reporting & Visibility",
      "Ongoing Strategic Guidance",
    ],
    ctaLabel: "CONNECT MY SYSTEMS",
    ctaHref: "/#contact",
    visual: "strategy",
  },
];
