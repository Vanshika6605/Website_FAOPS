import type { HTMLAttributes, ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
}

export function SectionTag({ children }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faops-primary">
      <span className="h-px w-6 bg-faops-primary" />
      {children}
    </div>
  );
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className = "",
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-faops-line bg-white p-8 transition hover:border-faops-primary hover:shadow-[0_20px_60px_-30px_rgba(41,68,129,0.25)] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

interface ArrowRightProps {
  small?: boolean;
}

export function ArrowRight({
  small = false,
}: ArrowRightProps) {
  const size = small ? 14 : 16;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition group-hover:translate-x-0.5"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

interface UserIconProps {
  className?: string;
}

export function UserIcon({ className = "h-5 w-5" }: UserIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}