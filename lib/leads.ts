import { Resend } from "resend";
import { company } from "@/data/company";
import { renderLeadEmail } from "./email";
import type { ContactFormData } from "./contact";

export type Lead = ContactFormData & {
  submittedAt: string;
  source: string;
};

/**
 * Modular lead-processing pipeline.
 *
 * Each integration below is an independent, swappable step. Wire up real
 * services by filling in the implementation and adding the required
 * environment variables — the orchestrator (`processLead`) already calls
 * each step in order and tolerates individual steps being no-ops.
 */

/**
 * Send an internal notification email to the business owner via Resend
 * (https://resend.com). Requires a RESEND_API_KEY environment variable —
 * see README.md for setup. Silently skips (with a log) if unconfigured so
 * local development and other environments don't need it to run.
 */
async function notifyByEmail(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[leads] notifyByEmail skipped — RESEND_API_KEY is not set.");
    return;
  }

  if (!company.email) {
    console.warn("[leads] notifyByEmail skipped — data/company.ts has no email configured.");
    return;
  }

  const resend = new Resend(apiKey);
  const { subject, html, text } = renderLeadEmail(lead);

  // EMAIL_FROM lets a verified sending domain be used once one is set up in
  // Resend (e.g. "Project Pipeline <leads@projectpipeline.co>"). Until then,
  // Resend's shared onboarding domain works out of the box.
  const from = process.env.EMAIL_FROM || "Project Pipeline <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: company.email,
    replyTo: lead.email || undefined,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

/** Push the lead into a CRM (HubSpot, GoHighLevel, Pipedrive, etc.). */
async function syncToCrm(lead: Lead): Promise<void> {
  // TODO: integrate with a CRM API. Keep credentials in environment
  // variables and avoid hardcoding endpoints or tokens.
  if (process.env.NODE_ENV !== "production") {
    console.log("[leads] syncToCrm (stub):", lead.businessName);
  }
}

/** Persist the lead to a database for record-keeping and reporting. */
async function saveToDatabase(lead: Lead): Promise<void> {
  // TODO: integrate with a database (Postgres, Supabase, etc.).
  if (process.env.NODE_ENV !== "production") {
    console.log("[leads] saveToDatabase (stub):", lead.submittedAt);
  }
}

/** Run the lead through an AI qualification workflow. */
async function qualifyWithAI(lead: Lead): Promise<void> {
  // TODO: integrate with an AI workflow (e.g. Claude API) to score and
  // summarize the lead for the sales team.
  if (process.env.NODE_ENV !== "production") {
    console.log("[leads] qualifyWithAI (stub):", lead.goals.slice(0, 40));
  }
}

/** Trigger an automated SMS/email follow-up sequence for the prospect. */
async function scheduleFollowUp(lead: Lead): Promise<void> {
  // TODO: integrate with an SMS/email automation platform.
  if (process.env.NODE_ENV !== "production") {
    console.log("[leads] scheduleFollowUp (stub):", lead.phone);
  }
}

export async function processLead(data: ContactFormData): Promise<Lead> {
  const lead: Lead = {
    ...data,
    submittedAt: new Date().toISOString(),
    source: "website-contact-form",
  };

  const steps = [
    notifyByEmail,
    syncToCrm,
    saveToDatabase,
    qualifyWithAI,
    scheduleFollowUp,
  ];

  for (const step of steps) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await step(lead);
    } catch (error) {
      console.error(`[leads] step "${step.name}" failed:`, error);
    }
  }

  return lead;
}
