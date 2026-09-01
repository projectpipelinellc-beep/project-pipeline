import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="bg-pp-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WHO WE WORK WITH"
            headline="Built for Businesses That Actually Build Things."
            className="balance"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-pp-charcoal/70">
            You don&rsquo;t need to become a marketing or technology expert.
            That&rsquo;s our job.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-pp-charcoal/10 bg-pp-charcoal/10 sm:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal
                key={industry.name}
                delay={i * 0.04}
                className="group flex flex-col items-center justify-center gap-4 bg-pp-cream-warm px-4 py-10 text-center transition-colors duration-300 hover:bg-pp-charcoal sm:py-12"
              >
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-pp-red transition-colors duration-300 group-hover:text-pp-red-light"
                />
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-pp-charcoal transition-colors duration-300 group-hover:text-pp-cream-warm">
                  {industry.name}
                </span>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
