import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Council | FAOPS",
};

const council = [
  {
    name: "Han-Suk Kim",
    role: "President",
    country: "Republic of Korea",
  },
  {
    name: "President-Elect",
    role: "President-Elect",
    country: "TBA",
  },
  {
    name: "Immediate Past President",
    role: "Past President",
    country: "Asia-Oceania",
  },
  {
    name: "Secretary General",
    role: "Secretary General",
    country: "Asia-Oceania",
  },
  {
    name: "Treasurer",
    role: "Treasurer",
    country: "Asia-Oceania",
  },
  {
    name: "Deputy Secretary General — East",
    role: "Deputy Secretary General",
    country: "East Region",
  },
  {
    name: "Deputy Secretary General — West",
    role: "Deputy Secretary General",
    country: "West Region",
  },
  {
    name: "Deputy Secretary General — Central",
    role: "Deputy Secretary General",
    country: "Central Region",
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export default function CouncilPage() {
  return (
    <div data-testid="council-page" className="bg-white">
      <PageHeader
        tag="The Council"
        title={<>Officers of the Federation.</>}
        intro="FAOPS is led by a Council of executive officers representing the Eastern, Western and Central regions of Asia and Oceania."
        crumbs={[
          {
            label: "Office Bearers",
            href: "/about-us",
          },
          {
            label: "The Council",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Executive Committee</SectionTag>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
              A regional leadership.
            </h2>
          </div>

          <p className="max-w-md text-faops-secondary">
            Council seats rotate to keep representation balanced across our four
            sub-regions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {council.map((member, index) => (
            <div
              key={member.name}
              data-testid={`council-member-${index}`}
              className="group rounded-2xl border border-faops-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-faops-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-faops-navy/5 text-lg font-semibold text-faops-navy">
                  {initials(member.name)}
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

        <p className="mt-10 text-xs text-faops-text">
          Full names and portraits of Council members are maintained on the
          internal FAOPS directory.
        </p>
      </section>
    </div>
  );
}