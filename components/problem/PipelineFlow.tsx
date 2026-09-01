"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Eye,
  Globe,
  UserPlus,
  Cpu,
  MessageCircle,
  Handshake,
} from "lucide-react";

const stages = [
  { label: "Visibility", icon: Eye },
  { label: "Website", icon: Globe },
  { label: "Lead", icon: UserPlus },
  { label: "Automation", icon: Cpu },
  { label: "Follow-Up", icon: MessageCircle },
  { label: "Customer", icon: Handshake },
];

export function PipelineFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 60%"],
  });
  const widthPercent = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="w-full">
      {/* Desktop: horizontal scroll-linked flow */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-7 h-px bg-pp-charcoal/10" />
        <motion.div
          style={{ width: widthPercent }}
          className="absolute left-0 top-7 h-px bg-pp-red"
        />
        <div className="relative grid grid-cols-6 gap-4">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="z-10 flex h-14 w-14 items-center justify-center rounded-full border border-pp-charcoal/15 bg-pp-cream-warm text-pp-red shadow-sm"
                >
                  <Icon size={22} strokeWidth={1.75} />
                </motion.div>
                <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-charcoal/70">
                  {stage.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: simple vertical flow */}
      <div className="flex flex-col md:hidden">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          const isLast = i === stages.length - 1;
          return (
            <div key={stage.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-pp-charcoal/15 bg-pp-cream-warm text-pp-red">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                {!isLast && <div className="h-8 w-px bg-pp-charcoal/15" />}
              </div>
              <p className={`pt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-pp-charcoal/70 ${isLast ? "" : "pb-4"}`}>
                {stage.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
