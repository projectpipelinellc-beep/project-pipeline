import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WebsiteVisual } from "./visuals/WebsiteVisual";
import { AutomationVisual } from "./visuals/AutomationVisual";
import { SocialVisual } from "./visuals/SocialVisual";
import { AdvertisingVisual } from "./visuals/AdvertisingVisual";
import { StrategyVisual } from "./visuals/StrategyVisual";

const visualMap = {
  website: WebsiteVisual,
  automation: AutomationVisual,
  social: SocialVisual,
  advertising: AdvertisingVisual,
  strategy: StrategyVisual,
};

export function ServiceCard({
  service,
  reversed,
}: {
  service: Service;
  reversed?: boolean;
}) {
  const Visual = visualMap[service.visual];

  return (
    <div
      id={service.id}
      className="grid gap-10 border-t border-pp-charcoal/10 py-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20"
    >
      <Reveal className={reversed ? "lg:order-2" : ""}>
        <span className="font-display text-sm font-medium text-pp-red">
          {service.number}
        </span>
        <p className="mb-4 mt-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-pp-charcoal/45">
          {service.eyebrow}
        </p>
        <h3 className="balance font-display text-3xl font-medium leading-tight tracking-tight text-pp-charcoal sm:text-4xl">
          {service.headline}
        </h3>
        <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-pp-charcoal/70">
          {service.copy}
        </p>

        <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {service.capabilities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 font-sans text-sm text-pp-charcoal/75"
            >
              <Check size={15} className="mt-0.5 shrink-0 text-pp-red" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9">
          <Button href={service.ctaHref} size="md">
            {service.ctaLabel}
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
        <Visual />
      </Reveal>
    </div>
  );
}
