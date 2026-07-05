import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = {
  label: string;
  href?: string;
};

interface PageHeaderProps {
  tag: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}

export default function PageHeader({
  tag,
  title,
  intro,
  crumbs = [],
  children,
}: PageHeaderProps) {
  return (
    <section
      data-testid="page-header"
      className="relative overflow-hidden border-b border-faops-line bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 faops-grid-bg opacity-70" aria-hidden />
      <div
        className="absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-faops-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full bg-faops-navy/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 lg:pt-24 lg:pb-20">
        {/* Breadcrumb */}
        {crumbs.length > 0 && (
          <nav
            data-testid="breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-faops-text"
          >
            <Link
              href="/"
              className="transition hover:text-faops-primary"
            >
              Home
            </Link>

            {crumbs.map((crumb, index) => (
              <span
                key={index}
                className="flex items-center gap-2"
              >
                <span className="text-faops-line">/</span>

                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition hover:text-faops-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-faops-navy">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Tag */}
        <div className="faops-fade-up inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faops-primary">
          <span className="h-px w-6 bg-faops-primary" />
          {tag}
        </div>

        {/* Title */}
        <h1
          data-testid="page-title"
          className="faops-fade-up faops-delay-1 mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-faops-navy md:text-5xl"
        >
          {title}
        </h1>

        {/* Intro */}
        {intro && (
          <p className="faops-fade-up faops-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-faops-secondary">
            {intro}
          </p>
        )}

        {/* Optional Content */}
        {children && (
          <div className="faops-fade-up faops-delay-3 mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}