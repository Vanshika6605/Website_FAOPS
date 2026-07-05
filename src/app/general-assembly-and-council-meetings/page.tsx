import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Meetings | FAOPS",
};

export default function MeetingsPage() {
  return (
    <div data-testid="meetings-page" className="bg-white">
      <PageHeader
        tag="More"
        title={<>General Assembly & Council Meetings.</>}
        intro="An overview of the schedule and structure for our primary administrative assemblies."
        crumbs={[
          { label: "Meetings" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Administrative Structure</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Gathering the Federation
        </h2>

        <div className="mt-8 space-y-10 text-lg leading-relaxed text-faops-secondary">
          
          <div>
            <h3 className="mb-3 text-2xl font-semibold text-faops-navy">The General Assembly</h3>
            <p>
              The General Assembly is the supreme governing body of FAOPS. It convenes biennially (every two years) in conjunction with the FAOPS Congress. During this critical meeting, delegates from all 19 member nations gather to review the Federation's progress, vote on constitutional amendments, elect new Council members, and decide on the host nation for future congresses.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-semibold text-faops-navy">The Executive Council Meetings</h3>
            <p>
              The Executive Council meets more frequently to manage the ongoing affairs of the Federation. They typically hold an annual meeting—one during the biennial congress, and a mid-term meeting in the intervening year. These sessions focus on reviewing financial statements, evaluating committee progress, and organizing upcoming scientific and educational events.
            </p>
          </div>

          <div className="rounded-2xl border border-faops-line bg-faops-bg p-8 text-center">
            <h4 className="text-xl font-semibold text-faops-navy">Upcoming Schedule</h4>
            <p className="mt-2 text-base text-faops-secondary">
              Agendas and exact dates for the next General Assembly and Council Meetings will be distributed directly to member society presidents by the Secretariat.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
