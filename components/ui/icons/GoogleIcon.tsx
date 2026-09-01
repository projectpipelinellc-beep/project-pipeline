import type { SVGProps } from "react";

/**
 * Line-art Google "G" mark, drawn to match the stroke weight and proportions
 * of the lucide-react icon set (used elsewhere for Instagram/Facebook) so
 * the footer's social row stays visually consistent.
 */
export function GoogleIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1 -3.16 -6.84" />
      <path d="M21 12h-8" />
    </svg>
  );
}
