import { budgetRanges, projectTypes } from "@/data/contact-form";

export type ContactFormData = {
  projectType: (typeof projectTypes)[number] | "";
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  currentWebsite: string;
  industry: string;
  goals: string;
  budget: (typeof budgetRanges)[number] | "";
};

export const emptyContactForm: ContactFormData = {
  projectType: "",
  businessName: "",
  contactName: "",
  phone: "",
  email: "",
  currentWebsite: "",
  industry: "",
  goals: "",
  budget: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s()+.-]{7,20}$/;

export type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateStep(
  step: number,
  data: ContactFormData
): FieldErrors {
  const errors: FieldErrors = {};

  if (step === 1) {
    if (!data.projectType) errors.projectType = "Please choose an option.";
  }

  if (step === 2) {
    if (!data.businessName.trim())
      errors.businessName = "Business name is required.";
    if (!data.contactName.trim())
      errors.contactName = "Your name is required.";
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_PATTERN.test(data.phone.trim())) {
      errors.phone = "Enter a valid phone number.";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(data.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
    if (!data.industry) errors.industry = "Please select an industry.";
  }

  if (step === 3) {
    if (!data.goals.trim() || data.goals.trim().length < 10) {
      errors.goals = "Please share a bit more detail (10+ characters).";
    }
  }

  if (step === 4) {
    if (!data.budget) errors.budget = "Please select a budget range.";
  }

  return errors;
}

export function validateAll(data: ContactFormData): FieldErrors {
  return {
    ...validateStep(1, data),
    ...validateStep(2, data),
    ...validateStep(3, data),
    ...validateStep(4, data),
  };
}
