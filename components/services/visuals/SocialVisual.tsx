import { Heart, MessageCircle, Repeat2, Instagram, Facebook } from "lucide-react";
import { GoogleIcon } from "@/components/ui/icons/GoogleIcon";

const platforms = [
  { key: "instagram", label: "Instagram", Icon: Instagram, bg: "bg-pp-charcoal" },
  { key: "facebook", label: "Facebook", Icon: Facebook, bg: "bg-pp-red" },
  { key: "google", label: "Google", Icon: GoogleIcon, bg: "bg-pp-charcoal" },
];

export function SocialVisual() {
  return (
    <div className="grid w-full grid-cols-3 gap-3">
      {platforms.map(({ key, label, Icon, bg }) => (
        <div
          key={key}
          className="flex flex-col overflow-hidden rounded-sm border border-pp-charcoal/10 bg-pp-cream-warm shadow-[0_20px_60px_-35px_rgba(23,23,23,0.35)]"
        >
          <div className={`flex aspect-square items-center justify-center ${bg}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pp-cream-warm/25 text-pp-cream-warm">
              <Icon size={18} strokeWidth={1.75} />
            </div>
          </div>
          <div className="space-y-2 p-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-pp-charcoal/50">
              {label}
            </p>
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
