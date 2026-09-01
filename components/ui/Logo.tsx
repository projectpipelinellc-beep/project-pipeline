import { cn } from "@/lib/utils";

/**
 * Temporary text-based wordmark for Project Pipeline. Replace the mark with
 * a final SVG logo when one is available — the component boundary keeps
 * that swap isolated to this file.
 */
export function Logo({
  className,
  dark = false,
  stacked = false,
}: {
  className?: string;
  dark?: boolean;
  stacked?: boolean;
}) {
  const textColor = dark ? "text-pp-cream-warm" : "text-pp-charcoal";

  return (
    <span
      className={cn(
        "group inline-flex select-none items-center gap-3 font-display",
        className
      )}
    >
      <svg
        width="30"
        height="14"
        viewBox="0 0 30 14"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="4" cy="7" r="3.5" className={dark ? "fill-pp-cream-warm" : "fill-pp-charcoal"} />
        <line
          x1="7.5"
          y1="7"
          x2="22.5"
          y2="7"
          stroke="#8B1E24"
          strokeWidth="1.6"
          strokeDasharray="1 3.4"
          strokeLinecap="round"
        />
        <circle cx="26" cy="7" r="3.5" className="fill-pp-red transition-transform duration-500 group-hover:scale-110" />
      </svg>
      <span
        className={cn(
          "font-semibold uppercase leading-none tracking-[0.08em]",
          textColor,
          stacked ? "flex flex-col text-sm" : "text-base"
        )}
      >
        {stacked ? (
          <>
            <span>Project</span>
            <span className="text-pp-red">Pipeline</span>
          </>
        ) : (
          <>
            Project <span className="text-pp-red">Pipeline</span>
          </>
        )}
      </span>
    </span>
  );
}
