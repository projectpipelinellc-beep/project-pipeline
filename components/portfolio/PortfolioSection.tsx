import { ArrowRight, Hammer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioProjects } from "@/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

export function PortfolioSection() {
  const hasProjects = portfolioProjects.length > 0;

  return (
    <section id="work" className="bg-pp-cream-warm py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading eyebrow="OUR WORK" headline="Selected Work" />
          </Reveal>
          {hasProjects && (
            <Reveal delay={0.05}>
              <Button href="/#contact" variant="ghost" size="md" className="px-0">
                Start Your Project
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Reveal>
          )}
        </div>

        {hasProjects ? (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.06}>
                <PortfolioCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.08}>
            <div className="mt-14 flex flex-col items-center justify-center gap-5 border border-dashed border-pp-charcoal/20 bg-pp-cream px-8 py-20 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pp-charcoal/15 bg-pp-cream-warm text-pp-red">
                <Hammer size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-medium text-pp-charcoal">
                Projects Coming Soon
              </h3>
              <p className="max-w-md font-sans text-sm leading-relaxed text-pp-charcoal/60">
                We&rsquo;re currently building out our first featured client
                projects. Check back soon, or start a project of your own and
                be one of the first to be featured.
              </p>
              <Button href="/#contact" size="md" className="mt-2">
                Start a Project
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
