"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OptionCard } from "./OptionCard";
import { TextField, TextAreaField, SelectField } from "./FormField";
import { ProgressIndicator } from "./ProgressIndicator";
import { SuccessScreen } from "./SuccessScreen";
import {
  emptyContactForm,
  validateStep,
  type ContactFormData,
  type FieldErrors,
} from "@/lib/contact";
import { projectTypes, budgetRanges, industryOptions } from "@/data/contact-form";

const TOTAL_STEPS = 5;

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<ContactFormData>(emptyContactForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (field: keyof ContactFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const goNext = () => {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setDirection(1);
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goBack = () => {
    setDirection(-1);
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = async () => {
    const stepErrors = validateStep(4, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      setStep(4);
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-pp-charcoal/10 bg-pp-cream-warm">
        <SuccessScreen />
      </div>
    );
  }

  return (
    <div className="border border-pp-charcoal/10 bg-pp-cream-warm p-6 sm:p-10">
      <ProgressIndicator current={step} />

      <div className="relative min-h-[340px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 1 && (
              <fieldset>
                <legend className="mb-6 font-display text-2xl font-medium text-pp-charcoal">
                  What can we help you with?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {projectTypes.map((type) => (
                    <OptionCard
                      key={type}
                      label={type}
                      selected={data.projectType === type}
                      onClick={() => update("projectType", type)}
                    />
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-3 flex items-center gap-1.5 font-sans text-xs text-pp-red">
                    <AlertCircle size={13} /> {errors.projectType}
                  </p>
                )}
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend className="mb-6 font-display text-2xl font-medium text-pp-charcoal">
                  Tell us about your business
                </legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    id="businessName"
                    label="Business Name"
                    value={data.businessName}
                    onChange={(e) => update("businessName", e.target.value)}
                    error={errors.businessName}
                    autoComplete="organization"
                  />
                  <TextField
                    id="contactName"
                    label="Your Name"
                    value={data.contactName}
                    onChange={(e) => update("contactName", e.target.value)}
                    error={errors.contactName}
                    autoComplete="name"
                  />
                  <TextField
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    error={errors.phone}
                    autoComplete="tel"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <TextField
                    id="currentWebsite"
                    label="Current Website"
                    optional
                    value={data.currentWebsite}
                    onChange={(e) => update("currentWebsite", e.target.value)}
                    placeholder="https://"
                  />
                  <SelectField
                    id="industry"
                    label="Industry"
                    value={data.industry}
                    onChange={(e) => update("industry", e.target.value)}
                    error={errors.industry}
                  >
                    <option value="">Select an industry</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectField>
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset>
                <legend className="mb-6 font-display text-2xl font-medium text-pp-charcoal">
                  What are you trying to accomplish?
                </legend>
                <TextAreaField
                  id="goals"
                  label="Project Goals"
                  rows={8}
                  value={data.goals}
                  onChange={(e) => update("goals", e.target.value)}
                  error={errors.goals}
                  placeholder="Tell us what's currently not working, what you'd like to improve, or what you'd like to automate."
                />
              </fieldset>
            )}

            {step === 4 && (
              <fieldset>
                <legend className="mb-6 font-display text-2xl font-medium text-pp-charcoal">
                  Budget range
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {budgetRanges.map((range) => (
                    <OptionCard
                      key={range}
                      label={range}
                      selected={data.budget === range}
                      onClick={() => update("budget", range)}
                    />
                  ))}
                </div>
                {errors.budget && (
                  <p className="mt-3 flex items-center gap-1.5 font-sans text-xs text-pp-red">
                    <AlertCircle size={13} /> {errors.budget}
                  </p>
                )}
              </fieldset>
            )}

            {step === 5 && (
              <div>
                <h3 className="mb-6 font-display text-2xl font-medium text-pp-charcoal">
                  Let&rsquo;s Build Your Pipeline
                </h3>
                <dl className="divide-y divide-pp-charcoal/10 border border-pp-charcoal/10">
                  {[
                    ["What You Need", data.projectType],
                    ["Business Name", data.businessName],
                    ["Your Name", data.contactName],
                    ["Phone", data.phone],
                    ["Email", data.email],
                    ["Current Website", data.currentWebsite || "—"],
                    ["Industry", data.industry],
                    ["Goals", data.goals],
                    ["Budget", data.budget],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <dt className="shrink-0 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-pp-charcoal/45 sm:w-40">
                        {label}
                      </dt>
                      <dd className="font-sans text-sm text-pp-charcoal">{value}</dd>
                    </div>
                  ))}
                </dl>

                {status === "error" && submitError && (
                  <p className="mt-4 flex items-center gap-1.5 font-sans text-sm text-pp-red">
                    <AlertCircle size={15} /> {submitError}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-pp-charcoal/10 pt-6">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 1 || status === "submitting"}
          className="flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-pp-charcoal/60 transition-colors hover:text-pp-charcoal disabled:opacity-0"
        >
          <ArrowLeft size={15} /> Back
        </button>

        {step < TOTAL_STEPS ? (
          <Button onClick={goNext} size="md">
            Continue
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        ) : (
          <Button onClick={submit} size="md" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Submitting
              </>
            ) : (
              "Submit Project"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
