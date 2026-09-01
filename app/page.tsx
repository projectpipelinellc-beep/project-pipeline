import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { ProblemSection } from "@/components/problem/ProblemSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AIAutomationShowcase } from "@/components/automation-showcase/AutomationShowcase";
import { IndustriesSection } from "@/components/industries/IndustriesSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { WhySection } from "@/components/why/WhySection";
import { ComparisonSection } from "@/components/comparison/ComparisonSection";
import { AboutSection } from "@/components/about/AboutSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <AIAutomationShowcase />
        <IndustriesSection />
        <PortfolioSection />
        <ProcessSection />
        <WhySection />
        <ComparisonSection />
        <AboutSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
