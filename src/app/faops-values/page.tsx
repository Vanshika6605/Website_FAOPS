import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Values | FAOPS",
};

export default function ValuesPage() {
  return (
    <div data-testid="values-page" className="bg-white">
      <PageHeader
        tag="Values"
        title={<>Rooted in professionalism and care.</>}
        intro="Scientific integrity, equity of access, regional cooperation and mentorship of the next generation of perinatal leaders form the bedrock of our federation."
        crumbs={[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Values",
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>What We Stand For</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          The Principles Guiding Our Federation
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-faops-line bg-white p-8 shadow-sm transition hover:border-faops-primary hover:shadow-md">
            <h3 className="text-xl font-semibold text-faops-navy">Scientific Integrity</h3>
            <p className="mt-4 text-faops-secondary">
              We uphold the highest standards of evidence-based practice and research. Our congresses and publications are rigorously vetted to ensure they contribute positively to the medical community.
            </p>
          </div>

          <div className="rounded-2xl border border-faops-line bg-white p-8 shadow-sm transition hover:border-faops-primary hover:shadow-md">
            <h3 className="text-xl font-semibold text-faops-navy">Equity of Access</h3>
            <p className="mt-4 text-faops-secondary">
              Every mother and child deserves quality care. We champion policies and programs that aim to reduce healthcare disparities across our diverse member nations.
            </p>
          </div>

          <div className="rounded-2xl border border-faops-line bg-white p-8 shadow-sm transition hover:border-faops-primary hover:shadow-md">
            <h3 className="text-xl font-semibold text-faops-navy">Regional Cooperation</h3>
            <p className="mt-4 text-faops-secondary">
              We believe in the power of unity. By sharing resources, expertise, and support, our 19 member countries can achieve far more together than they could individually.
            </p>
          </div>

          <div className="rounded-2xl border border-faops-line bg-white p-8 shadow-sm transition hover:border-faops-primary hover:shadow-md">
            <h3 className="text-xl font-semibold text-faops-navy">Mentorship</h3>
            <p className="mt-4 text-faops-secondary">
              The future of perinatology lies with our young investigators and practitioners. We are dedicated to providing them with the guidance, platforms, and opportunities they need to thrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
