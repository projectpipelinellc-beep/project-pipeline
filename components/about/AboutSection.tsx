import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-pp-cream-warm py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow className="mb-6">ABOUT PROJECT PIPELINE</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="balance font-display text-4xl font-medium leading-[1.08] tracking-tight text-pp-charcoal sm:text-5xl">
              Technology Should Make Running Your Business Easier.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-pp-charcoal/70">
            <p>
              Project Pipeline was created to help businesses take advantage
              of modern websites, digital marketing, and AI without having to
              figure everything out themselves.
            </p>
            <p>
              We identify where technology can make the biggest difference,
              build the system, and help connect the pieces.
            </p>
            <p>
              Whether that means launching a professional website, building
              an automated lead follow-up system, managing your online
              presence, or connecting all three, the goal remains the same:
            </p>
            <p className="font-display text-2xl font-medium text-pp-charcoal">
              Build a better pipeline for your business.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
