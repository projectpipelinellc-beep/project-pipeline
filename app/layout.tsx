import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/data/company";
import {
  getOrganizationSchema,
  getProfessionalServiceSchema,
  getWebSiteSchema,
} from "@/lib/schema";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Project Pipeline | Websites, AI Automation & Digital Marketing",
    template: `%s | ${company.name}`,
  },
  description: company.metaDescription,
  keywords: [
    "web design",
    "web development",
    "AI automation",
    "social media marketing",
    "Google Ads",
    "Meta Ads",
    "digital marketing agency",
    "small business websites",
    "business automation",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: company.url,
    siteName: company.name,
    title: "Project Pipeline | Websites, AI Automation & Digital Marketing",
    description: company.metaDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Pipeline | Websites, AI Automation & Digital Marketing",
    description: company.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#8B1E24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [
    getOrganizationSchema(),
    getProfessionalServiceSchema(),
    getWebSiteSchema(),
  ];

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
