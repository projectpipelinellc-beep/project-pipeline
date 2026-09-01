import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em]",
        dark ? "text-pp-red-light" : "text-pp-red",
        className
      )}
    >
      <span className={cn("h-px w-8", dark ? "bg-pp-red-light" : "bg-pp-red")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  headline,
  headlineClassName,
  dark = false,
  className,
}: {
  eyebrow?: string;
  headline: ReactNode;
  headlineClassName?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <Eyebrow dark={dark} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
          dark ? "text-pp-cream-warm" : "text-pp-charcoal",
          headlineClassName
        )}
      >
        {headline}
      </h2>
    </div>
  );
}
