import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AutomationDemo } from "./AutomationDemo";

export function AIAutomationShowcase() {
  return (
    <section className="relative overflow-hidden bg-pp-charcoal py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-pp-red/10 blur-3xl"
      />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow dark className="mb-6">AI AUTOMATION</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-pp-cream-warm sm:text-5xl md:text-[3.4rem]">
              What if your business kept working after you stopped?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-pp-cream-warm/60">
              Project Pipeline creates custom automation systems designed
              around how your business actually operates.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 font-display text-xl font-medium text-pp-red-light">
              That entire process can happen automatically.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href="/#contact" variant="primary" size="lg">
                See What We Can Automate
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <AutomationDemo />
        </Reveal>
      </Container>
    </section>
  );
}
