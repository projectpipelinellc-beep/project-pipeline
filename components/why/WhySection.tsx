import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/data/process";

export function WhySection() {
  return (
    <section className="bg-pp-cream-warm py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            headline="We Don't Sell Random Services. We Build Systems."
            className="balance max-w-4xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-pp-charcoal/10 bg-pp-charcoal/10 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="bg-pp-cream-warm p-8 sm:p-10"
            >
              <span className="font-display text-3xl font-medium text-pp-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-pp-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-pp-charcoal/65">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
