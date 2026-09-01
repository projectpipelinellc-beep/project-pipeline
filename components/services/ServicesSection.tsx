import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="bg-pp-cream-warm py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WHAT WE DO"
            headline="Everything Your Business Needs to Move Forward."
            className="balance"
          />
        </Reveal>

        <div className="mt-16">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
