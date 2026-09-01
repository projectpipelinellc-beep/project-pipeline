import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 font-sans font-semibold uppercase tracking-[0.08em] transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pp-red focus-visible:ring-offset-2 focus-visible:ring-offset-pp-cream disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-pp-red text-pp-cream-warm hover:bg-pp-red-dark active:bg-pp-red-darker",
  secondary:
    "bg-pp-charcoal text-pp-cream-warm hover:bg-black",
  outline:
    "border border-pp-charcoal/30 text-pp-charcoal hover:border-pp-charcoal hover:bg-pp-charcoal hover:text-pp-cream-warm",
  ghost: "text-pp-charcoal hover:text-pp-red",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-xs",
  lg: "h-14 px-8 text-sm",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, className: _c, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
