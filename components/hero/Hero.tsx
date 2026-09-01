"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HeroPipeline } from "./HeroPipeline";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-pp-cream-warm pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-16 h-[420px] w-[420px] rounded-full bg-pp-red/[0.06] blur-3xl"
      />

      <Container className="relative grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <div>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <Eyebrow className="mb-7">DIGITAL SYSTEMS FOR MODERN BUSINESSES</Eyebrow>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="balance font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-pp-charcoal sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            Build Better.
            <br />
            <span className="text-pp-red">Automate More.</span>
            <br />
            Grow Faster.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-xl text-balance font-sans text-lg leading-relaxed text-pp-charcoal/70 sm:text-xl"
          >
            Project Pipeline builds websites, marketing systems, and AI-powered
            automations that help businesses attract more customers, eliminate
            repetitive work, and operate more efficiently.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/#contact" size="lg">
              Start a Project
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
            <Button href="/#services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-pp-charcoal/45"
          >
            <span>Web Development</span>
            <span className="text-pp-red">/</span>
            <span>AI Automation</span>
            <span className="text-pp-red">/</span>
            <span>Social Media</span>
            <span className="text-pp-red">/</span>
            <span>Paid Advertising</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <HeroPipeline />
        </motion.div>
      </Container>
    </section>
  );
}
