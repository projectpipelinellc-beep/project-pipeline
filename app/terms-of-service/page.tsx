import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using the ${company.name} website and services.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage eyebrow="LEGAL" title="Terms of Service" updated="September 1, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
        {" "}
        {company.name} website located at {company.url} (the
        &ldquo;Site&rdquo;). By using our Site, you agree to these Terms.
      </p>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Use of the Site
        </h2>
        <p className="mt-3">
          This Site is provided for informational purposes to help you learn
          about {company.name}&rsquo;s services and to submit project
          inquiries. You agree to use the Site only for lawful purposes and
          not to misuse any forms, content, or functionality on the Site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Project Inquiries &amp; Services
        </h2>
        <p className="mt-3">
          Submitting a project inquiry through this Site does not create a
          binding agreement between you and {company.name}. Project scope,
          pricing, and timelines are determined separately once we have
          discussed your specific needs, and any engagement is governed by a
          separate agreement between the parties.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Intellectual Property
        </h2>
        <p className="mt-3">
          All content on this Site, including text, graphics, logos, and
          design elements, is the property of {company.name} unless otherwise
          noted, and may not be copied, reproduced, or distributed without
          permission.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          No Guarantees
        </h2>
        <p className="mt-3">
          While we work to help businesses improve their online presence,
          marketing performance, and operational efficiency, we do not
          guarantee specific results, rankings, revenue, or return on
          advertising spend. Outcomes vary based on numerous factors outside
          our control.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Limitation of Liability
        </h2>
        <p className="mt-3">
          To the fullest extent permitted by law, {company.name} shall not be
          liable for any indirect, incidental, or consequential damages
          arising from your use of this Site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Changes to These Terms
        </h2>
        <p className="mt-3">
          We may revise these Terms from time to time. Continued use of the
          Site after changes are posted constitutes acceptance of the revised
          Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Contact Us
        </h2>
        <p className="mt-3">
          If you have questions about these Terms, please contact us
          {company.email ? (
            <>
              {" "}
              at{" "}
              <a href={`mailto:${company.email}`} className="text-pp-red">
                {company.email}
              </a>
              .
            </>
          ) : (
            " through our contact form."
          )}
        </p>
      </section>
    </LegalPage>
  );
}
