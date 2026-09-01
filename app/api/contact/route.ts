import { NextResponse } from "next/server";
import { emptyContactForm, validateAll, type ContactFormData } from "@/lib/contact";
import { processLead } from "@/lib/leads";

export const runtime = "nodejs";

function sanitize(input: unknown): ContactFormData {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<
    string,
    unknown
  >;

  const pick = (key: keyof ContactFormData) =>
    typeof raw[key] === "string" ? (raw[key] as string).trim().slice(0, 2000) : "";

  return {
    ...emptyContactForm,
    projectType: pick("projectType") as ContactFormData["projectType"],
    businessName: pick("businessName"),
    contactName: pick("contactName"),
    phone: pick("phone"),
    email: pick("email"),
    currentWebsite: pick("currentWebsite"),
    industry: pick("industry"),
    goals: pick("goals"),
    budget: pick("budget") as ContactFormData["budget"],
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const data = sanitize(body);
  const errors = validateAll(data);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Validation failed.", errors },
      { status: 422 }
    );
  }

  try {
    await processLead(data);
  } catch (error) {
    console.error("[api/contact] processLead failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your project. Please try again.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
