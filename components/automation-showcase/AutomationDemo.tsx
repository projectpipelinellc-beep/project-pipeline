"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileEdit,
  BrainCircuit,
  ListTodo,
  MailCheck,
  BellRing,
  CalendarClock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  { label: "Customer Submits Website Form", icon: FileEdit },
  { label: "AI Reads Request", icon: BrainCircuit },
  { label: "Lead Is Organized", icon: ListTodo },
  { label: "Customer Receives Response", icon: MailCheck },
  { label: "Owner Is Notified", icon: BellRing },
  { label: "Follow-Up Is Scheduled", icon: CalendarClock },
];

export function AutomationDemo() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? nodes.length - 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % (nodes.length + 2));
    }, 900);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <div className="w-full rounded-sm border border-pp-cream-warm/10 bg-white/[0.02] p-6 sm:p-10">
      <div className="flex flex-col">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isLast = i === nodes.length - 1;
          const isActive = i <= active;
          return (
            <div key={node.label} className="relative flex gap-5">
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{
                    borderColor: isActive ? "#8B1E24" : "rgba(245,240,232,0.15)",
                    backgroundColor: isActive ? "#8B1E24" : "rgba(245,240,232,0.03)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.75}
                    className={cn(
                      "transition-colors duration-300",
                      isActive ? "text-pp-cream-warm" : "text-pp-cream-warm/35"
                    )}
                  />
                </motion.div>
                {!isLast && (
                  <div className="relative h-10 w-px bg-pp-cream-warm/10">
                    <motion.div
                      animate={{ height: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-x-0 top-0 bg-pp-red"
                    />
                  </div>
                )}
              </div>
              <p
                className={cn(
                  "pt-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-300 sm:text-base",
                  isLast ? "" : "pb-8",
                  isActive ? "text-pp-cream-warm" : "text-pp-cream-warm/35"
                )}
              >
                {node.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
