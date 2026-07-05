import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Malaysia | FAOPS",
};

export default function MalaysiaPage() {
  return (
    <div data-testid="malaysia-2-page" className="bg-white">
      <PageHeader
        tag="Membership"
        title={<>Malaysia.</>}
        intro="Representing the perinatal community of Malaysia within the Central Region."
        crumbs={[
          { label: "Malaysia" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>National Society</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Perinatal Society of Malaysia
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-faops-secondary">
          <p>
            The national society of Malaysia is a proud member of the Federation of Asia-Oceania Perinatal Societies (FAOPS). Working together with the federation, the society aims to advance the science and art of perinatology within the nation.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mt-8 mb-12">
            <div className="rounded-2xl border border-faops-line bg-faops-bg p-8">
              <h3 className="mb-3 text-xl font-semibold text-faops-navy">President / Representative</h3>
              <p className="text-base font-semibold">TBA</p>
              <p className="text-sm">President of the National Society</p>
            </div>
            <div className="rounded-2xl border border-faops-line bg-faops-bg p-8">
              <h3 className="mb-3 text-xl font-semibold text-faops-navy">Contact Information</h3>
              <p className="text-base">Details regarding the society's secretariat, website, and direct contact information are maintained in the internal FAOPS directory.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
