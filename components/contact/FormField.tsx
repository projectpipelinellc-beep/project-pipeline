import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  error?: string;
  optional?: boolean;
};

export function TextField({
  label,
  error,
  optional,
  id,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-pp-charcoal/60">
        {label} {optional && <span className="normal-case text-pp-charcoal/35">(optional)</span>}
      </label>
      <input
        id={id}
        className={cn(
          "h-12 w-full border bg-pp-cream-warm px-4 font-sans text-base text-pp-charcoal placeholder:text-pp-charcoal/30 focus:outline-none focus:ring-1 focus:ring-pp-red",
          error ? "border-pp-red" : "border-pp-charcoal/15 focus:border-pp-red"
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-sans text-xs text-pp-red">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  error,
  optional,
  id,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-pp-charcoal/60">
        {label} {optional && <span className="normal-case text-pp-charcoal/35">(optional)</span>}
      </label>
      <textarea
        id={id}
        className={cn(
          "w-full resize-none border bg-pp-cream-warm px-4 py-3 font-sans text-base text-pp-charcoal placeholder:text-pp-charcoal/30 focus:outline-none focus:ring-1 focus:ring-pp-red",
          error ? "border-pp-red" : "border-pp-charcoal/15 focus:border-pp-red"
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-sans text-xs text-pp-red">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  error,
  optional,
  id,
  children,
  ...rest
}: BaseProps &
  SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-pp-charcoal/60">
        {label} {optional && <span className="normal-case text-pp-charcoal/35">(optional)</span>}
      </label>
      <select
        id={id}
        className={cn(
          "h-12 w-full border bg-pp-cream-warm px-4 font-sans text-base text-pp-charcoal focus:outline-none focus:ring-1 focus:ring-pp-red",
          error ? "border-pp-red" : "border-pp-charcoal/15 focus:border-pp-red"
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-sans text-xs text-pp-red">
          {error}
        </p>
      )}
    </div>
  );
}
