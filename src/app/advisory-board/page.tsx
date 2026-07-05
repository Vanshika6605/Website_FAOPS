import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag, UserIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Advisory Board | FAOPS",
};

const advisors = [
  { name: "Advisory Board Member", role: "Past President", country: "TBA" },
  { name: "Advisory Board Member", role: "Senior Advisor", country: "TBA" },
  { name: "Advisory Board Member", role: "Scientific Advisor", country: "TBA" },
  { name: "Advisory Board Member", role: "Policy Advisor", country: "TBA" },
];

export default function AdvisoryBoardPage() {
  return (
    <div data-testid="advisory-page" className="bg-white">
      <PageHeader
        tag="Office Bearers"
        title={<>Advisory Board.</>}
        intro="The Advisory Board provides strategic guidance, drawing on decades of experience in clinical perinatology and global health."
        crumbs={[
          { label: "Office Bearers", href: "/the-council-2" },
          { label: "Advisory Board" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Advisors</SectionTag>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
              Guiding our mission.
            </h2>
          </div>
          <p className="max-w-md text-faops-secondary">
            Composed of past presidents and distinguished experts, the board ensures FAOPS stays true to its core objectives.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {advisors.map((member, index) => (
            <div
              key={index}
              data-testid={`advisor-${index}`}
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
