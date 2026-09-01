import { Heart, MessageCircle, Repeat2 } from "lucide-react";

export function SocialVisual() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-sm border border-pp-charcoal/10 bg-pp-cream-warm shadow-[0_20px_60px_-35px_rgba(23,23,23,0.35)]"
        >
          <div
            className={`flex aspect-square items-center justify-center ${
              i % 2 === 0 ? "bg-pp-charcoal" : "bg-pp-red"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pp-cream-warm/25">
              <span className="h-2 w-2 rounded-full bg-pp-cream-warm/70" />
            </div>
          </div>
          <div className="space-y-2 p-3">
            <div className="h-1.5 w-3/4 rounded-full bg-pp-charcoal/15" />
            <div className="flex items-center gap-3 pt-1 text-pp-charcoal/30">
              <Heart size={13} strokeWidth={1.75} />
              <MessageCircle size={13} strokeWidth={1.75} />
              <Repeat2 size={13} strokeWidth={1.75} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
