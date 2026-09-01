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

/** Send an internal notification email to the business owner/team. */
async function notifyByEmail(lead: Lead): Promise<void> {
  // TODO: integrate with an email provider (Resend, Postmark, SendGrid, etc.)
  // using an API key stored in an environment variable, e.g. RESEND_API_KEY.
  if (process.env.NODE_ENV !== "production") {
    console.log("[leads] notifyByEmail (stub):", lead.email);
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
