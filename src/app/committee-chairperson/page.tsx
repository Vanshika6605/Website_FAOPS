import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag, UserIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Committee Chairperson | FAOPS",
};

const chairpersons = [
  { name: "Chairperson — Scientific Committee", role: "Scientific Committee", country: "TBA" },
  { name: "Chairperson — Education Committee", role: "Education Committee", country: "TBA" },
  { name: "Chairperson — Membership Committee", role: "Membership Committee", country: "TBA" },
  { name: "Chairperson — Finance Committee", role: "Finance Committee", country: "TBA" },
];

export default function CommitteeChairpersonPage() {
  return (
    <div data-testid="committee-page" className="bg-white">
      <PageHeader
        tag="Office Bearers"
        title={<>Committee Chairpersons.</>}
        intro="The specialized committees of FAOPS are led by dedicated chairpersons who guide our scientific, educational, and operational initiatives."
        crumbs={[
          { label: "Office Bearers", href: "/the-council-2" },
          { label: "Committee Chairperson" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Committees</SectionTag>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
              Driving specific initiatives.
            </h2>
          </div>
          <p className="max-w-md text-faops-secondary">
            Our committees focus on niche areas of perinatology, ensuring comprehensive advancement across all fronts.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chairpersons.map((member, index) => (
            <div
              key={member.role}
              data-testid={`chairperson-${index}`}
              className="group rounded-2xl border border-faops-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-faops-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-faops-navy/5 text-faops-primary">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-faops-primary">
                    {member.role}
                  </p>
                  <h3 className="mt-0.5 text-base font-semibold leading-tight text-faops-navy">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-faops-text">
                    {member.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
