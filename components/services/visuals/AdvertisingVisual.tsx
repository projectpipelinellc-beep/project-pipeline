import { Target } from "lucide-react";

export function AdvertisingVisual() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-sm border border-pp-charcoal/10 bg-pp-cream-warm p-10 shadow-[0_20px_60px_-30px_rgba(23,23,23,0.35)] sm:p-14">
      <div className="relative flex h-56 w-56 items-center justify-center">
        {[0, 1, 2].map((ring) => (
          <span
            key={ring}
            className="absolute rounded-full border border-pp-red/20"
            style={{
              inset: `${ring * 28}px`,
            }}
          />
        ))}
        <div className="absolute inset-[84px] rounded-full border border-pp-red/40" />
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pp-red text-pp-cream-warm">
          <Target size={18} strokeWidth={1.75} />
        </div>

        {[
          { top: "6%", left: "18%" },
          { top: "22%", left: "78%" },
          { top: "72%", left: "12%" },
          { top: "82%", left: "68%" },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-pp-charcoal/50"
            style={pos}
          />
        ))}
      </div>
    </div>
  );
}
