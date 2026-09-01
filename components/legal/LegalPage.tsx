import type { ReactNode } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-pp-cream-warm pb-28 pt-40 sm:pt-48">
        <Container className="max-w-3xl">
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl font-medium tracking-tight text-pp-charcoal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-sans text-sm text-pp-charcoal/45">
            Last updated: {updated}
          </p>

          <div className="prose-legal mt-12 space-y-8 font-sans text-base leading-relaxed text-pp-charcoal/75">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
