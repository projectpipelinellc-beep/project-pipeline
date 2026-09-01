import { Circle } from "lucide-react";

export function WebsiteVisual() {
  return (
    <div className="w-full overflow-hidden rounded-sm border border-pp-charcoal/10 bg-pp-cream-warm shadow-[0_20px_60px_-30px_rgba(23,23,23,0.35)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-pp-charcoal/10 bg-pp-cream px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pp-charcoal/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-pp-charcoal/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-pp-charcoal/15" />
        </div>
        <div className="ml-3 flex h-6 flex-1 items-center rounded-sm bg-pp-cream-warm px-3 font-sans text-[11px] text-pp-charcoal/40">
          yourbusiness.com
        </div>
      </div>

      {/* Fictional site content */}
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-20 rounded-full bg-pp-charcoal/70" />
          <div className="flex gap-3">
            <div className="h-2 w-10 rounded-full bg-pp-charcoal/15" />
            <div className="h-2 w-10 rounded-full bg-pp-charcoal/15" />
            <div className="h-7 w-20 rounded-sm bg-pp-red" />
          </div>
        </div>

        <div className="space-y-2.5 border-t border-pp-charcoal/10 pt-6">
          <div className="h-3.5 w-3/4 rounded-full bg-pp-charcoal/80" />
          <div className="h-3.5 w-1/2 rounded-full bg-pp-charcoal/80" />
          <div className="h-2 w-2/3 rounded-full bg-pp-charcoal/20" />
        </div>

        <div className="flex gap-3 pt-1">
          <div className="h-8 w-28 rounded-sm bg-pp-red" />
          <div className="h-8 w-28 rounded-sm border border-pp-charcoal/20" />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-sm border border-pp-charcoal/10 bg-pp-cream"
            >
              <Circle size={14} className="text-pp-red" strokeWidth={1.5} />
              <div className="h-1.5 w-8 rounded-full bg-pp-charcoal/15" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
