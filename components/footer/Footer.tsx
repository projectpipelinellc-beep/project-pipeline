import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { GoogleIcon } from "@/components/ui/icons/GoogleIcon";
import { company } from "@/data/company";
import { navLinks } from "@/data/nav";
import { services } from "@/data/services";

const socialIcons = [
  { key: "instagram", label: "Instagram", Icon: Instagram, href: company.social.instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook, href: company.social.facebook },
  { key: "google", label: "Google", Icon: GoogleIcon, href: company.social.google },
] as const;

export function Footer() {
  return (
    <footer className="bg-pp-charcoal text-pp-cream-warm">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs font-display text-lg font-medium text-pp-red-light">
              Build. Automate. Grow.
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-pp-cream-warm/50">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-cream-warm/40">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-pp-cream-warm/70 transition-colors hover:text-pp-red-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-cream-warm/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services
                .filter((service) => service.id !== "digital-strategy")
                .map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/#${service.id}`}
                      className="font-sans text-sm text-pp-cream-warm/70 transition-colors hover:text-pp-red-light"
                    >
                      {service.shortLabel}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-cream-warm/40">
              Connect
            </h3>
            <div className="mt-5 flex gap-3">
              {socialIcons.map(({ key, label, Icon, href }) => {
                if (!href) {
                  return (
                    <span
                      key={key}
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-pp-cream-warm/10 text-pp-cream-warm/25"
                      title={`${label} — coming soon`}
                    >
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                  );
                }
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-pp-cream-warm/15 text-pp-cream-warm/70 transition-colors hover:border-pp-red-light hover:text-pp-red-light"
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="mt-6 block font-sans text-sm text-pp-cream-warm/70 transition-colors hover:text-pp-red-light"
              >
                {company.email}
              </a>
            )}
            {company.phone && (
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="mt-2 block font-sans text-sm text-pp-cream-warm/70 transition-colors hover:text-pp-red-light"
              >
                {company.phone}
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-pp-cream-warm/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-pp-cream-warm/40">
            &copy; {company.copyrightYear} {company.name}. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-sans text-xs text-pp-cream-warm/40 transition-colors hover:text-pp-cream-warm/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-sans text-xs text-pp-cream-warm/40 transition-colors hover:text-pp-cream-warm/70"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
