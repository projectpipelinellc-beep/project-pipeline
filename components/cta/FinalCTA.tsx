import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-pp-red py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern-dark bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 h-[380px] w-[380px] rounded-full bg-pp-red-darker/40 blur-3xl"
      />

      <Container className="relative text-center">
        <Reveal className="flex justify-center">
          <Eyebrow dark className="mb-6 justify-center text-pp-cream-warm/80">
            READY TO BUILD?
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="balance mx-auto max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-pp-cream-warm sm:text-5xl md:text-6xl">
            Your Business Already Has Potential. Let&rsquo;s Build the
            Pipeline.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-xl font-sans text-lg leading-relaxed text-pp-cream-warm/75">
            Tell us what&rsquo;s slowing your business down, and we&rsquo;ll
            show you what can be improved.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/#contact"
              size="lg"
              className="bg-pp-cream-warm text-pp-red hover:bg-pp-cream"
            >
              Start Your Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              size="lg"
              className="border-pp-cream-warm/40 text-pp-cream-warm hover:border-pp-cream-warm hover:bg-pp-cream-warm hover:text-pp-red"
            >
              Book a Discovery Call
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
