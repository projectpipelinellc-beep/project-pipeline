import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${company.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage eyebrow="LEGAL" title="Privacy Policy" updated="September 1, 2026">
      <p>
        This Privacy Policy explains how {company.name} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
        information when you visit our website or submit a project inquiry.
      </p>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Information We Collect
        </h2>
        <p className="mt-3">
          When you submit our contact or project inquiry form, we collect the
          information you provide, which may include your name, business
          name, email address, phone number, industry, current website, and
          details about your project. We may also collect standard technical
          information automatically, such as browser type, device type, and
          general usage data through analytics tools.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          How We Use Your Information
        </h2>
        <p className="mt-3">We use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Respond to your project inquiry and communicate with you</li>
          <li>Evaluate and scope potential projects</li>
          <li>Improve our website and services</li>
          <li>Send follow-up communications related to your inquiry</li>
        </ul>
        <p className="mt-3">
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Information Sharing
        </h2>
        <p className="mt-3">
          We may share information with trusted service providers who help us
          operate our business, such as email delivery, customer relationship
          management (CRM), and hosting providers. These providers are only
          permitted to use your information to perform services on our
          behalf.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Cookies &amp; Analytics
        </h2>
        <p className="mt-3">
          Our website may use cookies or similar technologies to understand
          how visitors use our site and to improve the browsing experience.
          You can control cookie behavior through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Data Security
        </h2>
        <p className="mt-3">
          We take reasonable measures to protect the information you provide
          to us. However, no method of electronic transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Your Rights
        </h2>
        <p className="mt-3">
          You may request access to, correction of, or deletion of the
          personal information we hold about you by contacting us using the
          information below.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Changes to This Policy
        </h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium text-pp-charcoal">
          Contact Us
        </h2>
        <p className="mt-3">
          If you have questions about this Privacy Policy, please contact us
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
