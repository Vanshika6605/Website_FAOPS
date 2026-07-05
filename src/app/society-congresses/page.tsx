import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Society Congresses | FAOPS",
};

const pastCongresses = [
  { year: 2024, location: "Seoul, Republic of Korea", title: "23rd FAOPS Congress" },
  { year: 2022, location: "Tokyo, Japan", title: "22nd FAOPS Congress" },
  { year: 2018, location: "Manila, Philippines", title: "20th FAOPS Congress" },
  { year: 2016, location: "Kuala Lumpur, Malaysia", title: "19th FAOPS Congress" },
];

export default function SocietyCongressesPage() {
  return (
    <div data-testid="congresses-page" className="bg-white">
      <PageHeader
        tag="Congresses"
        title={<>Biennial Scientific Meetings.</>}
        intro="The FAOPS Congress is the premier event for perinatologists in the Asia-Oceania region, facilitating knowledge exchange and collaboration."
        crumbs={[
          {
            label: "Society Congresses",
          },
        ]}
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Upcoming */}
          <div>
            <SectionTag>Upcoming</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy">
              24th FAOPS Congress
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-faops-line bg-faops-bg">
              <div className="p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-faops-primary/10 px-3 py-1 text-xs font-semibold text-faops-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-faops-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-faops-primary"></span>
                  </span>
                  Upcoming Event
                </div>
                <h3 className="text-xl font-bold text-faops-navy">To Be Announced</h3>
                <p className="mt-2 text-faops-secondary">
                  The host city and dates for the upcoming 24th FAOPS Congress will be announced shortly by the Executive Council.
                </p>
              </div>
            </div>
          </div>

          {/* Past */}
          <div>
            <SectionTag>Archive</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy">
              Past Congresses
            </h2>
            <div className="mt-6 space-y-4">
              {pastCongresses.map((congress) => (
                <div 
                  key={congress.year}
                  className="flex items-center justify-between rounded-xl border border-faops-line p-4 transition hover:border-faops-primary hover:shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-faops-navy">{congress.title}</h3>
                    <p className="text-sm text-faops-secondary">{congress.location}</p>
                  </div>
                  <div className="text-lg font-bold text-faops-primary/50">
                    {congress.year}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-sm italic text-faops-text">
              Note: The 21st FAOPS Congress (2020) was impacted by global events and adapted into regional virtual symposiums.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
