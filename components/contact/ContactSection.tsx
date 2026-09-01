import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-pp-cream py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow className="mb-6">START A PROJECT</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="balance font-display text-4xl font-medium leading-[1.08] tracking-tight text-pp-charcoal sm:text-5xl">
              Tell Us About Your Project.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-pp-charcoal/65">
              Answer a few quick questions and we&rsquo;ll follow up with next
              steps. There&rsquo;s no obligation — just a clear picture of
              what&rsquo;s possible for your business.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
