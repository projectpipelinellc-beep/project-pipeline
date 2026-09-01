import { cn } from "@/lib/utils";

export function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center justify-between border px-5 py-4 text-left font-sans text-sm font-medium transition-all duration-200 ease-premium sm:text-base",
        selected
          ? "border-pp-red bg-pp-red text-pp-cream-warm"
          : "border-pp-charcoal/15 bg-pp-cream-warm text-pp-charcoal hover:border-pp-charcoal/40"
      )}
    >
      {label}
      <span
        className={cn(
          "ml-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
          selected ? "border-pp-cream-warm bg-pp-cream-warm" : "border-pp-charcoal/25"
        )}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-pp-red" />}
      </span>
    </button>
  );
}
