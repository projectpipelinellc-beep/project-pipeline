import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const CardInner = (
    <div className="group flex flex-col overflow-hidden border border-pp-charcoal/10 bg-pp-cream-warm transition-colors duration-300 hover:border-pp-charcoal/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-pp-charcoal/5">
        {project.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.heroImage}
            alt={`${project.businessName} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-2xl font-medium text-pp-charcoal/15">
            {project.businessName}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-pp-red">
              {project.industry}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-medium text-pp-charcoal">
              {project.businessName}
            </h3>
          </div>
          {project.websiteUrl && (
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-pp-charcoal/40 transition-colors duration-300 group-hover:text-pp-red"
            />
          )}
        </div>
        <p className="font-sans text-sm leading-relaxed text-pp-charcoal/65">
          {project.description}
        </p>
        <div className="mt-1 flex flex-wrap gap-2">
          {project.servicesProvided.map((service) => (
            <span
              key={service}
              className="rounded-full border border-pp-charcoal/15 px-3 py-1 font-sans text-[11px] font-medium text-pp-charcoal/60"
            >
              {service}
            </span>
          ))}
        </div>
        {project.results && project.results.length > 0 && (
          <ul className="mt-2 space-y-1 border-t border-pp-charcoal/10 pt-3">
            {project.results.map((result) => (
              <li key={result} className="font-sans text-sm text-pp-charcoal/75">
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  if (project.websiteUrl) {
    return (
      <a
        href={project.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.businessName}'s website`}
      >
        {CardInner}
      </a>
    );
  }

  return CardInner;
}
