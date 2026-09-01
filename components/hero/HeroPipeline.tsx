"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, UserPlus, MessageCircle, Handshake } from "lucide-react";

const stages = [
  { label: "Website", icon: Globe },
  { label: "Lead", icon: UserPlus },
  { label: "Follow-Up", icon: MessageCircle },
  { label: "Customer", icon: Handshake },
];

export function HeroPipeline() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-sm border border-pp-charcoal/10 bg-pp-cream-warm/60 p-6 shadow-[0_1px_0_rgba(23,23,23,0.05)] backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-pp-charcoal/50">
          Live System
        </span>
        <span className="flex h-2 w-2 rounded-full bg-pp-red animate-pulse-dot" />
      </div>

      <div className="relative flex flex-col">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          const isLast = i === stages.length - 1;
          return (
            <div key={stage.label} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pp-charcoal/15 bg-pp-cream-warm text-pp-red"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </motion.div>
                {!isLast && (
                  <div className="relative h-10 w-px overflow-hidden bg-pp-charcoal/10">
                    {!reduce && (
                      <motion.div
                        className="absolute inset-x-0 top-0 h-4 bg-pp-red"
                        animate={{ y: ["-16px", "40px"] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          repeatDelay: 1.2,
                          ease: "easeInOut",
                          delay: i * 0.4,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className={isLast ? "pb-0 pt-2.5" : "pb-8 pt-2.5"}>
                <p className="font-display text-lg font-medium text-pp-charcoal">
                  {stage.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
