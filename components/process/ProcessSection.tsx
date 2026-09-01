"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineWidth = useTransform(scrollYProgress, (v) => `${Math.min(v, 1) * 100}%`);

  return (
    <section id="process" className="border-y border-pp-charcoal/10 bg-pp-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="HOW IT WORKS" headline="From Problem to Pipeline." />
        </Reveal>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-pp-charcoal/10 md:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-6 hidden h-px bg-pp-red md:block"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-pp-charcoal/15 bg-pp-cream-warm font-display text-sm font-medium text-pp-red md:relative md:z-10">
                  {step.number}
                </div>
                <h3 className="font-display text-2xl font-medium text-pp-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-pp-charcoal/65">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
