"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SuccessScreen() {
  return (
    <div className="flex flex-col items-center px-4 py-14 text-center sm:py-16">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-pp-red"
      >
        <motion.svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="#FCFAF6"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          />
        </motion.svg>
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-pp-red"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 balance font-display text-3xl font-medium text-pp-charcoal sm:text-4xl"
      >
        Your Project Is In The Pipeline.
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 max-w-md font-sans text-base leading-relaxed text-pp-charcoal/65"
      >
        Thanks for reaching out. We&rsquo;ve received your project
        information and will review what you&rsquo;re looking to accomplish.
        We&rsquo;ll be in touch shortly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-9"
      >
        <Button href="/" size="md">
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
