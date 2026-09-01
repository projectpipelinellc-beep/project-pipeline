export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn how your business currently operates, where opportunities are being lost, and what needs to improve.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and develop the website, marketing system, automation, or digital infrastructure your business needs.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Once everything has been tested and approved, we put the system live.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We continue improving the system based on performance, feedback, and your business's evolving needs.",
  },
];

export type Differentiator = {
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Built Around Your Business",
    description:
      "No two businesses operate exactly the same. Our solutions are designed around your actual workflow and goals.",
  },
  {
    title: "Modern Technology",
    description:
      "We use modern development, marketing, and AI tools to create systems built for today's customers.",
  },
  {
    title: "One Connected Strategy",
    description:
      "Your website, marketing, advertising, and automation shouldn't operate independently.",
  },
  {
    title: "Built to Scale",
    description:
      "We create digital infrastructure that can evolve as your business grows.",
  },
];

export const comparison = {
  without: {
    label: "WITHOUT PROJECT PIPELINE",
    items: [
      "Outdated Website",
      "Missed Leads",
      "Manual Follow-Ups",
      "Inconsistent Social Media",
      "Disconnected Systems",
      "Hours of Repetitive Work",
    ],
  },
  with: {
    label: "WITH PROJECT PIPELINE",
    items: [
      "Modern Website",
      "Organized Lead Flow",
      "Automated Follow-Up",
      "Consistent Online Presence",
      "Connected Systems",
      "More Time for the Business",
    ],
  },
};
