import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Constitution | FAOPS",
};

export default function ConstitutionPage() {
  return (
    <div data-testid="constitution-page" className="bg-white">
      <PageHeader
        tag="More"
        title={<>Constitution and By-Laws.</>}
        intro="The governing document of the Federation of Asia-Oceania Perinatal Societies."
        crumbs={[
          { label: "Constitution" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Legal Framework</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          FAOPS Constitution
        </h2>

        <div className="mt-8 space-y-8 text-lg leading-relaxed text-faops-secondary">
          <p>
            The Federation of Asia-Oceania Perinatal Societies (FAOPS) operates under a strict constitution and set of by-laws designed to ensure fair representation, financial transparency, and adherence to our core medical directives.
          </p>

          <div className="rounded-2xl border-l-4 border-faops-primary bg-faops-bg p-8">
            <h3 className="mb-4 text-xl font-semibold text-faops-navy">Article I: Name and Objectives</h3>
            <p className="text-base">
              The organization shall be known as the Federation of Asia-Oceania Perinatal Societies. Its primary objective is to advance the science and art of perinatology and promote maternal, fetal, and neonatal welfare across the region.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-faops-primary bg-faops-bg p-8">
            <h3 className="mb-4 text-xl font-semibold text-faops-navy">Article II: Membership</h3>
            <p className="text-base">
              Membership shall be open to national societies of perinatology or equivalent medical bodies within the Asia and Oceania regions that subscribe to the objectives of the Federation.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-faops-primary bg-faops-bg p-8">
            <h3 className="mb-4 text-xl font-semibold text-faops-navy">Article III: Governance</h3>
            <p className="text-base">
              The governing body of the Federation shall be the General Assembly, comprising delegates from all member societies. The Executive Council shall manage the affairs of the Federation between General Assembly meetings.
            </p>
          </div>
          
          <p className="text-base italic mt-8">
            The full, unabridged Constitution and By-Laws document is available for member societies upon request to the Secretariat.
          </p>
        </div>
      </section>
    </div>
  );
}
