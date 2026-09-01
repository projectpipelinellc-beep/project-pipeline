import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PipelineFlow } from "./PipelineFlow";

export function ProblemSection() {
  return (
    <section className="relative border-y border-pp-charcoal/10 bg-pp-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow className="mb-6">THE PROBLEM</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="balance max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-pp-charcoal sm:text-5xl md:text-6xl">
            Most businesses don&rsquo;t need more software.
            <br className="hidden sm:block" /> They need{" "}
            <span className="text-pp-red">better systems.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-pp-charcoal/70">
            Businesses lose opportunities every day because of outdated
            websites, inconsistent marketing, slow follow-up, disconnected
            tools, and repetitive manual processes. Project Pipeline brings
            those pieces together.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-20 max-w-3xl font-display text-2xl font-medium leading-snug text-pp-charcoal sm:text-3xl">
            We build the pipeline that connects your business to growth.
          </p>
        </Reveal>

        <div className="mt-16">
          <PipelineFlow />
        </div>
      </Container>
    </section>
  );
}
