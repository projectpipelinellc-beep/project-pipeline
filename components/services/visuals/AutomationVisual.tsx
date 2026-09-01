"use client";

import { motion } from "framer-motion";
import { Inbox, Bot, Database, Send, CalendarCheck } from "lucide-react";

const nodes = [
  { label: "New Lead", icon: Inbox },
  { label: "AI Qualification", icon: Bot },
  { label: "CRM", icon: Database },
  { label: "Automatic Follow-Up", icon: Send },
  { label: "Appointment", icon: CalendarCheck },
];

export function AutomationVisual() {
  return (
    <div className="w-full rounded-sm border border-pp-charcoal/10 bg-pp-cream-warm p-6 shadow-[0_20px_60px_-30px_rgba(23,23,23,0.35)] sm:p-8">
      <div className="flex flex-col">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isLast = i === nodes.length - 1;
          return (
            <div key={node.label} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0.3, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pp-charcoal/15 bg-pp-cream text-pp-red"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </motion.div>
                {!isLast && <div className="h-9 w-px bg-pp-charcoal/15" />}
              </div>
              <div className={isLast ? "pt-2.5" : "pb-7 pt-2.5"}>
                <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-pp-charcoal/80">
                  {node.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
