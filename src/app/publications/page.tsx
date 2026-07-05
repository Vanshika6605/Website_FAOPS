import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import { SectionTag, ArrowRight } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events | FAOPS",
};

const upcoming = [
  {
    date: "2026",
    title: "FAOPS Regional Congress",
    location: "Asia-Oceania Region",
    type: "Congress",
    description:
      "The biennial gathering of member societies, researchers and clinicians.",
  },
  {
    date: "2025",
    title: "Perinatal Workshop Series",
    location: "Sub-regional",
    type: "Workshop",
    description:
      "Hands-on workshops on neonatal resuscitation and maternal outcomes.",
  },
  {
    date: "2025",
    title: "Young Investigator Symposium",
    location: "Virtual",
    type: "Symposium",
    description:
      "Featuring emerging voices in perinatal research from across the region.",
  },
];

const past = [
  {
    year: "2023",
    title: "17th FAOPS Congress",
    location: "Seoul, Republic of Korea",
  },
  {
    year: "2021",
    title: "16th FAOPS Congress",
    location: "Virtual",
  },
  {
    year: "2019",
    title: "15th FAOPS Congress",
    location: "Bali, Indonesia",
  },
  {
    year: "2017",
    title: "14th FAOPS Congress",
    location: "Hanoi, Vietnam",
  },
];

export default function EventsPage() {
  return (
    <div data-testid="events-page" className="bg-white">
      <PageHeader
        tag="Events"
        title={<>Congresses, workshops and symposia.</>}
        intro="FAOPS convenes the perinatal community through biennial congresses, sub-regional workshops and dedicated sessions for young investigators."
        crumbs={[{ label: "Events" }]}
      />

      {/* Upcoming Events */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <SectionTag>Upcoming</SectionTag>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
              What's on the calendar.
            </h2>
          </div>
        </div>

        <div className="grid gap-4">
          {upcoming.map((event) => (
            <article
              key={event.title}
              data-testid={`upcoming-event-${event.title}`}
              className="group grid items-center gap-6 rounded-2xl border border-faops-line bg-white p-6 transition hover:border-faops-primary hover:shadow-[0_20px_60px_-30px_rgba(41,68,129,0.25)] md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-2">
                <p className="text-3xl font-semibold text-faops-navy">
                  {event.date}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-faops-primary">
                  {event.type}
                </p>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-lg font-semibold leading-snug text-faops-navy">
                  {event.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-faops-secondary">
                  {event.description}
                </p>

                <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-faops-text">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  {event.location}
                </p>
              </div>

              <div className="md:col-span-3 md:text-right">
                <Link
                  href="/society-congresses"
                  data-testid={`event-details-${event.title}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-faops-line bg-white px-4 py-2 text-xs font-medium text-faops-navy transition hover:border-faops-navy"
                >
                  Details
                  <ArrowRight small />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="border-y border-faops-line bg-faops-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTag>Past Congresses</SectionTag>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
            A track record spanning decades.
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-faops-line bg-white">
            {past.map((event) => (
              <div
                key={event.year + event.title}
                data-testid={`past-event-${event.year}`}
                className="grid grid-cols-12 items-center border-b border-faops-line/70 px-6 py-5 transition last:border-b-0 hover:bg-faops-bg/60"
              >
                <p className="col-span-2 text-sm font-semibold text-faops-primary">
                  {event.year}
                </p>

                <p className="col-span-6 text-sm text-faops-navy">
                  {event.title}
                </p>

                <p className="col-span-4 text-right text-xs text-faops-text">
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}