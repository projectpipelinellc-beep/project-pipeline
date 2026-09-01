import type { Lead } from "./leads";

/**
 * Renders the internal lead-notification email sent to the business owner
 * whenever the website contact form is submitted. Kept separate from the
 * sending logic in lib/leads.ts so the template can be edited independently.
 */

const fieldLabels: Record<string, string> = {
  projectType: "What They Need",
  businessName: "Business Name",
  contactName: "Contact Name",
  phone: "Phone",
  email: "Email",
  currentWebsite: "Current Website",
  industry: "Industry",
  goals: "Goals",
  budget: "Budget",
};

const fieldOrder: (keyof Lead)[] = [
  "projectType",
  "businessName",
  "contactName",
  "phone",
  "email",
  "currentWebsite",
  "industry",
  "goals",
  "budget",
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function renderLeadEmail(lead: Lead) {
  const subject = `New Project Inquiry — ${lead.businessName || "Website Visitor"}`;

  const rows = fieldOrder
    .map((key) => {
      const raw = lead[key];
      const value = typeof raw === "string" && raw.trim() ? raw : "—";
      return { label: fieldLabels[key], value };
    })
    .filter((row) => row.label);

  const textLines = [
    "New project inquiry from the Project Pipeline website:",
    "",
    ...rows.map((row) => `${row.label}: ${row.value}`),
    "",
    `Submitted: ${new Date(lead.submittedAt).toLocaleString("en-US")}`,
  ];

  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #ECE6DA;font:600 11px/1.4 -apple-system,Segoe UI,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#8A8375;white-space:nowrap;vertical-align:top;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:10px 16px;border-bottom:1px solid #ECE6DA;font:400 15px/1.5 -apple-system,Segoe UI,sans-serif;color:#171717;">
            ${escapeHtml(row.value).replace(/\n/g, "<br/>")}
          </td>
        </tr>`
    )
    .join("");

  const html = `
  <div style="background:#FCFAF6;padding:32px 16px;font-family:-apple-system,Segoe UI,sans-serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#FCFAF6;">
      <tr>
        <td style="padding-bottom:20px;">
          <span style="font:700 13px/1 -apple-system,Segoe UI,sans-serif;letter-spacing:.08em;color:#8B1E24;text-transform:uppercase;">
            Project Pipeline
          </span>
          <h1 style="margin:10px 0 0;font:600 24px/1.3 Georgia,serif;color:#171717;">
            New Project Inquiry
          </h1>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;border:1px solid #ECE6DA;border-radius:2px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rowsHtml}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding-top:20px;">
          <p style="margin:0;font:400 13px/1.6 -apple-system,Segoe UI,sans-serif;color:#8A8375;">
            Submitted ${escapeHtml(new Date(lead.submittedAt).toLocaleString("en-US"))} via
            the website contact form. Reply to this email to respond directly to
            ${escapeHtml(lead.contactName || "the sender")}.
          </p>
        </td>
      </tr>
    </table>
  </div>`;

  return { subject, html, text: textLines.join("\n") };
}
