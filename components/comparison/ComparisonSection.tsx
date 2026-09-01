"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Check, GripVertical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { comparison } from "@/data/process";

export function ComparisonSection() {
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  };

  return (
    <section className="bg-pp-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="THE DIFFERENCE"
            headline="See What Changes."
            className="balance"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-5 font-sans text-sm text-pp-charcoal/50">
            Drag the divider to compare.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            className="relative mt-10 h-[520px] w-full select-none overflow-hidden border border-pp-charcoal/10 sm:h-[420px]"
            onPointerMove={(e) => {
              if (e.buttons !== 1) return;
              updateFromClientX(e.clientX);
            }}
          >
            {/* WITH side (base layer) */}
            <div className="absolute inset-0 flex flex-col justify-center bg-pp-cream-warm p-8 sm:p-14">
              <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-pp-red">
                {comparison.with.label}
              </p>
              <ul className="space-y-4">
                {comparison.with.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-base font-medium text-pp-charcoal sm:text-lg">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pp-red/10 text-pp-red">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* WITHOUT side (clipped overlay) */}
            <div
              className="absolute inset-0 flex flex-col justify-center overflow-hidden bg-pp-charcoal p-8 sm:p-14"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-pp-cream-warm/40">
                {comparison.without.label}
              </p>
              <ul className="space-y-4">
                {comparison.without.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-base font-medium text-pp-cream-warm/70 sm:text-lg">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pp-cream-warm/10 text-pp-cream-warm/50">
                      <X size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider handle */}
            <motion.div
              className="absolute top-0 z-10 flex h-full w-px cursor-ew-resize items-center justify-center bg-pp-cream-warm/80"
              style={{ left: `${position}%` }}
              drag="x"
              dragConstraints={trackRef}
              dragElastic={0}
              dragMomentum={false}
              onDrag={(_, info) => updateFromClientX(info.point.x)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pp-charcoal/10 bg-pp-cream-warm text-pp-charcoal shadow-md">
                <GripVertical size={16} strokeWidth={2} />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
